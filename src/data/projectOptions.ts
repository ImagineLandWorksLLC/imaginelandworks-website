/**
 * Shared answer options for the estimate calculator and the project planner.
 * These describe site conditions only — they never change a price on their own
 * (no multipliers have been approved by the owner). See docs/OWNER-DECISIONS.md.
 */

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

export const vegetationOptions = [
  { value: "light", label: "Light (grass, small brush)" },
  { value: "moderate", label: "Moderate (brush, saplings)" },
  { value: "dense", label: "Dense (thick brush, mature trees)" },
] as const satisfies readonly Option[];

export const terrainOptions = [
  { value: "flat", label: "Mostly flat" },
  { value: "uneven", label: "Uneven or sloped" },
  { value: "wet", label: "Wet or low-lying" },
] as const satisfies readonly Option[];

export const accessOptions = [
  { value: "easy", label: "Easy (open gate or driveway)" },
  { value: "limited", label: "Limited (narrow, fenced, or soft ground)" },
] as const satisfies readonly Option[];

export type Vegetation = (typeof vegetationOptions)[number]["value"];
export type Terrain = (typeof terrainOptions)[number]["value"];
export type Access = (typeof accessOptions)[number]["value"];

export function labelFor(options: readonly Option[], value: string | undefined): string | undefined {
  return options.find((o) => o.value === value)?.label;
}
