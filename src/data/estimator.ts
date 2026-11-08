/**
 * Ballpark estimate configuration — the single source of truth for every
 * dollar figure shown on the site (homepage calculator AND service pages).
 *
 * Pricing status:
 *  - "approved"           Owner-confirmed rates. A dollar range may be shown.
 *  - "awaiting-approval"  Numbers below are benchmarks, NOT approved. They are
 *                         never displayed; visitors see "Request a custom estimate".
 *  - "quote-only"         Too many cost drivers to ballpark. Always a custom estimate.
 *
 * To approve a service: confirm the rates with the owner, update the numbers,
 * and change pricingStatus to "approved". Nothing else needs to change.
 *
 * Site-condition inputs (vegetation, terrain, access, hauling) do NOT adjust
 * the number: no multipliers are approved. They are listed as price factors and
 * added to the quote summary. Add per-service `modifiers` only after the owner
 * approves them.
 */

export type PricingStatus = "approved" | "awaiting-approval" | "quote-only";

export interface EstimateService {
  /** Matches Service.anchor in services.ts */
  slug: string;
  label: string;
  pricingStatus: PricingStatus;
  /** False for services where lot acreage is not the main driver (acreage input is hidden). */
  usesAcreage: boolean;
  /** Smallest / largest acreage the estimate covers. Larger jobs get a custom estimate. */
  minAcres: number;
  maxAcres: number;
  /** Ballpark rate per acre, low and high */
  ratePerAcreLow: number;
  ratePerAcreHigh: number;
  /** Minimum project charge, so small lots never read as unrealistically cheap */
  minLow: number;
  minHigh: number;
  /** Why no number is shown, for services that are not "approved". */
  customReason?: string;
}

export const estimateServices: EstimateService[] = [
  {
    slug: "land-clearing",
    label: "Land Clearing",
    pricingStatus: "approved",
    usesAcreage: true,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 4500,
    ratePerAcreHigh: 8000,
    minLow: 2500,
    minHigh: 4000,
  },
  {
    slug: "mulching",
    label: "Forestry Mulching",
    pricingStatus: "approved",
    usesAcreage: true,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 1500,
    ratePerAcreHigh: 3000,
    minLow: 1000,
    minHigh: 1800,
  },
  {
    slug: "bush-hogging",
    label: "Bush Hogging",
    pricingStatus: "approved",
    usesAcreage: true,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 200,
    ratePerAcreHigh: 600,
    minLow: 200,
    minHigh: 600,
  },
  {
    slug: "lawn-care",
    label: "Lawn Care",
    pricingStatus: "awaiting-approval",
    usesAcreage: true,
    minAcres: 0.25,
    maxAcres: 10,
    // Unapproved benchmark — never displayed.
    ratePerAcreLow: 50,
    ratePerAcreHigh: 100,
    minLow: 35,
    minHigh: 50,
    customReason: "Lawn care is priced per property and visit schedule.",
  },
  {
    slug: "site-preparation",
    label: "Site Preparation",
    pricingStatus: "awaiting-approval",
    usesAcreage: true,
    minAcres: 0.25,
    maxAcres: 10,
    // Unapproved benchmark — never displayed.
    ratePerAcreLow: 1500,
    ratePerAcreHigh: 5000,
    minLow: 1200,
    minHigh: 2500,
    customReason: "Site preparation depends heavily on the plans, grading, and fill needed.",
  },
  {
    slug: "tree-work",
    label: "Tree Work",
    pricingStatus: "awaiting-approval",
    usesAcreage: false,
    minAcres: 0.25,
    maxAcres: 10,
    // Unapproved benchmark — never displayed.
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 600,
    minHigh: 15000,
    customReason: "Tree work is priced per tree based on size, location, and access.",
  },
  {
    slug: "excavation",
    label: "Excavation",
    pricingStatus: "quote-only",
    usesAcreage: false,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    customReason: "Excavation has too many variables (depth, soil, access, disposal) to ballpark online.",
  },
  {
    slug: "demolition",
    label: "Demolition",
    pricingStatus: "quote-only",
    usesAcreage: false,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    customReason: "Demolition depends on the structure, materials, and disposal requirements.",
  },
  {
    slug: "pond-cleaning",
    label: "Pond Cleaning",
    pricingStatus: "quote-only",
    usesAcreage: false,
    minAcres: 0.25,
    maxAcres: 10,
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    customReason: "Pond cleaning depends on the pond size, depth, and what needs to be removed.",
  },
];

export function getEstimateService(slug: string): EstimateService | undefined {
  return estimateServices.find((s) => s.slug === slug);
}
