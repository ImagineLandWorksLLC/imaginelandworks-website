import { describe, expect, it } from "vitest";
import { contact } from "@data/contact";
import { serviceCities } from "@data/serviceArea";
import { BUSINESS_ID, buildLocalBusinessSchema } from "@utils/schema";

describe("buildLocalBusinessSchema", () => {
  const schema = buildLocalBusinessSchema();

  it("takes NAP from contact.ts and uses a stable @id", () => {
    expect(schema["@id"]).toBe(BUSINESS_ID);
    expect(schema.telephone).toBe(`+1${contact.phone.raw}`);
    expect(schema.address.postalCode).toBe(contact.address.zip);
    expect(schema.email).toBe(contact.email);
  });

  it("lists only configured service-area cities", () => {
    const names = (schema.areaServed as { name: string }[]).map((a) => a.name);
    expect(names).not.toContain("Lake Wales");
    expect(names).not.toContain("Central Florida");
    for (const c of serviceCities.filter((c) => c.showOnMap !== false)) expect(names).toContain(c.name);
  });

  it("scopes a city page to that city without moving the business address", () => {
    const city = serviceCities.find((c) => c.slug === "bartow")!;
    const s = buildLocalBusinessSchema({ city });
    expect((s.areaServed as { name: string }[]).map((a) => a.name)).toEqual(["Bartow", "Polk County"]);
    expect(s.address.addressLocality).toBe(contact.address.city);
  });

  it("only includes ratings when real reviews are passed", () => {
    expect("aggregateRating" in schema).toBe(false);
    const withReviews = buildLocalBusinessSchema({
      reviews: [{ name: "A", rating: 5, text: "Great" }],
    });
    expect(withReviews).toHaveProperty("aggregateRating.reviewCount", 1);
  });

  it("makes no unverified price claims", () => {
    expect(schema).not.toHaveProperty("priceRange");
  });
});
