export interface Metric {
  stat: string;
  label: string;
  description?: string;
  icon?: string;
}

export const metrics: Metric[] = [
  {
    stat: "120+",
    label: "Acres Cleared",
    description: "Across Polk County and surrounding regions",
    icon: "tractor",
  },
  {
    stat: "200+",
    label: "Projects Completed",
    description: "From lot clearing to full site prep",
    icon: "clipboard-check",
  },
  {
    stat: "1+",
    label: "Years in Business",
    description: "Serving Lakeland since day one",
    icon: "calendar-days",
  },
  {
    stat: "100%",
    label: "Client Satisfaction",
    description: "We don't leave until it's done right",
    icon: "medal",
  },
];
