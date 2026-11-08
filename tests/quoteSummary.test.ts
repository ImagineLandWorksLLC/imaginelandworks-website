import { describe, expect, it } from "vitest";
import { buildQuoteSummary, clearQuoteSummary, loadQuoteSummary, saveQuoteSummary } from "@utils/quoteSummary";

describe("quote summary", () => {
  it("includes the details provided and labels the range as not a quote", () => {
    const s = buildQuoteSummary({
      source: "estimate-calculator",
      services: ["Land Clearing"],
      acreage: "2 acres",
      zip: "33811",
      estimateRange: "$9,000–$16,000",
    });
    expect(s).toContain("Land Clearing");
    expect(s).toContain("2 acres");
    expect(s).toContain("(not a quote)");
  });

  it("omits empty fields", () => {
    const s = buildQuoteSummary({ source: "project-planner", services: ["Bush Hogging"] });
    expect(s).not.toMatch(/ZIP|Terrain|Notes/);
  });

  it("has no contact-detail fields and truncates free-text notes", () => {
    const s = buildQuoteSummary({ source: "project-planner", services: [], notes: "x".repeat(1000) });
    expect(s).not.toMatch(/phone|email|name:/i);
    expect(s.length).toBeLessThan(450);
  });

  it("round-trips through storage and survives storage failures", () => {
    const store = new Map<string, string>();
    const storage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    };
    saveQuoteSummary("hello", storage);
    expect(loadQuoteSummary(storage)).toBe("hello");
    clearQuoteSummary(storage);
    expect(loadQuoteSummary(storage)).toBeNull();

    const broken = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
      removeItem: () => {
        throw new Error("blocked");
      },
    };
    expect(() => saveQuoteSummary("x", broken)).not.toThrow();
    expect(loadQuoteSummary(broken)).toBeNull();
  });
});
