export interface ServiceCity {
  name: string;
  slug: string;
  county?: string;
  /** Short paragraph used on the city landing page intro */
  blurb: string;
}

export const serviceCities: ServiceCity[] = [
  {
    name: "Lakeland",
    slug: "lakeland",
    county: "Polk County",
    blurb:
      "As our home base, Lakeland is where Imagine Land Works does its best work. From new residential developments near South Lakeland to agricultural parcels in the rural outskirts, our crews are on-site fast and ready for any scope of land clearing, excavation, or site preparation project.",
  },
  {
    name: "Auburndale",
    slug: "auburndale",
    county: "Polk County",
    blurb:
      "Auburndale's growing residential market and proximity to I-4 make it one of our busiest service areas. Whether you're clearing a lot for a new build, prepping a commercial pad, or cleaning up storm damage, Imagine Land Works is a short drive away and ready to get to work.",
  },
  {
    name: "Winter Haven",
    slug: "winter-haven",
    county: "Polk County",
    blurb:
      "With hundreds of lakes and fast-growing neighborhoods, Winter Haven presents unique land clearing challenges. Imagine Land Works has the equipment and experience to handle wetland-adjacent clearing, pond cleaning, and residential site prep across the Winter Haven area.",
  },
  {
    name: "Bartow",
    slug: "bartow",
    county: "Polk County",
    blurb:
      "Bartow's mix of historic neighborhoods and expanding development corridors keeps our crews busy year-round. We provide land clearing, demolition, and excavation services throughout Bartow and the surrounding Polk County communities.",
  },
  {
    name: "Polk City",
    slug: "polk-city",
    county: "Polk County",
    blurb:
      "Polk City's rural character and large parcels are a perfect fit for our bush hogging, forestry mulching, and land clearing services. We help landowners maintain pastures, reclaim overgrown acreage, and prepare sites for agricultural and recreational use.",
  },
  {
    name: "Mulberry",
    slug: "mulberry",
    county: "Polk County",
    blurb:
      "Mulberry and the surrounding Polk County mining region often see large-scale site preparation and land clearing needs. Imagine Land Works brings the heavy equipment and experienced operators to handle projects of any size in the Mulberry area.",
  },
  {
    name: "Plant City",
    slug: "plant-city",
    county: "Hillsborough County",
    blurb:
      "Just over the Hillsborough County line, Plant City is well within our service area. We provide the same professional land clearing, excavation, and site preparation services here that Polk County customers rely on — same crew, same equipment, same commitment.",
  },
  {
    name: "Haines City",
    slug: "haines-city",
    county: "Polk County",
    blurb:
      "Haines City sits at the heart of Polk County's development boom. Imagine Land Works supports builders, investors, and property owners throughout the Haines City area with land clearing, lot grading, stump removal, and full site preparation services.",
  },
];
