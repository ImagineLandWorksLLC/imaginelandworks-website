import type { ZipEntry } from "@data/serviceZips";

export type ZipStatus =
  | { kind: "invalid" }
  | { kind: "served"; cityName: string; citySlug: string }
  | { kind: "likely" }
  | { kind: "unknown" };

/** Same rules as ZipChecker.astro: known ZIP, then 33x/34x "likely", otherwise unknown. */
export function checkZip(zip: string, zips: ZipEntry[]): ZipStatus {
  const z = zip.trim();
  if (!/^\d{5}$/.test(z)) return { kind: "invalid" };
  const match = zips.find((e) => e.zip === z);
  if (match) return { kind: "served", cityName: match.cityName, citySlug: match.citySlug };
  const prefix = z.slice(0, 2);
  return prefix === "33" || prefix === "34" ? { kind: "likely" } : { kind: "unknown" };
}
