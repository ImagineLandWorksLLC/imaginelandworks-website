export interface ServiceCity {
  name: string;
  slug: string;
  county?: string;
  /** Short paragraph used on the city landing page intro */
  blurb: string;
  /** WGS-84 coordinates for the map marker */
  lat: number;
  lng: number;
  /** Whether to show a pin on the service area map. Defaults to true. */
  showOnMap?: boolean;
}

export const serviceCities: ServiceCity[] = [
  {
    name: "Lakeland",
    slug: "lakeland",
    county: "Polk County",
    lat: 28.0395,
    lng: -81.9498,
    blurb:
      "As our home base, Lakeland is where Imagine Land Works does its best work. From new residential developments near South Lakeland to agricultural parcels in the rural outskirts, our crews are on-site fast and ready for any scope of land clearing, excavation, or site preparation project.",
  },
  {
    name: "Auburndale",
    slug: "auburndale",
    county: "Polk County",
    lat: 28.0656,
    lng: -81.7892,
    blurb:
      "Auburndale's growing residential market and proximity to I-4 make it one of our busiest service areas. Whether you're clearing a lot for a new build, prepping a commercial pad, or cleaning up storm damage, Imagine Land Works is a short drive away and ready to get to work.",
  },
  {
    name: "Winter Haven",
    slug: "winter-haven",
    county: "Polk County",
    lat: 28.0222,
    lng: -81.7329,
    blurb:
      "With hundreds of lakes and fast-growing neighborhoods, Winter Haven presents unique land clearing challenges. Imagine Land Works has the equipment and experience to handle wetland-adjacent clearing, pond cleaning, and residential site prep across the Winter Haven area.",
  },
  {
    name: "Bartow",
    slug: "bartow",
    county: "Polk County",
    lat: 27.8967,
    lng: -81.8432,
    blurb:
      "Bartow's mix of historic neighborhoods and expanding development corridors keeps our crews busy year-round. We provide land clearing, demolition, and excavation services throughout Bartow and the surrounding Polk County communities.",
  },
  {
    name: "Polk City",
    slug: "polk-city",
    county: "Polk County",
    lat: 28.1722,
    lng: -81.8249,
    blurb:
      "Polk City's rural character and large parcels are a perfect fit for our bush hogging, forestry mulching, and land clearing services. We help landowners maintain pastures, reclaim overgrown acreage, and prepare sites for agricultural and recreational use.",
  },
  {
    name: "Mulberry",
    slug: "mulberry",
    county: "Polk County",
    lat: 27.8956,
    lng: -81.9731,
    blurb:
      "Mulberry and the surrounding Polk County mining region often see large-scale site preparation and land clearing needs. Imagine Land Works brings the heavy equipment and experienced operators to handle projects of any size in the Mulberry area.",
  },
  {
    name: "Plant City",
    slug: "plant-city",
    county: "Hillsborough County",
    lat: 28.0194,
    lng: -82.1142,
    blurb:
      "Just over the Hillsborough County line, Plant City is well within our service area. We provide the same professional land clearing, excavation, and site preparation services here that Polk County customers rely on — same crew, same equipment, same commitment.",
  },
  {
    name: "Haines City",
    slug: "haines-city",
    county: "Polk County",
    lat: 28.1139,
    lng: -81.6273,
    blurb:
      "Haines City sits at the heart of Polk County's development boom. Imagine Land Works supports builders, investors, and property owners throughout the Haines City area with land clearing, lot grading, stump removal, and full site preparation services.",
  },
  {
    name: "Central Florida",
    slug: "central-florida",
    county: undefined,
    lat: 28.6,
    lng: -82.4,
    showOnMap: false,
    blurb:
      "Imagine Land Works serves clients across Central Florida. If your project falls outside our primary Polk County coverage cities, reach out — we're willing to travel for the right job. Call us and we'll let you know if we can make it work.",
  },
];
