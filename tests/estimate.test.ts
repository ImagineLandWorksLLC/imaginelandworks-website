import { describe, expect, it } from "vitest";
import { estimateServices, getEstimateService } from "@data/estimator";
import { calculateEstimate, describeResult, ESTIMATE_DISCLAIMER } from "@utils/estimate";

const svc = (slug: string) => getEstimateService(slug)!;

describe("calculateEstimate", () => {
  it("computes a range for an approved service", () => {
    const r = calculateEstimate(svc("land-clearing"), { acres: 2 });
    expect(r).toMatchObject({ kind: "range", low: 9000, high: 16000 });
  });

  it("applies the minimum project charge for small lots", () => {
    const r = calculateEstimate(svc("land-clearing"), { acres: 0.25 });
    expect(r).toMatchObject({ kind: "range", low: 2500, high: 4000 });
  });

  it("never returns a $0 or NaN range for any service and acreage", () => {
    for (const s of estimateServices) {
      for (const acres of [0.25, 1, 5, 10, 12, 50]) {
        const r = calculateEstimate(s, { acres });
        if (r.kind === "range") {
          expect(r.low).toBeGreaterThan(0);
          expect(r.high).toBeGreaterThanOrEqual(r.low);
          expect(Number.isFinite(r.low) && Number.isFinite(r.high)).toBe(true);
        }
      }
    }
  });

  it("only shows dollar ranges for owner-approved services", () => {
    const approved = estimateServices.filter((s) => s.pricingStatus === "approved").map((s) => s.slug);
    expect(approved.sort()).toEqual(["bush-hogging", "land-clearing", "mulching"]);
    for (const s of estimateServices.filter((s) => s.pricingStatus !== "approved")) {
      expect(calculateEstimate(s, { acres: 1 }).kind).toBe("custom");
    }
  });

  it("returns a custom estimate for jobs above the supported size", () => {
    const r = calculateEstimate(svc("land-clearing"), { acres: 25 });
    expect(r.kind).toBe("custom");
    expect(describeResult(r).headline).toBe("Request a custom estimate");
  });

  it.each([0, -1, NaN, Infinity, undefined])("rejects invalid acreage %s", (acres) => {
    const r = calculateEstimate(svc("mulching"), { acres: acres as number });
    expect(r.kind).toBe("invalid");
    if (r.kind === "invalid") expect(r.errors.acres).toBeTruthy();
  });

  it("rejects acreage below the minimum", () => {
    expect(calculateEstimate(svc("mulching"), { acres: 0.1 }).kind).toBe("invalid");
  });

  it("validates ZIP codes", () => {
    expect(calculateEstimate(svc("mulching"), { acres: 1, zip: "1234" }).kind).toBe("invalid");
    expect(calculateEstimate(svc("mulching"), { acres: 1, zip: "33811" }).kind).toBe("range");
    expect(calculateEstimate(svc("mulching"), { acres: 1, zip: "" }).kind).toBe("range");
  });

  it("does not require acreage for services that do not use it", () => {
    expect(calculateEstimate(svc("excavation"), {}).kind).toBe("custom");
  });

  it("does not change the price based on site details (no approved multipliers)", () => {
    const base = calculateEstimate(svc("land-clearing"), { acres: 3 });
    const detailed = calculateEstimate(svc("land-clearing"), {
      acres: 3,
      vegetation: "dense",
      terrain: "wet",
      access: "limited",
      haulDebris: true,
    });
    expect(base.kind).toBe("range");
    expect(detailed).toMatchObject({
      kind: "range",
      low: (base as { low: number }).low,
      high: (base as { high: number }).high,
    });
  });

  it("lists the visitor's conditions as price factors", () => {
    const r = calculateEstimate(svc("land-clearing"), { acres: 1, vegetation: "dense", haulDebris: true });
    if (r.kind !== "range") throw new Error("expected range");
    expect(r.factors.join(" ")).toMatch(/Dense vegetation/);
    expect(r.factors.join(" ")).toMatch(/Debris hauling/);
    expect(r.exclusions.length).toBeGreaterThan(0);
  });

  it("states the estimate is not a quote", () => {
    expect(ESTIMATE_DISCLAIMER).toMatch(/not a final quote/);
  });
});
