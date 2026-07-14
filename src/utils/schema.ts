import type { Review } from "@data/reviews";

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

/** Build a Schema.org AggregateRating from real review data. Returns null if there are no reviews to aggregate. */
export function buildAggregateRating(reviews: Review[]) {
  if (reviews.length === 0) return null;

  const ratingValue = Number(
    (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  );

  return {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Build an array of Schema.org Review objects from real review data. */
export function buildReviewSchema(reviews: Review[]) {
  return reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    reviewBody: r.text,
  }));
}
