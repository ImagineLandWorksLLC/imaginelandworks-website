import { describe, expect, it } from "vitest";
import type { Project } from "@data/projects";
import { filterProjects, getPublishedProjects, validateProject } from "@utils/projects";

const ctx = {
  serviceSlugs: ["land-clearing", "demolition", "mulching"],
  imageExists: (p: string) => p.startsWith("projects/ok/"),
};

const base: Project = {
  slug: "ok-project",
  title: "Lot cleared",
  category: "land-clearing",
  city: "Lakeland",
  county: "Polk County",
  description: "A cleared lot.",
  scope: ["Clear brush"],
  deliverables: ["Cleared lot"],
  galleryImages: [{ src: "projects/ok/a.jpg", alt: "Cleared lot" }],
  permissionConfirmed: true,
  published: true,
  featured: false,
};

describe("validateProject", () => {
  it("accepts a complete project", () => {
    expect(validateProject(base, ctx)).toEqual({ valid: true, errors: [] });
  });

  it.each([
    ["missing title", { title: "" }],
    ["unknown category", { category: "moon-mining" }],
    ["no scope", { scope: [] }],
    ["no deliverables", { deliverables: [] }],
    ["no permission", { permissionConfirmed: false }],
    ["missing image file", { galleryImages: [{ src: "projects/missing.jpg", alt: "x" }] }],
    ["missing alt text", { galleryImages: [{ src: "projects/ok/a.jpg", alt: "" }] }],
    ["no images", { galleryImages: [] }],
    ["bad slug", { slug: "Bad Slug" }],
  ])("rejects: %s", (_name, patch) => {
    expect(validateProject({ ...base, ...patch } as Project, ctx).valid).toBe(false);
  });

  it("rejects a before/after pair that uses the same image twice", () => {
    const img = { src: "projects/ok/a.jpg", alt: "same" };
    const p = { ...base, beforeAfter: [{ before: img, after: img }] };
    expect(validateProject(p, ctx).valid).toBe(false);
  });
});

describe("getPublishedProjects", () => {
  it("hides unpublished projects", () => {
    expect(getPublishedProjects([{ ...base, published: false }], ctx)).toEqual([]);
  });

  it("fails the build for a published but invalid project", () => {
    expect(() => getPublishedProjects([{ ...base, scope: [] }], ctx)).toThrow(/invalid/);
  });

  it("drops testimonials that are not approved", () => {
    const [p] = getPublishedProjects(
      [{ ...base, testimonial: { quote: "Great", attribution: "A. Customer", approved: false } }],
      ctx,
    );
    expect(p.testimonial).toBeUndefined();
  });

  it("keeps approved testimonials", () => {
    const [p] = getPublishedProjects(
      [{ ...base, testimonial: { quote: "Great", attribution: "A. Customer", approved: true } }],
      ctx,
    );
    expect(p.testimonial?.quote).toBe("Great");
  });
});

describe("filterProjects", () => {
  const list: Project[] = [
    base,
    { ...base, slug: "demo", category: "demolition", featured: true },
    { ...base, slug: "multi", category: "mulching", services: ["land-clearing"] },
  ];
  it("returns everything for 'all' or no filter", () => {
    expect(filterProjects(list)).toHaveLength(3);
    expect(filterProjects(list, { category: "all" })).toHaveLength(3);
  });
  it("filters by primary or related service", () => {
    expect(filterProjects(list, { category: "land-clearing" }).map((p) => p.slug)).toEqual(["ok-project", "multi"]);
  });
  it("filters by featured", () => {
    expect(filterProjects(list, { featured: true }).map((p) => p.slug)).toEqual(["demo"]);
  });
});
