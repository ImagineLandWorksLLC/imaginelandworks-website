import { describe, expect, it } from "vitest";
import { resources } from "@data/resources";
import type { Resource } from "@data/resources";
import { formatResourceDate, getPublishedResources, getRelatedResources } from "@utils/resources";

const make = (over: Partial<Resource>): Resource => ({
  slug: "a",
  eyebrow: "x",
  category: "pricing-planning",
  title: "A",
  shortDescription: "",
  seoTitle: "A",
  seoDescription: "A",
  publishDate: "2026-01-01",
  body: [],
  relatedServiceSlugs: ["land-clearing"],
  ...over,
});

describe("getPublishedResources", () => {
  it("excludes drafts and sorts newest first", () => {
    const list = [
      make({ slug: "old", publishDate: "2026-01-01" }),
      make({ slug: "draft", draft: true, publishDate: "2026-06-01" }),
      make({ slug: "new", publishDate: "2026-03-01" }),
    ];
    expect(getPublishedResources(list).map((r) => r.slug)).toEqual(["new", "old"]);
  });

  it("keeps all three original articles published at their original slugs", () => {
    expect(getPublishedResources(resources).map((r) => r.slug).sort()).toEqual([
      "land-clearing-cost-florida",
      "land-clearing-permits-florida",
      "land-prep-mistakes-home-build",
    ]);
  });
});

describe("getRelatedResources", () => {
  it("prefers same-category articles, never returns itself or drafts", () => {
    const current = make({ slug: "cur" });
    const list = [
      current,
      make({ slug: "same-cat", category: "pricing-planning", relatedServiceSlugs: [] }),
      make({ slug: "shared-service", category: "building-tips" }),
      make({ slug: "draft", draft: true }),
      make({ slug: "unrelated", category: "building-tips", relatedServiceSlugs: ["pond-cleaning"] }),
    ];
    const related = getRelatedResources(current, list, 3).map((r) => r.slug);
    expect(related[0]).toBe("same-cat");
    expect(related).toContain("shared-service");
    expect(related).not.toContain("cur");
    expect(related).not.toContain("draft");
    expect(related).not.toContain("unrelated");
  });
});

describe("resource data", () => {
  it("has unique slugs and ISO publish dates", () => {
    const slugs = resources.map((r) => r.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const r of resources) expect(r.publishDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("formats dates without timezone drift", () => {
    expect(formatResourceDate("2026-01-15")).toBe("January 15, 2026");
  });
});
