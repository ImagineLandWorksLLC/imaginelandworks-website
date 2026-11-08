# Adding a project case study

Projects live in [src/data/projects.ts](../src/data/projects.ts). A project becomes public (a `/projects/<slug>/`
page, a card on `/gallery/`, and a card on its service page) only when **both** are true:

1. `published: true`
2. It passes `validateProject()` in [src/utils/projects.ts](../src/utils/projects.ts)

A project marked `published: true` that fails validation **fails the build** with the list of problems. Incomplete data
cannot ship by accident. The list ships empty until real, verified projects are added.

## Before you add one — verify

Do not add a project unless every statement on it is confirmed by the owner:

- [ ] The customer/owner has OK'd showing these photos and the general location (`permissionConfirmed: true`).
- [ ] Title, scope, deliverables, and (if listed) equipment, timeline, and results are accurate for this job.
- [ ] Before/after photos are of the **same spot** from the same angle. Never pair unrelated photos.
- [ ] A testimonial is included only with the customer's written OK (`approved: true`). Otherwise omit it.
- [ ] Location is city/county level only. No street addresses.

Leave optional fields (`challenge`, `equipment`, `duration`, `results`, `testimonial`) out if you can't verify them.
If a job lacks enough verified detail, keep its photos in the regular gallery (`galleryPhotos` in `serviceSections.ts`)
instead of creating a case study.

## Steps

1. Put photos in `src/assets/images/projects/<slug>/` (any size; Astro resizes and converts to WebP at build time).
2. Add an entry to `projects` in `src/data/projects.ts` (see the commented example at the bottom of that array).
   Image paths are relative to `src/assets/images/` and start with `projects/<slug>/`.
   `category` must be an existing service slug such as `land-clearing`.
3. Write real alt text for each image describing what is visible.
4. Set `published: true` once everything is verified.
5. Run `npm run build` and `npm test`. Check `/projects/<slug>/` with `npm run preview`.

## Service-page and gallery photos (no case study)

Add files under `src/assets/images/services/<service>/gallery/` and list them in `galleryPhotos` in
`src/data/serviceSections.ts` using a path relative to `src/assets/images/services/`
(for example `"lawn-care/gallery/job-6.jpg"`). They appear on the service page and in the `/gallery/` filter
automatically. See [src/assets/images/services/README.md](../src/assets/images/services/README.md).
