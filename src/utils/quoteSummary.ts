/**
 * Quote handoff. The estimate calculator, project planner, and maintenance page
 * build a plain-text project summary, keep it in sessionStorage, and /book/ shows
 * it with a Copy button above the Jobber form.
 *
 * Privacy: the summary only ever contains project details the visitor chose to
 * enter. It is never put in a URL, never sent to analytics, and has no
 * name/phone/email fields. Free-text notes are length-limited.
 */

export const QUOTE_SUMMARY_KEY = "ilw:quote-summary";
const MAX_NOTES = 300;

export interface QuoteSummaryData {
  source: "estimate-calculator" | "project-planner" | "maintenance-plans";
  services: string[];
  propertyType?: string;
  outcome?: string;
  acreage?: string;
  vegetation?: string;
  terrain?: string;
  access?: string;
  haulDebris?: boolean;
  zip?: string;
  notes?: string;
  /** Preliminary range text such as "$4,500–$8,000". Omit for custom estimates. */
  estimateRange?: string;
}

const SOURCE_LABEL: Record<QuoteSummaryData["source"], string> = {
  "estimate-calculator": "website estimate calculator",
  "project-planner": "website project planner",
  "maintenance-plans": "website maintenance page",
};

export function buildQuoteSummary(data: QuoteSummaryData): string {
  const lines: string[] = [`Project summary (from the ${SOURCE_LABEL[data.source]})`];
  const add = (label: string, value: string | undefined) => {
    if (value && value.trim()) lines.push(`${label}: ${value.trim()}`);
  };

  add("Services of interest", data.services.join(", "));
  add("Property type", data.propertyType);
  add("Goal", data.outcome);
  add("Approximate size", data.acreage);
  add("Vegetation", data.vegetation);
  add("Terrain", data.terrain);
  add("Access", data.access);
  if (data.haulDebris !== undefined) add("Debris hauling", data.haulDebris ? "Needed" : "Not needed");
  add("ZIP code", data.zip);
  add("Notes", data.notes ? data.notes.replace(/\s+/g, " ").slice(0, MAX_NOTES) : undefined);
  if (data.estimateRange) {
    add("Preliminary planning range", `${data.estimateRange} (not a quote)`);
  }
  return lines.join("\n");
}

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

/** Storage can be unavailable (private mode, blocked cookies) — failures are swallowed. */
export function saveQuoteSummary(summary: string, storage?: StorageLike): void {
  try {
    (storage ?? sessionStorage).setItem(QUOTE_SUMMARY_KEY, summary);
  } catch {
    /* ignore */
  }
}

export function loadQuoteSummary(storage?: StorageLike): string | null {
  try {
    return (storage ?? sessionStorage).getItem(QUOTE_SUMMARY_KEY);
  } catch {
    return null;
  }
}

export function clearQuoteSummary(storage?: StorageLike): void {
  try {
    (storage ?? sessionStorage).removeItem(QUOTE_SUMMARY_KEY);
  } catch {
    /* ignore */
  }
}
