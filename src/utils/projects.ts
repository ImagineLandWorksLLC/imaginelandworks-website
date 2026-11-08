import type { Project } from "@data/projects";

export interface ProjectValidationContext {
  /** Valid service slugs (from serviceSections). */
  serviceSlugs: string[];
  /** Returns true when an image path resolves to a real file. */
  imageExists: (path: string) => boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateProject(project: Project, ctx: ProjectValidationContext): ValidationResult {
  const errors: string[] = [];
  const req = (cond: boolean, msg: string) => {
    if (!cond) errors.push(msg);
  };

  req(SLUG_RE.test(project.slug ?? ""), "slug must be lowercase-kebab-case");
  req(!!project.title?.trim(), "title is required");
  req(ctx.serviceSlugs.includes(project.category), `category "${project.category}" is not a known service slug`);
  for (const s of project.services ?? []) {
    req(ctx.serviceSlugs.includes(s), `service "${s}" is not a known service slug`);
  }
  req(!!project.description?.trim(), "description is required");
  req(project.scope?.length > 0, "scope needs at least one item");
  req(project.deliverables?.length > 0, "deliverables needs at least one item");
  req(project.permissionConfirmed === true, "permissionConfirmed must be true");

  const images = [
    ...(project.galleryImages ?? []),
    ...(project.beforeAfter ?? []).flatMap((p) => [p.before, p.after]),
  ];
  req(images.length > 0, "at least one image is required");
  for (const img of images) {
    req(!!img.alt?.trim(), `image ${img.src} needs alt text`);
    req(ctx.imageExists(img.src), `image ${img.src} does not exist`);
  }
  for (const pair of project.beforeAfter ?? []) {
    req(pair.before.src !== pair.after.src, "before and after images must differ");
  }

  return { valid: errors.length === 0, errors };
}

/** Testimonials are only shown when explicitly approved. */
export function publicTestimonial(project: Project) {
  return project.testimonial?.approved === true ? project.testimonial : undefined;
}

/**
 * Projects that may be shown publicly. Throws on a project marked `published`
 * that fails validation, so incomplete data fails the build instead of shipping.
 */
export function getPublishedProjects(all: Project[], ctx: ProjectValidationContext): Project[] {
  const out: Project[] = [];
  for (const project of all) {
    if (!project.published) continue;
    const result = validateProject(project, ctx);
    if (!result.valid) {
      throw new Error(`Project "${project.slug}" is published but invalid:\n - ${result.errors.join("\n - ")}`);
    }
    out.push({ ...project, testimonial: publicTestimonial(project) });
  }
  return out;
}

export function filterProjects(list: Project[], opts: { category?: string; featured?: boolean } = {}): Project[] {
  return list.filter(
    (p) =>
      (!opts.category || opts.category === "all" || p.category === opts.category || p.services?.includes(opts.category)) &&
      (opts.featured === undefined || p.featured === opts.featured),
  );
}
