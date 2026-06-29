# Service Images

Photos for each service page, organized by service and type.

## Folder Structure

```
services/
  <service-slug>/
    gallery/       ← general job photos shown in the "Our Work" grid
    before-after/  ← before/after pairs shown in the "Before & After" section
```

Service slugs match the URL: `land-clearing`, `site-preparation`, `demolition`,
`bush-hogging`, `excavation`, `mulching`, `tree-work`, `pond-cleaning`, `lawn-care`.

## File Naming

| Folder | Convention | Example |
|---|---|---|
| `gallery/` | `job-1.jpg`, `job-2.jpg`, … | `land-clearing/gallery/job-1.jpg` |
| `before-after/` | `before-1.jpg`, `after-1.jpg`, `before-2.jpg`, `after-2.jpg` | `demolition/before-after/before-1.jpg` |

The before/after section requires **exactly 4 photos** — 2 before + 2 after — in that order.

## Recommended Format

- **Format:** JPG or WebP
- **Dimensions:** 800×600 px minimum (4:3 ratio matches the gallery grid cells)
- **File size:** Keep under 300 KB per image — compress before dropping in

## Wiring Up Photos

After adding files, update `src/data/serviceSections.ts` for the relevant service:

```ts
// Any number of general photos
galleryPhotos: [
  { src: "/images/services/land-clearing/gallery/job-1.jpg", alt: "Land clearing on a 2-acre lot in Lakeland" },
  { src: "/images/services/land-clearing/gallery/job-2.jpg", alt: "Stump removal and brush clearing" },
],

// Exactly 4: before, after, before, after
beforeAfterPhotos: [
  { src: "/images/services/land-clearing/before-after/before-1.jpg", alt: "Overgrown lot before clearing",   label: "Before" },
  { src: "/images/services/land-clearing/before-after/after-1.jpg",  alt: "Cleared lot ready for build",    label: "After"  },
  { src: "/images/services/land-clearing/before-after/before-2.jpg", alt: "Dense brush on property edge",   label: "Before" },
  { src: "/images/services/land-clearing/before-after/after-2.jpg",  alt: "Clean finish after clearing",    label: "After"  },
],
```

The gallery section appears on every service page (with placeholder tiles until photos are added).
The before/after section only appears once `beforeAfterPhotos` is populated for that service.
