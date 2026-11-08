import type { Resource } from "@data/resources";

/** Published articles only (drafts excluded), newest first. */
export function getPublishedResources(all: Resource[]): Resource[] {
  return all
    .filter((r) => !r.draft)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

/**
 * Related articles: same category scores highest, shared services add to the score.
 * Never includes the article itself or drafts.
 */
export function getRelatedResources(current: Resource, all: Resource[], limit = 2): Resource[] {
  return getPublishedResources(all)
    .filter((r) => r.slug !== current.slug)
    .map((r) => {
      const shared = (r.relatedServiceSlugs ?? []).filter((s) => current.relatedServiceSlugs?.includes(s)).length;
      return { r, score: (r.category === current.category ? 10 : 0) + shared };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.r.publishDate.localeCompare(a.r.publishDate))
    .slice(0, limit)
    .map((x) => x.r);
}

/** Human-readable date for display, e.g. "January 15, 2026". Dates are ISO yyyy-mm-dd. */
export function formatResourceDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
