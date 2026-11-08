# Adding a resource article

Articles are TypeScript objects in [src/data/resources.ts](../src/data/resources.ts). Page templates are
`src/pages/resources/index.astro` and `[slug].astro`.

## Steps

1. Add an object to `resources` with a unique kebab-case `slug` (this is the URL: `/resources/<slug>/`).
   **Never change the slug of a published article** — it would break the URL.
2. Fill in `category` (`pricing-planning`, `regulations-permitting`, `building-tips`, or `maintenance`),
   `title`, `shortDescription`, `seoTitle` (aim for ≤ 60 characters), `seoDescription` (about 150–160 characters,
   naming the service and Lakeland/Polk County), `publishDate` (`YYYY-MM-DD`), and `body`.
3. Add `relatedServiceSlugs` so the article links to services. Related articles are chosen automatically
   from the same category and shared services.
4. Add `faqs` only for questions that are answered on the page (they become FAQPage structured data).
5. Set `updatedDate` whenever you materially change a published article.
6. **Start new articles with `draft: true`.** Drafts are not built, listed, or put in the sitemap. Remove
   `draft` only after the article has been reviewed.

## Review checklist before un-drafting

- [ ] Every legal, permitting, licensing, and safety claim has been checked against an authoritative source
      (county/state agency pages) and the source is noted in the pull request.
- [ ] No prices or guarantees unless the owner approved them.
- [ ] Practical and specific to Central Florida; no keyword stuffing.
- [ ] Headings go h2 → h3 in order (the page title is the only h1).

See [content-backlog.md](./content-backlog.md) for planned articles and outlines.
