export interface GalleryPhoto {
  /** Public path (e.g. "/images/services/demolition/gallery/job-1.jpg"). Omit until a real photo is available. */
  src?: string;
  alt: string;
}

export type GalleryItem =
  | { kind: "photo"; photo: GalleryPhoto; caption?: string }
  | { kind: "before-after"; before: GalleryPhoto; after: GalleryPhoto; caption?: string };
