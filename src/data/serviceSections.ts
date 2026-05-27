import type { FAQ } from "@data/faqs";
export type { FAQ };

export interface ServiceSectionData {
  anchor: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  cta: string;
  /** Filename only (e.g. "land-clearing.jpg") from src/assets/images/services/. Set once client provides photos. */
  image?: string;
  imagePlaceholder: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  processSteps: { title: string; description: string }[];
  relatedServices: string[];
  faqs: FAQ[];
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
    seoTitle: "Land Clearing in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "How much does land clearing cost in Lakeland, FL?",
        answer:
          "Cost varies by acreage, terrain, and vegetation density. We provide free on-site estimates for all land clearing projects in Polk County so you know exactly what to expect before any work begins.",
      },
      {
        question: "Do I need a permit to clear land in Florida?",
        answer:
          "In most cases, land clearing on unincorporated Polk County residential properties does not require a permit. However, areas near wetlands or with protected species may require environmental review. We can advise during your site visit.",
      },
      {
        question: "How long does land clearing take?",
        answer:
          "A standard residential lot is typically cleared in one to three days. Larger multi-acre parcels may take a week or more depending on vegetation density and the volume of debris.",
      },
      {
        question: "What happens to the debris after clearing?",
        answer:
          "We chip material on-site, haul it away, or a combination of both — depending on your preference and the volume involved. Your site is left clean at the end of every job.",
      },
      {
        question: "Can you clear land that has large trees or stumps?",
        answer:
          "Yes. We handle large-diameter hardwood removal, full stump grinding, and root mass extraction as part of our land clearing service.",
      },
    ],
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
    seoTitle: "Site Preparation in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "What is included in site preparation?",
        answer:
          "Site prep includes grading, leveling, soil compaction, house pad construction, rough drainage layout, and swale preparation — everything needed before your builder breaks ground.",
      },
      {
        question: "How do I know if my lot is ready for a foundation?",
        answer:
          "After site prep, the soil will be compacted to the load-bearing specs your builder requires. We do a final walk with you before handoff to confirm grades and pad elevations are correct.",
      },
      {
        question: "Do you handle drainage planning as part of site prep?",
        answer:
          "Yes. We lay out rough drainage and swales during the grading process to ensure water flows away from the build area and meets Polk County requirements.",
      },
      {
        question: "What's the difference between grading and leveling?",
        answer:
          "Grading shapes the land to create proper slope and drainage. Leveling makes a specific pad or area flat for building. Most site prep projects require both, and we handle both in a single mobilization.",
      },
    ],
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
    image: "demo-concept-image.jpg",
    imagePlaceholder: "Insert demolition service image here",
    shortDescription:
      "Safe, controlled teardown of structures, slabs, and outbuildings, with complete debris removal included.",
    seoTitle: "Demolition Services in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "Do I need a permit for demolition in Lakeland, FL?",
        answer:
          "Yes, most structural demolitions in Lakeland and Polk County require a demolition permit. We can walk you through what's required and help coordinate with local authorities before work begins.",
      },
      {
        question: "How do you handle utilities before demolition?",
        answer:
          "Before any structure is touched, we verify that all utilities — electric, gas, water, and sewer — have been properly disconnected and that your local providers have signed off. This step is non-negotiable on every job.",
      },
      {
        question: "Is debris removal included in the demolition cost?",
        answer:
          "Yes. We haul all demolition debris away as part of the project. You get a cleared, clean lot — no sorting, no leftover piles, no second trips needed.",
      },
      {
        question: "How long does a residential demolition take?",
        answer:
          "A typical single-family home demolition takes one to three days depending on the structure's size, materials, and site access. Larger commercial structures may take longer.",
      },
      {
        question: "Can you demolish just part of a structure, like a detached garage or addition?",
        answer:
          "Yes. We handle partial demolitions including garages, sheds, outbuildings, concrete slabs, and block walls without disturbing the surrounding structure or adjacent property.",
      },
    ],
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
    seoTitle: "Bush Hogging in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "How often should I bush hog my property in Florida?",
        answer:
          "In Florida's climate, most properties benefit from bush hogging two to four times per year. Vacant lots and pastures may need more frequent service depending on rainfall and growth rate.",
      },
      {
        question: "What size property can you handle?",
        answer:
          "We handle properties of all sizes — from small lots under an acre to large multi-acre parcels and commercial right-of-ways. Our track-driven equipment handles rough terrain efficiently regardless of acreage.",
      },
      {
        question: "Can you bush hog close to fences, trees, and structures?",
        answer:
          "Yes. Our operators are experienced at working around fence lines, tree bases, and property boundaries without damaging adjacent structures or desirable vegetation.",
      },
      {
        question: "What's the difference between bush hogging and land clearing?",
        answer:
          "Bush hogging cuts down overgrown grass, brush, and light vegetation with a rotary mower attachment. Land clearing is a more intensive process that removes trees, stumps, and root systems. Bush hogging is ideal for maintenance and light reclaiming; land clearing is for full site preparation.",
      },
    ],
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
    seoTitle: "Excavation Contractor in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "What types of excavation projects do you handle?",
        answer:
          "We handle foundation digging, utility trenching (water, sewer, electric, fiber), retention pond excavation, drainage channel work, and grading cuts for residential and commercial projects of all sizes.",
      },
      {
        question: "Do you call 811 before digging?",
        answer:
          "Always. Calling 811 to have underground utilities located before any excavation is required by Florida law, and it is standard practice on every project we take on — no exceptions.",
      },
      {
        question: "Can you excavate in tight or hard-to-access areas?",
        answer:
          "Yes. We have compact excavation equipment available for confined lots, narrow access paths, and areas where full-size machinery cannot safely maneuver.",
      },
      {
        question: "How deep can you excavate?",
        answer:
          "Our equipment handles depths required for standard residential and commercial applications including foundations, deep utility runs, and drainage channels. Exact depth requirements are confirmed during your site review.",
      },
    ],
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
    seoTitle: "Forestry Mulching in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "What is forestry mulching?",
        answer:
          "Forestry mulching is a land clearing method where a specialized machine grinds trees, brush, and undergrowth directly in place, leaving a natural mulch layer on the ground. No burn piles, no hauling — just clean, efficient clearing.",
      },
      {
        question: "Is forestry mulching better than traditional land clearing?",
        answer:
          "For many projects, yes. It is faster, more cost-effective, and leaves the soil protected from erosion. It is ideal when you want to clear vegetation without heavy ground disturbance or hauling costs.",
      },
      {
        question: "Can I build on land after forestry mulching?",
        answer:
          "Forestry mulching is best suited for land that will be used for agriculture, recreation, or pasture. For construction pads requiring grading and compaction, traditional clearing followed by site preparation is typically more appropriate.",
      },
      {
        question: "Does mulching help control invasive plants?",
        answer:
          "Yes. Grinding invasive species removes above-ground growth and disrupts the surface root system, significantly slowing regrowth. Combined with follow-up maintenance, it is one of the most effective methods for managing invasive vegetation in Florida.",
      },
    ],
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
    seoTitle: "Tree Removal & Tree Work in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "Do I need a permit to remove trees in Lakeland, FL?",
        answer:
          "Lakeland and Polk County have tree removal ordinances that may require a permit depending on the species, size, and location of the tree on your property. We can advise on applicable permits during your site assessment.",
      },
      {
        question: "How do I know if a tree is hazardous?",
        answer:
          "Signs of a hazardous tree include dead or dying branches, a leaning trunk, root damage, fungal growth at the base, and hollow or decayed sections. If you are unsure, we can assess the tree's condition and recommend the safest course of action.",
      },
      {
        question: "Do you offer emergency tree removal after storms?",
        answer:
          "Yes. After major storms, we mobilize quickly to remove fallen or dangerously hanging trees and restore safe access to your property. Call us directly for urgent situations.",
      },
      {
        question: "What happens to the wood and debris after removal?",
        answer:
          "We can chip the material and leave it on-site as mulch, or haul everything away for a clean finish. Larger logs may be set aside if you want to keep them. The choice is yours and we confirm your preference before starting.",
      },
    ],
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
    seoTitle: "Pond Cleaning & Restoration in Lakeland, FL | Imagine Land Works, LLC",
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
    faqs: [
      {
        question: "How do I know if my pond needs cleaning?",
        answer:
          "Common signs include shallow water depth, excessive aquatic weeds, murky or foul-smelling water, dying fish, and overgrown or eroded shorelines. If you notice any of these, a pond assessment is a good starting point.",
      },
      {
        question: "What is dredging and do I need it?",
        answer:
          "Dredging is the removal of sediment and silt that has built up on the pond floor over time. It restores the pond's original depth and capacity. If your pond has lost significant depth or is regularly silting over, dredging is likely needed.",
      },
      {
        question: "How do you remove aquatic weeds?",
        answer:
          "We use mechanical removal equipment to physically extract aquatic plants including cattails, water hyacinth, lily pads, and invasive grasses. This avoids chemical use and is safe for fish and surrounding wildlife.",
      },
      {
        question: "How often should a pond be cleaned?",
        answer:
          "Most ponds in Florida benefit from a professional cleaning every three to five years, with regular shoreline maintenance in between. Ponds with high nutrient runoff from nearby agriculture or landscaping may need more frequent attention.",
      },
    ],
  },
];
