import type { Access, Terrain, Vegetation } from "@data/projectOptions";

/**
 * Transparent, rule-based service recommendations for /plan-your-project/.
 * No AI, no network calls, no prices. Every recommendation carries the reason
 * it was made, and results are always presented as preliminary.
 */

export const propertyTypeOptions = [
  { value: "residential", label: "Residential lot" },
  { value: "commercial", label: "Commercial property" },
  { value: "agricultural", label: "Agricultural acreage" },
  { value: "vacant", label: "Vacant land" },
  { value: "other", label: "Other" },
] as const;

export const outcomeOptions = [
  { value: "clear-overgrown", label: "Clear an overgrown lot" },
  { value: "prepare-construction", label: "Prepare for construction" },
  { value: "remove-trees-brush", label: "Remove trees or brush" },
  { value: "improve-drainage", label: "Improve drainage" },
  { value: "clean-up", label: "Clean up an existing property" },
  { value: "maintain-acreage", label: "Maintain acreage" },
  { value: "remove-structure", label: "Remove an old structure" },
] as const;

export type PropertyType = (typeof propertyTypeOptions)[number]["value"];
export type Outcome = (typeof outcomeOptions)[number]["value"];

export interface PlannerAnswers {
  propertyType?: PropertyType;
  outcome?: Outcome;
  /** Approximate acreage. */
  acres?: number;
  zip?: string;
  terrain?: Terrain;
  vegetation?: Vegetation;
  access?: Access;
  notes?: string;
}

export type Confidence = "likely" | "possible";

export interface Recommendation {
  /** Service slug (matches Service.anchor). */
  slug: string;
  confidence: Confidence;
  reasons: string[];
}

export interface PlannerResult {
  recommendations: Recommendation[];
  notes: string[];
}

interface Suggestion {
  slug: string;
  confidence: Confidence;
  reason: string;
}

interface Rule {
  id: string;
  when: (a: PlannerAnswers) => boolean;
  suggest: Suggestion[];
  notes?: string[];
}

const dense = (a: PlannerAnswers) => a.vegetation === "dense";
const light = (a: PlannerAnswers) => a.vegetation === "light";

export const RULES: Rule[] = [
  // ── Clear an overgrown lot ───────────────────────────────────────────────
  {
    id: "overgrown-base",
    when: (a) => a.outcome === "clear-overgrown",
    suggest: [{ slug: "land-clearing", confidence: "likely", reason: "You want to clear an overgrown lot." }],
  },
  {
    id: "overgrown-dense",
    when: (a) => a.outcome === "clear-overgrown" && dense(a),
    suggest: [
      {
        slug: "mulching",
        confidence: "likely",
        reason: "Dense brush can often be mulched in place instead of hauled away.",
      },
    ],
  },
  {
    id: "overgrown-light",
    when: (a) => a.outcome === "clear-overgrown" && light(a),
    suggest: [
      {
        slug: "bush-hogging",
        confidence: "likely",
        reason: "Light vegetation is often handled by bush hogging rather than full clearing.",
      },
    ],
  },
  {
    id: "overgrown-moderate",
    when: (a) => a.outcome === "clear-overgrown" && a.vegetation === "moderate",
    suggest: [
      { slug: "mulching", confidence: "possible", reason: "Moderate brush and saplings can sometimes be mulched in place." },
    ],
  },

  // ── Prepare for construction ─────────────────────────────────────────────
  {
    id: "construction",
    when: (a) => a.outcome === "prepare-construction",
    suggest: [
      { slug: "land-clearing", confidence: "likely", reason: "Building sites usually need to be cleared first." },
      { slug: "site-preparation", confidence: "likely", reason: "Site preparation covers grading and getting the pad ready to build." },
      { slug: "excavation", confidence: "possible", reason: "Excavation may be needed if your plans include digging, footings, or utilities." },
    ],
  },

  // ── Remove trees or brush ────────────────────────────────────────────────
  {
    id: "trees",
    when: (a) => a.outcome === "remove-trees-brush",
    suggest: [{ slug: "tree-work", confidence: "likely", reason: "You want trees or brush removed." }],
  },
  {
    id: "trees-brush-heavy",
    when: (a) => a.outcome === "remove-trees-brush" && (dense(a) || a.vegetation === "moderate"),
    suggest: [
      { slug: "mulching", confidence: "possible", reason: "Heavy brush can be mulched in place." },
      { slug: "land-clearing", confidence: "possible", reason: "Clearing the whole area may be more practical than removing items one at a time." },
    ],
  },

  // ── Improve drainage ─────────────────────────────────────────────────────
  {
    id: "drainage",
    when: (a) => a.outcome === "improve-drainage",
    suggest: [
      {
        slug: "excavation",
        confidence: "possible",
        reason: "Grading or ditch work is sometimes used to move water, once the cause is understood.",
      },
      { slug: "site-preparation", confidence: "possible", reason: "Regrading the surface can be part of a drainage solution." },
    ],
    notes: [
      "Drainage problems have many possible causes. This tool can't diagnose yours — an on-site assessment is needed before anyone can recommend a fix.",
    ],
  },
  {
    id: "wet-terrain",
    when: (a) => a.terrain === "wet" && a.outcome !== "improve-drainage",
    suggest: [],
    notes: ["You described wet or low-lying ground. Mention it in your quote request so it can be assessed on site."],
  },

  // ── Clean up an existing property ────────────────────────────────────────
  {
    id: "cleanup",
    when: (a) => a.outcome === "clean-up",
    suggest: [
      { slug: "land-clearing", confidence: "possible", reason: "Overgrowth and debris can be cleared in one pass." },
      { slug: "tree-work", confidence: "possible", reason: "Dead or overgrown trees are often part of a cleanup." },
    ],
  },
  {
    id: "cleanup-light",
    when: (a) => a.outcome === "clean-up" && (light(a) || a.propertyType === "residential" || a.propertyType === "commercial"),
    suggest: [{ slug: "lawn-care", confidence: "likely", reason: "Mowing and routine cleanup suit lawns and maintained grounds." }],
  },
  {
    id: "cleanup-acreage",
    when: (a) => a.outcome === "clean-up" && (a.propertyType === "agricultural" || a.propertyType === "vacant"),
    suggest: [{ slug: "bush-hogging", confidence: "likely", reason: "Bush hogging cuts down overgrown fields and fence lines." }],
  },

  // ── Maintain acreage ─────────────────────────────────────────────────────
  {
    id: "maintain-acreage",
    when: (a) => a.outcome === "maintain-acreage",
    suggest: [{ slug: "bush-hogging", confidence: "likely", reason: "Regular bush hogging keeps fields and acreage from growing over." }],
    notes: ["Ask about a recurring schedule when you request your quote."],
  },
  {
    id: "maintain-lawn",
    when: (a) =>
      a.outcome === "maintain-acreage" &&
      (a.propertyType === "residential" || a.propertyType === "commercial" || (a.acres !== undefined && a.acres <= 1)),
    suggest: [{ slug: "lawn-care", confidence: "likely", reason: "Smaller or maintained properties are usually served by routine lawn care." }],
  },

  // ── Remove an old structure ──────────────────────────────────────────────
  {
    id: "structure",
    when: (a) => a.outcome === "remove-structure",
    suggest: [
      { slug: "demolition", confidence: "likely", reason: "You want a structure removed." },
      { slug: "excavation", confidence: "possible", reason: "Slabs and foundations may need to be removed or the ground leveled afterward." },
      { slug: "land-clearing", confidence: "possible", reason: "Overgrowth around the structure may need to be cleared for access." },
    ],
  },
];

export const GENERAL_NOTES = [
  "These recommendations are preliminary. A professional on-site evaluation is needed to confirm what your project requires.",
];

const CONF_ORDER: Record<Confidence, number> = { likely: 0, possible: 1 };

/** Evaluate every rule and merge suggestions per service (highest confidence wins, reasons are combined). */
export function recommendServices(answers: PlannerAnswers): PlannerResult {
  const bySlug = new Map<string, Recommendation>();
  const notes: string[] = [];

  for (const rule of RULES) {
    if (!rule.when(answers)) continue;
    for (const s of rule.suggest) {
      const existing = bySlug.get(s.slug);
      if (!existing) {
        bySlug.set(s.slug, { slug: s.slug, confidence: s.confidence, reasons: [s.reason] });
      } else {
        if (CONF_ORDER[s.confidence] < CONF_ORDER[existing.confidence]) existing.confidence = s.confidence;
        if (!existing.reasons.includes(s.reason)) existing.reasons.push(s.reason);
      }
    }
    for (const n of rule.notes ?? []) if (!notes.includes(n)) notes.push(n);
  }

  if (answers.access === "limited") {
    notes.push("Limited access can affect which equipment can be used on your property. Include details in your quote request.");
  }
  if (answers.acres !== undefined && answers.acres > 10) {
    notes.push("Larger properties are quoted individually after a site review.");
  }

  const recommendations = [...bySlug.values()].sort(
    (a, b) => CONF_ORDER[a.confidence] - CONF_ORDER[b.confidence],
  );
  return { recommendations, notes: [...notes, ...GENERAL_NOTES] };
}

// ── Navigation ───────────────────────────────────────────────────────────────

export const STEP_COUNT = 5;
export const STEP_TITLES = [
  "Property type",
  "Desired outcome",
  "Property details",
  "Recommended services",
  "Request a quote",
] as const;

export type StepErrors = Partial<Record<keyof PlannerAnswers, string>>;

const MAX_ACRES = 10000;

/** Validate the answers needed to leave a step. Steps 4 and 5 have no inputs. */
export function validateStep(step: number, a: PlannerAnswers): StepErrors {
  const errors: StepErrors = {};
  if (step === 1 && !a.propertyType) errors.propertyType = "Choose the type of property.";
  if (step === 2 && !a.outcome) errors.outcome = "Choose what you want to accomplish.";
  if (step === 3) {
    if (a.acres !== undefined && (!Number.isFinite(a.acres) || a.acres <= 0 || a.acres > MAX_ACRES)) {
      errors.acres = "Enter a size in acres greater than 0, or leave it blank.";
    }
    if (a.zip !== undefined && a.zip !== "" && !/^\d{5}$/.test(a.zip)) {
      errors.zip = "Enter a valid 5-digit ZIP code, or leave it blank.";
    }
  }
  return errors;
}

export interface NavResult {
  step: number;
  errors: StepErrors;
}

/** Move forward one step if the current step validates; otherwise stay put with errors. */
export function goNext(step: number, a: PlannerAnswers): NavResult {
  const errors = validateStep(step, a);
  if (Object.keys(errors).length > 0) return { step, errors };
  return { step: Math.min(step + 1, STEP_COUNT), errors: {} };
}

export function goBack(step: number): NavResult {
  return { step: Math.max(step - 1, 1), errors: {} };
}

/** Jump to an earlier step, or to a later one only if every step before it validates. */
export function goTo(target: number, a: PlannerAnswers): NavResult {
  const clamped = Math.min(Math.max(target, 1), STEP_COUNT);
  for (let s = 1; s < clamped; s++) {
    const errors = validateStep(s, a);
    if (Object.keys(errors).length > 0) return { step: s, errors };
  }
  return { step: clamped, errors: {} };
}
