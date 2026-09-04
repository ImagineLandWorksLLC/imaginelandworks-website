---
name: local-seo-astro
description: Local SEO and Astro technical-SEO checklist specific to the Imagine Land Works site (imaginelandworks.com) — use whenever adding/editing a page, service, or city, or when asked to audit/improve SEO or Core Web Vitals.
---

# Local SEO & Astro checklist — Imagine Land Works

This is a local land-clearing/excavation business site (Lakeland, FL / Polk County) built on Astro 6. SEO here is mostly about **local search + structured data + not shooting Core Web Vitals in the foot**, not generic content-marketing SEO advice.

## Every new/edited page

- Set `title` and `description` in frontmatter (or `Astro.props` for `.astro` pages) — these flow through [SEO.astro](../../../src/components/SEO.astro). Don't hardcode `<title>`/`<meta description>` elsewhere.
  - `title` should NOT redundantly include "Imagine Land Works" — `SEO.astro` appends `| Imagine Land Works` automatically unless already present.
  - `description` should be unique per page, ~150–160 chars, and name the service + a location (city or "Polk County") where relevant — this is a local business, so location terms in the description matter more than they would for a SaaS site.
- Only set `noindex` for genuinely non-indexable pages (thank-you/confirmation pages, internal utility pages). Don't noindex city or service pages just because content is templated — see duplicate-content note below.
- If the page needs a non-default share image, pass `image` as a site-relative path; otherwise it falls back to `og-default.png` (1200×630 — keep any replacement at that exact ratio).

## Structured data (JSON-LD)

Use [Schema.astro](../../../src/components/Schema.astro) to emit `<script type="application/ld+json">`. Reuse [`buildBreadcrumbSchema`](../../../src/utils/schema.ts), `buildAggregateRating`, `buildReviewSchema` from `@utils/schema` instead of hand-rolling objects.

- Every page below the homepage should carry a `BreadcrumbList` via `buildBreadcrumbSchema`.
- Service detail pages (`src/pages/services/[slug].astro`) should use `Service` (or `LocalBusiness`/`Service` combo) schema, with `areaServed` reflecting the service area, not just the homepage.
- City pages (`src/pages/service-area/[city].astro`) are the highest-leverage local-SEO surface on this site — each should carry its own `LocalBusiness`/`Service` schema scoped to that city (via `@data/serviceArea.ts` lat/lng), not a copy-pasted generic block.
- Reuse real review data from `@data/reviews.ts` for `AggregateRating`/`Review` schema — never fabricate ratings or counts.
- Add `FAQPage` schema on pages that render `FAQSection.astro`/`@data/faqs.ts`, matching the visible Q&A exactly (schema must mirror on-page content, not add hidden text).

## Local SEO specifics (city pages, `serviceArea.ts`)

- Each city page must read as genuinely distinct, not a mail-merge: vary the intro copy, call out real proximity/travel-time or local landmarks, and mention which services are most relevant to that city rather than repeating the full service list verbatim everywhere. Thin, near-duplicate city pages are the single biggest local-SEO risk on a site shaped like this.
- Keep NAP (Name, Address, Phone) consistent everywhere it appears — it's centralized in `@data/contact.ts`; never hardcode phone/address elsewhere.
- `service-area/index.astro` should link to every city page (and vice versa via a "back to service area" or nearby-cities link) — orphaned city pages don't get indexed reliably.

## Sitemap / crawl config

- Sitemap is generated automatically by `@astrojs/sitemap` (configured in `astro.config.mjs`) — don't hand-edit `public/sitemap-index.xml` (it's regenerated on build, per CLAUDE.md).
- `trailingSlash: 'always'` is set globally — always link internally with a trailing slash to avoid redirect chains/duplicate-URL signals.
- If a page should be excluded from the sitemap (e.g. `/404`, `/500`), verify `@astrojs/sitemap`'s filter config rather than relying on `noindex` alone.

## Core Web Vitals / Astro-specific performance

- Always load images through `astro:assets` (`getImage`/`<Image>`), as `SEO.astro` already does for the OG image — this gets automatic responsive `srcset`/format optimization (LCP-friendly) instead of raw `<img>` tags.
- Fonts are self-hosted in `public/fonts/` (Oswald 700, Poppins 400) — if adding a new page with heavy above-the-fold text, make sure the font is preloaded/already referenced in `BaseLayout.astro` rather than introducing a new web font (extra font = CLS + LCP regression).
- Prefer Astro's static rendering (no client-side JS) for content sections; only add `client:*` directives / interactive islands (see `EstimateCalculator.astro`, `ZipChecker.astro`, `BeforeAfterSlider.astro` for existing patterns) where interactivity is actually required — unnecessary JS hurts INP/TBT on mobile, which matters for a service business where most traffic is mobile search.
- Check that any new heavy component (map embeds, sliders, before/after images) lazy-loads below the fold rather than blocking initial render.

## Quick audit checklist (when asked to "check SEO" on a page or the whole site)

1. Unique `title`/`description` present and reasonable length.
2. Canonical resolves correctly (especially on paginated/filtered views, if any are added later).
3. JSON-LD validates conceptually against what's visibly on the page (no schema for content that isn't rendered).
4. Images have meaningful `alt` text (especially gallery/before-after photos — currently a manual/visual area, easy to miss).
5. Internal links use trailing slashes and point to canonical (non-redirected) URLs.
6. No orphaned pages — every real page is reachable from nav, footer, sitemap-relevant internal links, or the service-area/service index pages.
