import type { FAQ } from "@data/faqs";

export interface ResourceSection {
  heading?: string;
  paragraphs: string[];
}

export interface Resource {
  slug: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  publishDate: string;
  updatedDate?: string;
  body: ResourceSection[];
  faqs?: FAQ[];
  relatedServiceSlugs?: string[];
}

export const resources: Resource[] = [
  {
    slug: "land-clearing-cost-florida",
    eyebrow: "Pricing & Planning",
    title: "How Much Does Land Clearing Cost in Florida?",
    shortDescription:
      "The main factors that drive land clearing pricing in Florida, and how to get an accurate estimate for your property.",
    seoTitle: "How Much Does Land Clearing Cost in Florida? | Imagine Land Works",
    seoDescription:
      "Learn what drives land clearing costs in Florida, from acreage and vegetation density to debris removal, and how to get an accurate quote for your property.",
    publishDate: "2026-01-15",
    body: [
      {
        paragraphs: [
          "Land clearing cost is one of the first questions property owners ask before starting a project, and it's also one of the hardest to answer with a single number. Every property is different, and a handful of factors combine to determine the final price of your project.",
        ],
      },
      {
        heading: "What Drives the Cost of Land Clearing",
        paragraphs: [
          "Acreage is the biggest factor, but it isn't the only one. A one-acre lot covered in dense palmetto and mature hardwoods can cost more to clear than a five-acre pasture with scattered brush. The type and density of vegetation, the number and size of trees, stump removal needs, and how far equipment has to travel across the property all factor into the estimate.",
          "Access matters too. A lot with a wide, clear driveway is faster and cheaper to clear than a wooded parcel that requires cutting an access path just to get equipment to the work area. Debris handling is another variable: hauling material off-site typically costs more than chipping or mulching it in place.",
          "Finally, any environmental review triggered by wetlands, protected species habitat, or local ordinances can add time (and sometimes cost) to a project. This varies significantly by county and even by parcel, which is why a site visit is the only reliable way to scope a project accurately.",
        ],
      },
      {
        heading: "Typical Price Ranges",
        paragraphs: [
          "As a general starting point, land clearing in Central Florida often falls somewhere in the range of a few thousand dollars per acre, with heavily wooded or hard-to-access lots trending toward the higher end and open, lightly vegetated lots trending lower. Treat any online range, including the sample pricing shown on our land clearing page, as a starting point for budgeting, not a quote — the only way to know your actual cost is a walk of the property.",
        ],
      },
      {
        heading: "Getting an Accurate Quote",
        paragraphs: [
          "The fastest way to get a real number is a free, no-obligation site visit. We walk the property, assess vegetation, terrain, and access, and give you a straight estimate before any work begins, so there are no surprises once equipment shows up.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the average cost per acre to clear land in Florida?",
        answer:
          "It varies widely based on vegetation density, tree size, access, and debris handling. Lightly vegetated, easily accessible lots cost less per acre than densely wooded or hard-to-reach parcels. A free site visit is the most reliable way to get an accurate number for your property.",
      },
      {
        question: "Does stump grinding cost extra?",
        answer:
          "Stump grinding and root mass extraction are typically scoped as part of a full land clearing quote, but the amount of stump work needed (size, quantity, and depth required) affects the overall price. We'll account for this during your site visit.",
      },
      {
        question: "Is it cheaper to haul debris away or mulch it on-site?",
        answer:
          "Mulching or chipping vegetation in place is generally more cost-effective than hauling debris off-site, since it avoids trucking and disposal fees. It also leaves a natural ground cover that helps with erosion control.",
      },
    ],
    relatedServiceSlugs: ["land-clearing", "site-preparation", "excavation"],
  },
  {
    slug: "land-clearing-permits-florida",
    eyebrow: "Regulations & Permitting",
    title: "Do You Need Permits to Clear Land in Florida?",
    shortDescription:
      "Permit requirements for land clearing vary by county and property type in Florida. Here's what to check before you start.",
    seoTitle: "Do You Need Permits to Clear Land in Florida? | Imagine Land Works",
    seoDescription:
      "Land clearing permit rules vary by Florida county and property use. Learn when a permit is typically required and how to confirm the rules for your property.",
    publishDate: "2026-01-22",
    body: [
      {
        paragraphs: [
          "One of the most common questions we hear from property owners is whether they need a permit before clearing land. The honest answer is: it depends. Permit requirements for land clearing in Florida are set at the county and municipal level, so the rules that apply to a property in unincorporated Polk County can look very different from the rules just across a city line.",
        ],
      },
      {
        heading: "When Land Clearing Typically Requires a Permit",
        paragraphs: [
          "Generally speaking, residential land clearing on a standard single-family lot is less likely to require a permit than clearing near environmentally sensitive areas. Properties near wetlands, waterways, or known habitat for protected species often trigger an environmental review before any vegetation can be removed. Some cities and counties also have separate tree removal or tree protection ordinances that apply regardless of whether the broader clearing project needs a permit, especially for large or specimen trees.",
          "Commercial and larger-scale development projects are more likely to fall under site plan or land development review, which usually includes clearing as part of a broader approval process.",
        ],
      },
      {
        heading: "Agricultural & Silvicultural Exemptions",
        paragraphs: [
          "Florida law generally provides exemptions for bona fide agricultural and forestry (silvicultural) operations under the state's right-to-farm framework, which can mean clearing tied to an active farming or timber operation is treated differently than clearing for residential or commercial development. Whether a specific property qualifies depends on how the land is currently used and classified, so this is worth confirming rather than assuming.",
        ],
      },
      {
        heading: "How to Find Out What Applies to Your Property",
        paragraphs: [
          "Because these rules shift by jurisdiction and change over time, the only reliable way to know what applies to your property is to check directly with your county or city's building and zoning department before work begins. When we do a site visit, we'll flag anything we notice that commonly triggers permitting or environmental review in your area, but the final confirmation should always come from the local authority having jurisdiction.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a permit to clear land in Florida?",
        answer:
          "It depends on your county, city, and the specific property. Many standard residential lots don't require a permit for basic clearing, but proximity to wetlands, protected species habitat, or local tree ordinances can change that. Always confirm with your local building and zoning department.",
      },
      {
        question: "Is agricultural land exempt from land clearing permits?",
        answer:
          "Florida generally recognizes exemptions for bona fide agricultural and forestry operations under state right-to-farm provisions, but whether a specific property qualifies depends on its current use and classification. Confirm your property's status with your county before assuming an exemption applies.",
      },
      {
        question: "What happens if I clear land without a required permit?",
        answer:
          "Clearing without a required permit can result in fines, stop-work orders, or requirements to restore the land, depending on the county and the violation. If there's any doubt about whether your project needs a permit, it's worth a quick call to your local building department before work starts.",
      },
    ],
    relatedServiceSlugs: ["land-clearing", "site-preparation", "demolition"],
  },
  {
    slug: "land-prep-mistakes-home-build",
    eyebrow: "Building Tips",
    title: "5 Mistakes to Avoid When Prepping Land for a Home Build",
    shortDescription:
      "Common, costly mistakes property owners make when prepping raw land for a home build, and how to avoid them.",
    seoTitle: "5 Mistakes to Avoid When Prepping Land for a Home Build | Imagine Land Works",
    seoDescription:
      "Avoid these 5 common mistakes when prepping raw land for a home build in Florida, from skipping utility locates to underestimating soil compaction.",
    publishDate: "2026-02-03",
    body: [
      {
        paragraphs: [
          "Prepping raw land for a home build involves more steps than most first-time property owners expect, and a few early mistakes can turn into expensive delays once construction starts. Here are five of the most common issues we see, and how to avoid them.",
        ],
      },
      {
        heading: "1. Skipping a Survey or Utility Locate",
        paragraphs: [
          "Before any equipment touches the ground, you need a clear picture of your property lines and what's buried beneath the surface. Skipping a boundary survey risks clearing or grading onto a neighboring parcel, and skipping a utility locate (Florida law requires calling 811 before excavation) risks striking a gas, water, sewer, or fiber line. Both are avoidable with a phone call before the project starts.",
        ],
      },
      {
        heading: "2. Ignoring Drainage and Water Flow",
        paragraphs: [
          "Florida's flat terrain and heavy seasonal rainfall make drainage planning essential, not optional. Clearing and grading a site without accounting for where water will flow afterward can lead to standing water, erosion, or water pooling against your future foundation. Rough drainage and swale planning should happen during site preparation, not after the fact.",
        ],
      },
      {
        heading: "3. Underestimating Soil Compaction Needs",
        paragraphs: [
          "A cleared, level lot isn't automatically ready for a foundation. Soil needs to be compacted to the load-bearing specification your builder requires, and skipping or rushing this step can cause settling issues down the road. Compaction requirements vary by soil type and structure, so this is worth confirming with your site prep contractor and builder together.",
        ],
      },
      {
        heading: "4. Not Planning for Debris Removal",
        paragraphs: [
          "Trees, stumps, brush, and old structures all have to go somewhere. Property owners sometimes underestimate how much debris a clearing project generates, or assume it will be handled automatically. Confirm upfront whether debris will be hauled away, chipped on-site, or a combination of both, so there's no confusion (or extra cost) once the project is underway.",
        ],
      },
      {
        heading: "5. Trying to DIY Heavy Equipment Work",
        paragraphs: [
          "Renting an excavator or bush hog for a weekend project can feel like a cost-saving move, but heavy equipment work on raw land carries real risk, to underground utilities, neighboring property, and personal safety, especially without experience reading terrain, vegetation density, or soil conditions. For anything beyond very small, simple jobs, working with an experienced operator typically saves money in the long run by avoiding costly mistakes and rework.",
        ],
      },
      {
        paragraphs: [
          "If you're planning a home build and want a straight assessment of what your land actually needs, we offer free, no-obligation site visits across Lakeland and Polk County.",
        ],
      },
    ],
    relatedServiceSlugs: ["site-preparation", "land-clearing", "excavation"],
  },
];
