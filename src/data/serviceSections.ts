export interface ServiceSectionData {
  anchor: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  cta: string;
  /** Path to the service image (e.g. "/images/services/land-clearing.jpg"). Set once client provides photos. */
  image?: string;
  imagePlaceholder: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  processSteps: { title: string; description: string }[];
  relatedServices: string[];
}

export const serviceSections: ServiceSectionData[] = [
  {
    anchor: "land-clearing",
    eyebrow: "Site Readiness Starts Here",
    title: "Land Clearing",
    description:
      "Whether you're preparing raw acreage for construction, farming, or development, Imagine Land Works delivers complete land clearing from start to finish. Our team removes all trees, brush, stumps, and vegetation, leaving your property clean, accessible, and ready for the next phase of your project.",
    capabilities: [
      "Brush and shrub removal from any terrain",
      "Tree removal including large-diameter hardwoods",
      "Stump grinding and root mass extraction",
      "Debris clearing and on-site disposal or chipping",
      "Before-and-after site walk for full transparency",
      "Heavy equipment operators with local Lakeland experience",
    ],
    cta: "Get a Free Estimate",
    imagePlaceholder: "Insert land clearing service image here",
    shortDescription:
      "Full-service land clearing from brush removal to stump grinding, leaving your property clean and build-ready.",
    seoTitle: "Land Clearing Lakeland FL",
    seoDescription:
      "Professional land clearing in Lakeland, FL. Imagine Land Works removes trees, brush, and stumps, leaving your property build-ready. Licensed & insured. Free estimates.",
    processSteps: [
      {
        title: "Site Walk & Quote",
        description:
          "We assess your property in person, identify what needs to go, and give you a straight, no-surprise estimate.",
      },
      {
        title: "Full Clearing",
        description:
          "Our crew and equipment move in, removing trees, brush, stumps, and debris efficiently while protecting the surrounding property.",
      },
      {
        title: "Clean Finish",
        description:
          "We haul off or chip all debris on-site and do a final walk to confirm the property meets your expectations before we leave.",
      },
    ],
    relatedServices: ["site-preparation", "excavation", "demolition"],
  },
  {
    anchor: "site-preparation",
    eyebrow: "Build-Ready Ground",
    title: "Site Preparation",
    description:
      "A solid project starts with properly prepared ground. Imagine Land Works handles all groundwork services needed before the first nail is driven or foundation poured. We grade, level, compact, and drain your site so every contractor who follows has a reliable surface to build on.",
    capabilities: [
      "Precision grading for even, stable surfaces",
      "Land leveling for residential and commercial lots",
      "Soil compaction to required load-bearing specs",
      "House pad and building pad construction",
      "Rough drainage layout and swale preparation",
      "Final site inspection before handoff to your builder",
    ],
    cta: "Request Site Prep Quote",
    imagePlaceholder: "Insert site preparation service image here",
    shortDescription:
      "Grading, leveling, compaction, and drainage, everything your lot needs before construction can begin.",
    seoTitle: "Site Preparation Lakeland FL",
    seoDescription:
      "Expert site preparation in Lakeland, FL. Grading, leveling, compaction & drainage for residential and commercial projects. Locally owned. Free estimates.",
    processSteps: [
      {
        title: "Survey & Plan",
        description:
          "We review your site plan, identify drainage needs, and determine the grading approach before any equipment arrives.",
      },
      {
        title: "Grade & Compact",
        description:
          "Our crew levels and grades the site to spec, compacting soil to the load-bearing requirements your build demands.",
      },
      {
        title: "Builder-Ready Handoff",
        description:
          "We walk the finished site with you, confirm drainage and pad elevations are correct, and hand it off to your next contractor.",
      },
    ],
    relatedServices: ["land-clearing", "excavation", "demolition"],
  },
  {
    anchor: "demolition",
    eyebrow: "Clear the Way",
    title: "Demolition",
    description:
      "Old structures don't have to stand in the way of progress. Imagine Land Works provides controlled demolition for residential and commercial properties, taking down what no longer serves you and hauling every bit of it away. We prioritize safety at every step, protecting surrounding structures and neighboring properties throughout the process.",
    capabilities: [
      "Full structure teardown, homes, barns, sheds, outbuildings",
      "Concrete slab and foundation removal",
      "Block wall and masonry demolition",
      "Complete debris hauling and site cleanout",
      "Coordinated utility disconnect verification before work begins",
      "Safety fencing and equipment staging for protected worksites",
    ],
    cta: "Schedule a Demolition Consultation",
    imagePlaceholder: "Insert demolition service image here",
    shortDescription:
      "Safe, controlled teardown of structures, slabs, and outbuildings, with complete debris removal included.",
    seoTitle: "Demolition Services Lakeland FL",
    seoDescription:
      "Licensed demolition contractor in Lakeland, FL. Residential and commercial structure teardown, slab removal, and full debris hauling. Free estimates.",
    processSteps: [
      {
        title: "Utility Verification",
        description:
          "Before we touch anything, we confirm all utilities are disconnected and coordinate with your local providers to keep the job safe.",
      },
      {
        title: "Controlled Teardown",
        description:
          "We systematically demolish the structure, home, barn, slab, or outbuilding, protecting adjacent property at every stage.",
      },
      {
        title: "Full Site Cleanout",
        description:
          "Every piece of debris is hauled away, leaving you with a cleared, ready-to-build lot and a clean bill of completion.",
      },
    ],
    relatedServices: ["land-clearing", "site-preparation", "excavation"],
  },
  {
    anchor: "bush-hogging",
    eyebrow: "Tame Your Overgrowth",
    title: "Bush Hogging",
    description:
      "Overgrown fields, fence lines, and right-of-ways are no match for our heavy-duty bush hogging equipment. Imagine Land Works handles acreage of any size, cutting down tall grass, dense brush, and stubborn overgrowth fast so your land looks managed and stays that way. Ideal for property owners, farmers, and developers who need consistent maintenance on large parcels.",
    capabilities: [
      "Tall grass and thick brush cutting on any terrain",
      "Overgrowth removal along fence lines and property borders",
      "Pasture reclaiming for agricultural or recreational use",
      "Right-of-way and easement maintenance",
      "Recurring acreage maintenance programs available",
      "Fast turnaround on large lot and multi-acre projects",
    ],
    cta: "Get a Bush Hogging Quote",
    imagePlaceholder: "Insert bush hogging service image here",
    shortDescription:
      "Heavy-duty mowing for overgrown fields, fence lines, and right-of-ways, with fast results on any size acreage.",
    seoTitle: "Bush Hogging Lakeland FL",
    seoDescription:
      "Professional bush hogging in Lakeland, FL. Heavy-duty brush cutting for fields, fence lines, and pastures across Polk County. Free estimates.",
    processSteps: [
      {
        title: "Acreage Assessment",
        description:
          "We walk or drive your property to assess terrain, density of growth, and any obstacles before scheduling equipment.",
      },
      {
        title: "Heavy-Duty Mowing",
        description:
          "Our track-driven or tractor-mounted bush hog cuts through tall grass, dense brush, and overgrowth in a single efficient pass.",
      },
      {
        title: "Cleanup & Inspection",
        description:
          "We make a final pass on problem spots and leave your land looking managed, accessible, and maintained.",
      },
    ],
    relatedServices: ["land-clearing", "mulching", "tree-work"],
  },
  {
    anchor: "excavation",
    eyebrow: "Dig Deep, Build Right",
    title: "Excavation",
    description:
      "Precise excavation is the foundation of every successful construction project. Imagine Land Works operates professional-grade excavation equipment to dig exactly where you need it, whether that's utility trenches, structural foundations, retention ponds, or drainage channels. We work efficiently and accurately to keep your project on schedule.",
    capabilities: [
      "Trenching for utilities, water, sewer, electrical, and fiber",
      "Deep digging for residential and commercial foundations",
      "Retention pond and drainage ditch excavation",
      "Utility staging and underground infrastructure prep",
      "Grading cuts and slope work for drainage compliance",
      "Tight-access excavation with compact equipment available",
    ],
    cta: "Start Your Excavation Project",
    imagePlaceholder: "Insert excavation service image here",
    shortDescription:
      "Precision digging for foundations, utilities, ponds, and drainage, with professional equipment and on-schedule results.",
    seoTitle: "Excavation Contractor Lakeland FL",
    seoDescription:
      "Professional excavation services in Lakeland, FL. Foundation digging, utility trenching, pond excavation, and drainage work. Licensed & insured. Free estimates.",
    processSteps: [
      {
        title: "Dig Plan Review",
        description:
          "We review your site plans, utility maps, and depth requirements before a single bucket hits the ground.",
      },
      {
        title: "Precision Excavation",
        description:
          "Our operators dig to the exact dimensions and depths your project requires, whether that's a foundation, trench, pond, or drainage channel.",
      },
      {
        title: "Grade & Backfill",
        description:
          "We grade the surrounding area, backfill where needed, and leave the site ready for the next phase of your build.",
      },
    ],
    relatedServices: ["site-preparation", "land-clearing", "pond-cleaning"],
  },
  {
    anchor: "mulching",
    eyebrow: "Nature-Friendly Land Management",
    title: "Mulching",
    description:
      "Forestry mulching is one of the most efficient and environmentally responsible ways to clear land. Rather than hauling material away, our mulching equipment grinds vegetation in place, turning trees, brush, and underbrush into a natural ground cover that suppresses weeds and protects the soil. It's faster, cleaner, and better for the land than traditional clearing methods.",
    capabilities: [
      "Forestry mulching with track-driven mulcher equipment",
      "Underbrush and invasive species removal",
      "Firebreak creation along property perimeters",
      "Selective clearing that preserves desirable trees",
      "Erosion control through in-place mulch layer",
      "No burn piles, eco-friendly and compliant with local ordinances",
    ],
    cta: "Request a Mulching Estimate",
    imagePlaceholder: "Insert mulching service image here",
    shortDescription:
      "Forestry mulching grinds vegetation in place, faster, cleaner, and more eco-friendly than traditional clearing.",
    seoTitle: "Forestry Mulching Lakeland FL",
    seoDescription:
      "Professional forestry mulching in Lakeland, FL. Eco-friendly land clearing that grinds brush and trees in place, no burn piles, no hauling. Free estimates.",
    processSteps: [
      {
        title: "Property Walkthrough",
        description:
          "We identify which vegetation to clear and which to preserve, and flag any obstacles before the mulcher moves in.",
      },
      {
        title: "Mulch & Grind",
        description:
          "Our forestry mulcher grinds trees, brush, and underbrush directly in place, no pile burning, no hauling required.",
      },
      {
        title: "Ground Cover Layer",
        description:
          "The finished mulch layer stays on-site as natural erosion control, suppressing weeds and protecting soil health.",
      },
    ],
    relatedServices: ["land-clearing", "bush-hogging", "tree-work"],
  },
  {
    anchor: "tree-work",
    eyebrow: "Expert Tree Care",
    title: "Tree Work",
    description:
      "Trees add beauty and value to your property, until they become a hazard or stand in the way of your plans. Imagine Land Works handles everything from routine trimming and canopy shaping to full removal of damaged, dead, or unwanted trees. After major storms, we're on the ground fast to clear debris and restore safe access to your property.",
    capabilities: [
      "Tree removal, single trees to full-lot clearing",
      "Crown trimming and canopy shaping for health and clearance",
      "Dead, leaning, and hazardous tree takedown",
      "Storm damage cleanup and emergency tree debris removal",
      "Stump grinding to below-grade for a clean finish",
      "Chip and haul away or leave mulch on-site",
    ],
    cta: "Get a Tree Work Quote",
    imagePlaceholder: "Insert tree work service image here",
    shortDescription:
      "Tree removal, trimming, stump grinding, and storm cleanup, keeping your property safe and your trees healthy.",
    seoTitle: "Tree Removal & Tree Work Lakeland FL",
    seoDescription:
      "Professional tree removal, trimming, and stump grinding in Lakeland, FL. Storm cleanup and hazardous tree takedown. Licensed & insured. Free estimates.",
    processSteps: [
      {
        title: "Tree Assessment",
        description:
          "We evaluate each tree's condition, removal complexity, and proximity to structures to plan the safest approach.",
      },
      {
        title: "Removal & Trimming",
        description:
          "Our crew takes down, trims, or shapes trees with precision, protecting surrounding landscaping and structures throughout.",
      },
      {
        title: "Stump & Debris Cleanup",
        description:
          "We grind stumps below grade and chip or haul all debris, leaving your property clean with no trace of the work.",
      },
    ],
    relatedServices: ["land-clearing", "mulching", "bush-hogging"],
  },
  {
    anchor: "pond-cleaning",
    eyebrow: "Restore Your Water Feature",
    title: "Pond Cleaning",
    description:
      "A neglected pond quickly becomes a liability, choked with vegetation, silted up, and inaccessible. Imagine Land Works restores ponds and water features back to a clean, functional state. We remove built-up sediment, clear invasive aquatic plants, clean up the shoreline, and cut access paths so you can enjoy and maintain your water feature going forward.",
    capabilities: [
      "Sediment and silt removal to restore pond depth and capacity",
      "Aquatic vegetation and invasive plant clearing",
      "Shoreline bank shaping and erosion repair",
      "Cattail, lily pad, and hyacinth removal",
      "Access path creation to water's edge for equipment and fishing",
      "Shoreline tree and brush clearing for a clean perimeter",
    ],
    cta: "Schedule a Pond Assessment",
    imagePlaceholder: "Insert pond cleaning service image here",
    shortDescription:
      "Sediment removal, aquatic vegetation clearing, and shoreline cleanup, restoring your pond to full function.",
    seoTitle: "Pond Cleaning & Restoration Lakeland FL",
    seoDescription:
      "Professional pond cleaning and restoration in Lakeland, FL. Sediment removal, aquatic weed clearing, and shoreline repair. Serving Polk County. Free estimates.",
    processSteps: [
      {
        title: "Pond Assessment",
        description:
          "We evaluate sediment depth, vegetation coverage, and shoreline condition to build a targeted restoration plan.",
      },
      {
        title: "Clear & Dredge",
        description:
          "We remove invasive plants, aquatic weeds, and built-up sediment to restore your pond's depth, clarity, and capacity.",
      },
      {
        title: "Shoreline Finish",
        description:
          "We shape and stabilize the banks, clear brush from the perimeter, and create access paths so the pond stays usable.",
      },
    ],
    relatedServices: ["excavation", "land-clearing", "tree-work"],
  },
];
