export interface GalleryPhoto {
  /** Filename only from src/assets/images/gallery/. Omit until a real photo is available. */
  src?: string;
  alt: string;
}

export type GalleryItem =
  | { kind: "photo"; photo: GalleryPhoto; caption?: string }
  | { kind: "before-after"; before: GalleryPhoto; after: GalleryPhoto; caption?: string };

/**
 * Placeholder-safe by design: every entry below has no `src` yet, so the
 * gallery renders "Coming soon" tiles. Add a `src` filename to any entry
 * once a real jobsite photo exists — no other code changes are needed.
 */
export const galleryItems: GalleryItem[] = [
  { kind: "photo", photo: { alt: "Land clearing project in Lakeland, FL" }, caption: "Land Clearing" },
  { kind: "photo", photo: { alt: "Excavation project in Polk County, FL" }, caption: "Excavation" },
  { kind: "photo", photo: { alt: "Demolition project in Lakeland, FL" }, caption: "Demolition" },
  { kind: "photo", photo: { alt: "Site preparation and grading project" }, caption: "Site Preparation" },
  { kind: "photo", photo: { alt: "Forestry mulching project" }, caption: "Mulching" },
  { kind: "photo", photo: { alt: "Pond cleaning and restoration project" }, caption: "Pond Cleaning" },
  {
    kind: "before-after",
    before: { alt: "Overgrown property before land clearing" },
    after: { alt: "Cleared, build-ready property after land clearing" },
    caption: "Land Clearing — Before & After",
  },
  {
    kind: "before-after",
    before: { alt: "Property before site preparation and grading" },
    after: { alt: "Graded, build-ready property after site preparation" },
    caption: "Site Preparation — Before & After",
  },
];
