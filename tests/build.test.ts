/**
 * Build-output checks. These read the static site in dist/, so run `npm run build`
 * first. When dist/ is missing the suite is skipped (CI builds before testing).
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { describe, expect, it } from "vitest";
import { contact } from "@data/contact";
import { projects } from "@data/projects";
import { resources } from "@data/resources";
import { serviceSections } from "@data/serviceSections";

const DIST = join(process.cwd(), "dist");
const hasDist = existsSync(DIST);

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const pages = hasDist
  ? walk(DIST)
      .filter((f) => f.endsWith(".html"))
      .map((f) => ({ route: "/" + relative(DIST, f).split(sep).join("/").replace(/index\.html$/, ""), html: readFileSync(f, "utf8") }))
  : [];
const page = (route: string) => pages.find((p) => p.route === route)?.html ?? "";
const content = pages.filter((p) => !/^\/(404|500)(\.html|\/)/.test(p.route));

describe.skipIf(!hasDist)("build output", () => {
  it("builds the new routes", () => {
    for (const route of ["/plan-your-project/", "/maintenance-plans/", "/gallery/", "/resources/", "/book/"]) {
      expect(page(route), route).not.toBe("");
    }
  });

  it("keeps every service and resource URL", () => {
    for (const s of serviceSections) expect(page(`/services/${s.anchor}/`), s.anchor).not.toBe("");
    for (const r of resources.filter((r) => !r.draft)) expect(page(`/resources/${r.slug}/`), r.slug).not.toBe("");
  });

  it("never publishes drafts or unpublished projects", () => {
    for (const r of resources.filter((r) => r.draft)) expect(page(`/resources/${r.slug}/`)).toBe("");
    for (const p of projects.filter((p) => !p.published)) expect(page(`/projects/${p.slug}/`)).toBe("");
  });

  it("never shows a $0 placeholder estimate", () => {
    for (const p of pages) expect(p.html, p.route).not.toMatch(/\$0\s*(–|&ndash;|&#8211;|-)\s*\$0/);
  });

  it("shows owner-approved dollar figures only", () => {
    const home = page("/");
    expect(home).toContain("Get a Ballpark Estimate");
    // land clearing is the default calculator selection: $4,500 x 1 acre
    expect(home).toContain("$4,500–$8,000");
    // the old, unverified service-page ranges are gone
    for (const slug of ["land-clearing", "excavation", "demolition"]) {
      expect(page(`/services/${slug}/`), slug).not.toMatch(/\$1,500–\$4,000|\$3,000–\$12,000|\$6,000–\$18,000/);
    }
  });

  it("keeps a usable external Jobber link on /book/ and the quote form container", () => {
    const book = page("/book/");
    expect(book).toContain(contact.jobber.workRequestUrl);
    expect(book).toContain(`id="${contact.jobber.clienthubId}"`);
    expect((book.match(/<div[^>]*data-jobber-form/g) ?? []).length).toBe(1);
  });

  it("excludes error pages from the sitemap and includes the new pages", () => {
    const files = walk(DIST).filter((f) => /sitemap.*\.xml$/.test(f));
    const xml = files.map((f) => readFileSync(f, "utf8")).join("\n");
    expect(xml).not.toMatch(/imaginelandworks\.com\/(404|500)/);
    expect(xml).toContain("/plan-your-project/");
    expect(xml).toContain("/maintenance-plans/");
  });

  it("gives every content page one h1, a canonical link, and a description", () => {
    for (const p of content) {
      expect((p.html.match(/<h1[\s>]/g) ?? []).length, `${p.route} h1`).toBe(1);
      expect(p.html, `${p.route} canonical`).toMatch(/<link rel="canonical"/);
      expect(p.html, `${p.route} description`).toMatch(/<meta name="description" content="[^"]{20,}/);
    }
  });

  it("gives every image alt text", () => {
    for (const p of content) {
      const imgs = p.html.match(/<img\b[^>]*>/g) ?? [];
      for (const img of imgs) expect(img, p.route).toMatch(/\salt=/);
    }
  });

  it("uses trailing slashes on internal links", () => {
    for (const p of content) {
      const hrefs = [...p.html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
      for (const h of hrefs) {
        if (/\.[a-z0-9]+$/i.test(h) || h.startsWith("//")) continue;
        expect(h.endsWith("/"), `${p.route} -> ${h}`).toBe(true);
      }
    }
  });

  it("does not list unserved cities in structured data", () => {
    expect(page("/book/")).not.toContain("Lake Wales, FL");
    expect(page("/")).not.toMatch(/"name":"Lake Wales"/);
  });

  it("states the estimate disclaimer next to the calculator", () => {
    expect(page("/")).toContain("not a final quote");
  });

  it("links the planner and maintenance pages from the footer", () => {
    const home = page("/");
    expect(home).toContain('href="/plan-your-project/"');
    expect(home).toContain('href="/maintenance-plans/"');
  });
});
