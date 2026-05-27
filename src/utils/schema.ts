/** Site origin — mirrors the `site` value in astro.config.mjs. */
export const SITE_URL = "https://imaginelandworks.com";

export interface BreadcrumbItem {
  name: string;
  /** Full URL for this item. Omit for the current (last) page. */
  item?: string;
}

/**
 * Build a Schema.org BreadcrumbList object.
 *
 * @example
 * buildBreadcrumbSchema([
 *   { name: "Home",     item: `${SITE_URL}/` },
 *   { name: "Services", item: `${SITE_URL}/services` },
 *   { name: "Land Clearing" },           // last crumb — no item URL
 * ])
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  };
}
