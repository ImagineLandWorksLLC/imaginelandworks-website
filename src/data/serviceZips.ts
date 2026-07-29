export interface ZipEntry {
  zip: string;
  citySlug: string;
  cityName: string;
}

/**
 * ZIP codes mapped to their service-area city page. Not exhaustive — the
 * ZIP checker falls back to a "likely in range" message for other
 * Central Florida (33x/34x) ZIPs rather than a hard no.
 */
export const serviceZips: ZipEntry[] = [
  // Lakeland
  { zip: "33801", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33803", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33804", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33805", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33809", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33810", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33811", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33812", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33813", citySlug: "lakeland", cityName: "Lakeland" },
  { zip: "33815", citySlug: "lakeland", cityName: "Lakeland" },
  // Auburndale
  { zip: "33823", citySlug: "auburndale", cityName: "Auburndale" },
  // Winter Haven
  { zip: "33830", citySlug: "winter-haven", cityName: "Winter Haven" },
  { zip: "33880", citySlug: "winter-haven", cityName: "Winter Haven" },
  { zip: "33881", citySlug: "winter-haven", cityName: "Winter Haven" },
  { zip: "33882", citySlug: "winter-haven", cityName: "Winter Haven" },
  { zip: "33884", citySlug: "winter-haven", cityName: "Winter Haven" },
  // Bartow
  { zip: "33830", citySlug: "bartow", cityName: "Bartow" },
  { zip: "33831", citySlug: "bartow", cityName: "Bartow" },
  // Polk City
  { zip: "33868", citySlug: "polk-city", cityName: "Polk City" },
  // Mulberry
  { zip: "33860", citySlug: "mulberry", cityName: "Mulberry" },
  // Plant City
  { zip: "33563", citySlug: "plant-city", cityName: "Plant City" },
  { zip: "33565", citySlug: "plant-city", cityName: "Plant City" },
  { zip: "33566", citySlug: "plant-city", cityName: "Plant City" },
  { zip: "33567", citySlug: "plant-city", cityName: "Plant City" },
  // Haines City
  { zip: "33844", citySlug: "haines-city", cityName: "Haines City" },
  { zip: "33845", citySlug: "haines-city", cityName: "Haines City" },
];
