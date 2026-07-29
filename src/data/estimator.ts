export interface EstimateService {
  /** Matches Service.anchor in services.ts */
  slug: string;
  label: string;
  /** Ballpark rate per acre, low and high */
  ratePerAcreLow: number;
  ratePerAcreHigh: number;
  /** Floor for very small lots, so the range never reads as unrealistically cheap */
  minLow: number;
  minHigh: number;
  /**
   * True for services priced per project rather than per acre (demolition,
   * excavation, tree work, pond cleaning). ratePerAcre* is 0 for these and
   * minLow/minHigh hold the flat quoted range; the acreage slider is hidden.
   */
  flatRate?: boolean;
}

/**
 * Ballpark, directional pricing only — used to pre-qualify leads before they
 * request a real quote. Rates for land clearing, mulching, and bush hogging
 * reflect current owner-confirmed pricing; other services are benchmarked
 * against current Lakeland/Central Florida market rates.
 */
export const estimateServices: EstimateService[] = [
  {
    slug: "lawn-care",
    label: "Lawn Care (per visit)",
    ratePerAcreLow: 50,
    ratePerAcreHigh: 100,
    minLow: 35,
    minHigh: 50,
  },
  {
    slug: "land-clearing",
    label: "Land Clearing",
    ratePerAcreLow: 4500,
    ratePerAcreHigh: 8000,
    minLow: 2500,
    minHigh: 4000,
  },
  {
    slug: "site-preparation",
    label: "Site Preparation",
    ratePerAcreLow: 1500,
    ratePerAcreHigh: 5000,
    minLow: 1200,
    minHigh: 2500,
  },
  {
    slug: "mulching",
    label: "Forestry Mulching",
    ratePerAcreLow: 1500,
    ratePerAcreHigh: 3000,
    minLow: 1000,
    minHigh: 1800,
  },
  {
    slug: "bush-hogging",
    label: "Bush Hogging",
    ratePerAcreLow: 200,
    ratePerAcreHigh: 500,
    minLow: 200,
    minHigh: 400,
  },
  {
    slug: "tree-work",
    label: "Tree Work",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 300,
    minHigh: 1800,
    flatRate: true,
  },
  {
    slug: "excavation",
    label: "Excavation",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 1500,
    minHigh: 12000,
    flatRate: true,
  },
  {
    slug: "demolition",
    label: "Demolition",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 2500,
    minHigh: 20000,
    flatRate: true,
  },
  {
    slug: "pond-cleaning",
    label: "Pond Cleaning",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 400,
    minHigh: 1800,
    flatRate: true,
  },
];
