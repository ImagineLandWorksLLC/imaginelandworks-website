import type { Review } from "@data/reviews";
import { contact } from "@data/contact";
import { serviceCities } from "@data/serviceArea";
import type { ServiceCity } from "@data/serviceArea";

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

/** Stable @id so every page's LocalBusiness node refers to the same entity. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

const BUSINESS_DESCRIPTION =
  "Imagine Land Works provides professional land clearing, excavation, site preparation, demolition, and more across Lakeland and Polk County, FL.";

// Approximate coordinates of the Lakeland shop (matches the address in contact.ts).
const BUSINESS_GEO = { latitude: 27.9887, longitude: -81.962 };

/**
 * Build the LocalBusiness node. NAP, hours, and social links come from contact.ts,
 * and service areas from serviceArea.ts, so no page needs to hand-write its own copy.
 *
 * Pass `city` on a city page to limit areaServed to that city (and its county).
 * The business address and geo always stay the Lakeland shop: we do not claim an
 * office in other cities.
 */
export function buildLocalBusinessSchema(opts: { reviews?: Review[]; city?: ServiceCity } = {}) {
  const { reviews = [], city } = opts;
  const rating = buildAggregateRating(reviews);

  const areaServed = city
    ? [
        {
          "@type": "City",
          name: city.name,
          geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
        },
        ...(city.county ? [{ "@type": "AdministrativeArea", name: city.county }] : []),
      ]
    : serviceCities.filter((c) => c.showOnMap !== false).map((c) => ({ "@type": "City", name: c.name }));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingBusiness"],
    "@id": BUSINESS_ID,
    name: "Imagine Land Works",
    legalName: contact.legalName,
    url: `${SITE_URL}/`,
    telephone: `+1${contact.phone.raw}`,
    email: contact.email,
    image: `${SITE_URL}/images/ImagineLandWorks.png`,
    description: BUSINESS_DESCRIPTION,
    foundingDate: String(contact.founding),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", ...BUSINESS_GEO },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
    ],
    areaServed,
    sameAs: contact.social.map((s) => s.href),
    ...(rating && { aggregateRating: rating, review: buildReviewSchema(reviews) }),
  };
}
