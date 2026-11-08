import { describe, expect, it } from "vitest";
import { services } from "@data/services";
import {
  GENERAL_NOTES,
  RULES,
  STEP_COUNT,
  goBack,
  goNext,
  goTo,
  recommendServices,
  validateStep,
} from "@utils/planner";
import type { PlannerAnswers } from "@utils/planner";

const slugs = (a: PlannerAnswers) => recommendServices(a).recommendations.map((r) => r.slug);
const find = (a: PlannerAnswers, slug: string) => recommendServices(a).recommendations.find((r) => r.slug === slug);

describe("recommendServices", () => {
  it("suggests land clearing and mulching for a dense, overgrown lot", () => {
    const a: PlannerAnswers = { propertyType: "vacant", outcome: "clear-overgrown", vegetation: "dense" };
    expect(find(a, "land-clearing")?.confidence).toBe("likely");
    expect(find(a, "mulching")?.confidence).toBe("likely");
    expect(slugs(a)).not.toContain("bush-hogging");
  });

  it("suggests bush hogging for lightly overgrown land", () => {
    const a: PlannerAnswers = { propertyType: "agricultural", outcome: "clear-overgrown", vegetation: "light" };
    expect(find(a, "bush-hogging")?.confidence).toBe("likely");
  });

  it("suggests land clearing, site preparation and possibly excavation for construction prep", () => {
    const a: PlannerAnswers = { propertyType: "residential", outcome: "prepare-construction" };
    expect(find(a, "land-clearing")?.confidence).toBe("likely");
    expect(find(a, "site-preparation")?.confidence).toBe("likely");
    expect(find(a, "excavation")?.confidence).toBe("possible");
  });

  it("suggests bush hogging for ongoing acreage maintenance and mentions a recurring schedule", () => {
    const a: PlannerAnswers = { propertyType: "agricultural", outcome: "maintain-acreage", acres: 8 };
    const result = recommendServices(a);
    expect(result.recommendations[0].slug).toBe("bush-hogging");
    expect(result.notes.join(" ")).toMatch(/recurring/i);
    expect(slugs(a)).not.toContain("lawn-care");
  });

  it("suggests lawn care for small residential maintenance", () => {
    expect(slugs({ propertyType: "residential", outcome: "maintain-acreage", acres: 0.5 })).toContain("lawn-care");
  });

  it("suggests demolition for removing a structure", () => {
    expect(find({ outcome: "remove-structure" }, "demolition")?.confidence).toBe("likely");
  });

  it("suggests tree work for tree and brush removal", () => {
    expect(find({ outcome: "remove-trees-brush" }, "tree-work")?.confidence).toBe("likely");
  });

  it("treats drainage as an assessment, not a diagnosis", () => {
    const result = recommendServices({ outcome: "improve-drainage", terrain: "wet" });
    expect(result.recommendations.every((r) => r.confidence === "possible")).toBe(true);
    expect(result.notes.join(" ")).toMatch(/can't diagnose/);
    expect(result.notes.join(" ")).toMatch(/on-site assessment/);
  });

  it("merges duplicate suggestions, keeping the highest confidence and all reasons", () => {
    const rec = find({ outcome: "remove-structure", propertyType: "vacant" }, "land-clearing");
    expect(rec?.confidence).toBe("possible");
    const merged = find({ outcome: "clear-overgrown" }, "land-clearing")!;
    expect(merged.reasons.length).toBeGreaterThan(0);
  });

  it("lists likely services before possible ones", () => {
    const { recommendations } = recommendServices({ outcome: "prepare-construction" });
    const firstPossible = recommendations.findIndex((r) => r.confidence === "possible");
    const lastLikely = recommendations.map((r) => r.confidence).lastIndexOf("likely");
    expect(lastLikely).toBeLessThan(firstPossible);
  });

  it("always includes the preliminary-evaluation note", () => {
    for (const note of GENERAL_NOTES) expect(recommendServices({ outcome: "clean-up" }).notes).toContain(note);
  });

  it("returns no recommendations until an outcome is chosen", () => {
    expect(recommendServices({}).recommendations).toEqual([]);
  });

  it("only ever recommends services that exist on the site", () => {
    const valid = new Set(services.map((s) => s.anchor));
    for (const rule of RULES) for (const s of rule.suggest) expect(valid.has(s.slug)).toBe(true);
  });

  it("never mentions prices", () => {
    for (const rule of RULES) {
      for (const s of rule.suggest) expect(s.reason).not.toMatch(/\$|price|cost/i);
    }
  });
});

describe("planner navigation", () => {
  it("blocks Next until the step validates", () => {
    expect(goNext(1, {})).toMatchObject({ step: 1 });
    expect(goNext(1, {}).errors.propertyType).toBeTruthy();
    expect(goNext(1, { propertyType: "vacant" })).toEqual({ step: 2, errors: {} });
    expect(goNext(2, {}).errors.outcome).toBeTruthy();
  });

  it("treats step 3 as optional but validates what is entered", () => {
    expect(goNext(3, {}).step).toBe(4);
    expect(goNext(3, { acres: -2 }).errors.acres).toBeTruthy();
    expect(goNext(3, { acres: NaN }).errors.acres).toBeTruthy();
    expect(goNext(3, { zip: "12" }).errors.zip).toBeTruthy();
    expect(goNext(3, { acres: 2.5, zip: "33811" }).step).toBe(4);
  });

  it("does not move past the last step or before the first", () => {
    expect(goNext(STEP_COUNT, {}).step).toBe(STEP_COUNT);
    expect(goBack(1).step).toBe(1);
    expect(goBack(4).step).toBe(3);
  });

  it("lets users revisit and change earlier answers without losing later ones", () => {
    const answers: PlannerAnswers = { propertyType: "vacant", outcome: "clear-overgrown", acres: 3 };
    expect(goTo(1, answers).step).toBe(1);
    const revised = { ...answers, outcome: "remove-structure" as const };
    expect(goTo(5, revised).step).toBe(5);
    expect(revised.acres).toBe(3);
  });

  it("refuses to jump ahead past an unanswered step", () => {
    expect(goTo(4, { propertyType: "vacant" })).toMatchObject({ step: 2 });
    expect(validateStep(4, {})).toEqual({});
  });
});
