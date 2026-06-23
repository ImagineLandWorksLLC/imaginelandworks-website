export interface Service {
  title: string;
  description: string;
  icon: string;
  anchor: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    title: "Excavation",
    description:
      "Precision digging for foundations, utilities, ponds, and drainage systems using professional-grade equipment.",
    icon: "digging",
    anchor: "excavation",
    featured: true,
  },
  {
    title: "Mulching",
    description:
      "Professional mulching services to suppress weeds, retain moisture, and enhance the health and appearance of your landscape.",
    icon: "leaf",
    anchor: "mulching",
  },
  {
    title: "Tree Work",
    description:
      "Expert tree trimming, removal, and maintenance to keep your property safe and your trees healthy.",
    icon: "tree",
    anchor: "tree-work",
  },
  {
    title: "Pond Cleaning",
    description:
      "Complete pond cleaning and maintenance, with debris removal, sediment clearing, and shoreline cleanup to restore your water feature.",
    icon: "water",
    anchor: "pond-cleaning",
  },
  {
    title: "Land Clearing",
    description:
      "Full removal of trees, brush, and vegetation to prepare your property for construction, farming, or development.",
    icon: "fire",
    anchor: "land-clearing",
    featured: true,
  },
  {
    title: "Site Preparation",
    description:
      "Complete groundwork services, including grading, compacting, and leveling, so your site is build-ready from day one.",
    icon: "ruler-combined",
    anchor: "site-preparation",
    featured: true,
  },
  {
    title: "Demolition",
    description:
      "Safe and efficient demolition of structures, concrete slabs, and outbuildings, followed by full debris removal.",
    icon: "hammer",
    anchor: "demolition",
  },
  {
    title: "Bush Hogging",
    description:
      "Heavy-duty brush mowing for overgrown fields, fence lines, and right-of-ways, with fast results on even the toughest terrain.",
    icon: "tractor",
    anchor: "bush-hogging",
  },
  {
    title: "Lawn Care",
    description:
      "Professional lawn mowing, watering system setup, and sod installation for residential and commercial properties.",
    icon: "leaf",
    anchor: "lawn-care",
  },
];
