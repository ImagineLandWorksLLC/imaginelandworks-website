/**
 * Verified project case studies.
 *
 * A project only appears on the site when `published` is true AND it passes
 * `validateProject()` (see src/utils/projects.ts). Never add a project whose
 * details have not been confirmed by the owner. See docs/ADDING-PROJECTS.md.
 *
 * Image paths are relative to src/assets/images/ and must start with
 * "projects/<slug>/" (e.g. "projects/example/after-1.jpg").
 */

export interface ProjectTestimonial {
  quote: string;
  attribution: string;
  /** Must be true (customer gave permission) or the testimonial is not shown. */
  approved: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface BeforeAfterPair {
  before: ProjectImage;
  after: ProjectImage;
}

export interface Project {
  slug: string;
  title: string;
  /** Slug of the primary service (e.g. "land-clearing"). Must match a service. */
  category: string;
  /** Other related service slugs. */
  services?: string[];
  city?: string;
  county?: string;
  description: string;
  challenge?: string;
  scope: string[];
  deliverables: string[];
  /** Only list equipment the owner has verified was used. */
  equipment?: string[];
  duration?: string;
  results?: string;
  /** Explicit, genuinely matching before/after pairs only. */
  beforeAfter?: BeforeAfterPair[];
  galleryImages: ProjectImage[];
  testimonial?: ProjectTestimonial;
  /** True only once the customer/owner has allowed these photos and details to be shown. */
  permissionConfirmed: boolean;
  published: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  // Example (kept unpublished — copy, fill with VERIFIED details, then set published: true):
  // {
  //   slug: "example-lakeland-lot-clearing",
  //   title: "…",
  //   category: "land-clearing",
  //   city: "Lakeland",
  //   county: "Polk County",
  //   description: "…",
  //   scope: ["…"],
  //   deliverables: ["…"],
  //   galleryImages: [{ src: "projects/example-lakeland-lot-clearing/photo-1.jpg", alt: "…" }],
  //   permissionConfirmed: true,
  //   published: false,
  //   featured: false,
  // },
];
