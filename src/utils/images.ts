import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/{services,projects}/**/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

const ROOT = "/src/assets/images/";

/**
 * Resolve an image path to optimizable metadata. Paths are relative to
 * `src/assets/images/services/` (e.g. "demolition/gallery/job-1.jpg"), or to
 * `src/assets/images/` when they start with "projects/"
 * (e.g. "projects/my-project/after-1.jpg").
 */
export function resolveServiceImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = path.startsWith("projects/") ? `${ROOT}${path}` : `${ROOT}services/${path}`;
  return modules[key]?.default;
}

export function serviceImageExists(path: string): boolean {
  return resolveServiceImage(path) !== undefined;
}
