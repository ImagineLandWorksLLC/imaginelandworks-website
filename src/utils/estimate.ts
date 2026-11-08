import type { EstimateService } from "@data/estimator";
import { accessOptions, labelFor, terrainOptions, vegetationOptions } from "@data/projectOptions";
import type { Access, Terrain, Vegetation } from "@data/projectOptions";

export interface EstimateInput {
  acres?: number;
  vegetation?: Vegetation;
  terrain?: Terrain;
  access?: Access;
  /** Whether debris needs to be hauled away. */
  haulDebris?: boolean;
  zip?: string;
}

export type EstimateResult =
  | {
      kind: "range";
      low: number;
      high: number;
      serviceLabel: string;
      acres: number;
      factors: string[];
      exclusions: string[];
    }
  | { kind: "custom"; serviceLabel: string; reason: string; factors: string[] }
  | { kind: "invalid"; errors: Partial<Record<"acres" | "zip", string>> };

export const ESTIMATE_DISCLAIMER =
  "These figures are preliminary planning estimates, not a final quote. Actual pricing depends on site conditions, equipment access, vegetation, debris removal, and the final scope of work.";

export const CUSTOM_ESTIMATE_LABEL = "Request a custom estimate";

const BASE_FACTORS = [
  "Vegetation type and density",
  "Terrain, slope, and wet or soft ground",
  "Equipment access to the work area",
  "Debris hauling and disposal",
];

const EXCLUSIONS = [
  "Permits, surveys, or engineering",
  "Debris hauling or disposal unless included in your written quote",
  "Stump grinding, grading, fill, or seeding unless quoted separately",
];

const ZIP_RE = /^\d{5}$/;

/** Factors that apply to this particular job, based on what the visitor told us. */
export function describeFactors(input: EstimateInput): string[] {
  const factors = [...BASE_FACTORS];
  const specific: string[] = [];
  const veg = labelFor(vegetationOptions, input.vegetation);
  const terrain = labelFor(terrainOptions, input.terrain);
  const access = labelFor(accessOptions, input.access);
  if (input.vegetation === "dense") specific.push(`Dense vegetation (${veg}) may increase the price`);
  if (input.terrain && input.terrain !== "flat") specific.push(`${terrain} terrain may increase the price`);
  if (input.access === "limited") specific.push(`Limited access (${access}) may increase the price`);
  if (input.haulDebris) specific.push("Debris hauling was requested and may be priced separately");
  return [...specific, ...factors];
}

export function validateEstimateInput(
  service: EstimateService,
  input: EstimateInput,
): Partial<Record<"acres" | "zip", string>> {
  const errors: Partial<Record<"acres" | "zip", string>> = {};
  if (service.usesAcreage) {
    const a = input.acres;
    if (a === undefined || !Number.isFinite(a) || a <= 0) {
      errors.acres = "Enter the approximate size of your property in acres.";
    } else if (a < service.minAcres) {
      errors.acres = `The smallest size we can estimate online is ${service.minAcres} acre.`;
    }
  }
  if (input.zip !== undefined && input.zip !== "" && !ZIP_RE.test(input.zip.trim())) {
    errors.zip = "Enter a valid 5-digit ZIP code.";
  }
  return errors;
}

/**
 * Pure pricing function. Never returns a $0 or NaN range: services without
 * approved pricing, and jobs outside the supported size, return `custom`.
 */
export function calculateEstimate(service: EstimateService, input: EstimateInput): EstimateResult {
  const errors = validateEstimateInput(service, input);
  if (Object.keys(errors).length > 0) return { kind: "invalid", errors };

  const factors = describeFactors(input);

  if (service.pricingStatus !== "approved") {
    return {
      kind: "custom",
      serviceLabel: service.label,
      reason: service.customReason ?? "This service is priced after we review your project.",
      factors,
    };
  }

  const acres = input.acres as number;
  if (acres > service.maxAcres) {
    return {
      kind: "custom",
      serviceLabel: service.label,
      reason: `Projects over ${service.maxAcres} acres are priced individually.`,
      factors,
    };
  }

  const low = Math.max(service.ratePerAcreLow * acres, service.minLow);
  const high = Math.max(service.ratePerAcreHigh * acres, service.minHigh);

  // Defensive: misconfigured rates must never surface as a valid-looking quote.
  if (!Number.isFinite(low) || !Number.isFinite(high) || low <= 0 || high <= 0 || high < low) {
    return {
      kind: "custom",
      serviceLabel: service.label,
      reason: "We need to review your project before giving a number.",
      factors,
    };
  }

  return { kind: "range", low, high, serviceLabel: service.label, acres, factors, exclusions: EXCLUSIONS };
}

export const formatMoney = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function formatAcreage(a: number): string {
  return `${a % 1 === 0 ? a : a.toFixed(2)} acre${a === 1 ? "" : "s"}`;
}

/** Display text for a result, shared by the server-rendered and client-updated views. */
export function describeResult(result: EstimateResult): { headline: string; note: string } {
  switch (result.kind) {
    case "range":
      return {
        headline: `${formatMoney(result.low)}–${formatMoney(result.high)}`,
        note: "Preliminary planning range for a typical job of this size.",
      };
    case "custom":
      return { headline: CUSTOM_ESTIMATE_LABEL, note: result.reason };
    case "invalid":
      return { headline: "Check your entries", note: Object.values(result.errors).join(" ") };
  }
}
