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
   * True for services priced per project rather than per acre (tree work).
   * ratePerAcre* is 0 for these and minLow/minHigh hold the flat quoted
   * range; the acreage slider is hidden.
   */
  flatRate?: boolean;
  /**
   * True for services with too many cost drivers to ballpark at all
   * (excavation, demolition, pond cleaning). No range is shown — the
   * calculator points the customer straight to a quote request instead.
   */
  contactForQuote?: boolean;
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
    ratePerAcreHigh: 600,
    minLow: 200,
    minHigh: 600,
  },
  {
    slug: "tree-work",
    label: "Tree Work",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 600,
    minHigh: 15000,
    flatRate: true,
  },
  {
    slug: "excavation",
    label: "Excavation",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    contactForQuote: true,
  },
  {
    slug: "demolition",
    label: "Demolition",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    contactForQuote: true,
  },
  {
    slug: "pond-cleaning",
    label: "Pond Cleaning",
    ratePerAcreLow: 0,
    ratePerAcreHigh: 0,
    minLow: 0,
    minHigh: 0,
    contactForQuote: true,
  },
];
