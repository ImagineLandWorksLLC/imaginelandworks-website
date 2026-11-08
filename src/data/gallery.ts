export interface GalleryPhoto {
  /** Path relative to src/assets/images/services/ (e.g. "demolition/gallery/job-1.jpg"). Omit until a real photo is available. */
  src?: string;
  alt: string;
}

export type GalleryItem =
  | { kind: "photo"; photo: GalleryPhoto; caption?: string; category?: string }
  | { kind: "before-after"; before: GalleryPhoto; after: GalleryPhoto; caption?: string; category?: string };
