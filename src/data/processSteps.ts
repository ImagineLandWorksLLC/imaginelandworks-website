export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "helmet-safety",
    title: "Walk the Site",
    description:
      "We meet you on the property, listen, and quote the work straight, no upsell.",
  },
  {
    number: "02",
    icon: "calendar-days",
    title: "Schedule the Iron",
    description:
      "We slot you into the calendar with a target start week and a written scope.",
  },
  {
    number: "03",
    icon: "tractor",
    title: "Clear & Prep",
    description:
      "Heavy equipment moves in. You get daily updates and end-of-day photos.",
  },
  {
    number: "04",
    icon: "clipboard-check",
    title: "Walk It Again",
    description:
      "Final walk-through. Ground is graded, debris hauled, and your build can start.",
  },
];
