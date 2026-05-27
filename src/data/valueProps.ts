import type { ValueProp } from "@components/ValueProps.astro";

/**
 * Standard trust/credibility props used on the home page, service pages,
 * and city landing pages. Import and pass to <ValueProps items={...} />.
 */
export const defaultValueProps: ValueProp[] = [
  { icon: "shield-halved",  title: "Licensed & Insured" },
  { icon: "gears",          title: "Professional Equipment" },
  { icon: "bolt",           title: "Fast Turnaround" },
  { icon: "house-chimney",  title: "Locally Owned" },
];
