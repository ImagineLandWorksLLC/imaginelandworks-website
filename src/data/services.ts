export interface Service {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    title: "Excavation",
    description:
      "Precision digging for foundations, utilities, ponds, and drainage systems using professional-grade equipment.",
    icon: "digging",
    featured: true,
  },
  {
    title: "Mulching",
    description:
      "Professional mulching services to suppress weeds, retain moisture, and enhance the health and appearance of your landscape.",
    icon: "leaf",
  },
  {
    title: "Tree Work",
    description:
      "Expert tree trimming, removal, and maintenance to keep your property safe and your trees healthy.",
    icon: "tree",
  },
  {
    title: "Pond Cleaning",
    description:
      "Complete pond cleaning and maintenance — debris removal, sediment clearing, and shoreline cleanup to restore your water feature.",
    icon: "water",
  },
  {
    title: "Land Clearing",
    description:
      "Full removal of trees, brush, and vegetation to prepare your property for construction, farming, or development.",
    icon: "fire",
    featured: true,
  },
  {
    title: "Site Preparation",
    description:
      "Complete groundwork services — grading, compacting, and leveling — so your site is build-ready from day one.",
    icon: "ruler-combined",
    featured: true,
  },
  {
    title: "Demolition",
    description:
      "Safe and efficient demolition of structures, concrete slabs, and outbuildings, followed by full debris removal.",
    icon: "hammer",
  },
  {
    title: "Bush Hogging",
    description:
      "Heavy-duty brush mowing for overgrown fields, fence lines, and right-of-ways — fast results on even the toughest terrain.",
    icon: "tractor",
  },
];
