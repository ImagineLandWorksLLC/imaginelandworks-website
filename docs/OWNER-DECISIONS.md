# Owner decisions and assets still needed

Items the code deliberately does **not** guess at. Each is currently handled conservatively.

## Pricing (see [src/data/estimator.ts](../src/data/estimator.ts))

| Item | Current behavior |
|---|---|
| Land clearing, forestry mulching, bush hogging rates | Shown ($4,500–$8,000, $1,500–$3,000, $200–$600 per acre, with minimums). The code comments describe these as owner-confirmed. **Please re-confirm.** |
| Lawn care, site preparation, tree work | Benchmark numbers exist in the config but are **not shown**. Visitors see "Request a custom estimate". Provide approved rates, then set `pricingStatus: "approved"`. |
| Excavation, demolition, pond cleaning | Always "Request a custom estimate". |
| Multipliers for vegetation density, terrain, access, debris hauling; minimum charges | None approved. These inputs are listed as price factors and added to the quote summary but do **not** change the number. |
| Old service-page ranges (land clearing $1,500–$4,000, demolition, excavation) | Removed. They were marked `TODO(client)` and conflicted with the calculator. |

## Projects and photos

- Verified details, photo permission, and customer testimonial approval for each case study.
- Real before/after pairs (none exist yet; the slider only appears for explicit pairs).
- Photos for land clearing, site preparation, bush hogging, excavation, mulching, tree work, and pond cleaning
  (only demolition and lawn care have photos).
- Which equipment may be listed for each job.

## Existing site claims to verify (not changed)

- Homepage metrics in [metrics.ts](../src/data/metrics.ts): "200+ Projects Completed", "1+ Years in Business",
  "100% Client Satisfaction". `contact.ts` says the company was founded in 2026.
- "Licensed & insured" appears in several descriptions and meta tags.
- Bush hogging page: "Recurring acreage maintenance programs available."
- `/book/` page copy lists **Lake Wales** among served areas, but it is not in `serviceArea.ts`. Structured data now
  uses `serviceArea.ts` only. Decide whether to add Lake Wales or remove it from the copy.
- Review markup (`aggregateRating`) on the home page uses the site's own reviews; Google may ignore self-serving
  review markup for LocalBusiness.

## Maintenance plans (`/maintenance-plans/`)

- Scope is **lawn maintenance only**. Frequencies (weekly, every two weeks, seasonal), minimum visit counts, seasonal
  scope, and any contract or billing terms are not listed until approved.
- Acreage/bush-hogging and commercial grounds maintenance are not offered on this page until confirmed.

## Jobber and operations

- A live test submission and notification/acknowledgement setup (see [JOBBER.md](./JOBBER.md)) — **PENDING**.

## Content

- Fact-check the 6 backlog articles in [content-backlog.md](./content-backlog.md) and the existing permits article
  against county/state sources before publishing or relying on them.

## Optional product decisions

- Expose the estimate calculator as a WebMCP tool (currently only built-in WebMCP tools exist).
- Keep or relax the AI-crawler blocks in `public/robots.txt`.
