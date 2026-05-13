export interface ServiceCity {
  name: string;
  county?: string;
}

export const serviceCities: ServiceCity[] = [
  { name: "Lakeland",     county: "Polk County" },
  { name: "Auburndale",   county: "Polk County" },
  { name: "Winter Haven", county: "Polk County" },
  { name: "Bartow",       county: "Polk County" },
  { name: "Polk City",    county: "Polk County" },
  { name: "Mulberry",     county: "Polk County" },
  { name: "Plant City",   county: "Hillsborough County" },
  { name: "Haines City",  county: "Polk County" },
];
