export interface Review {
  name: string;
  rating: number; // 1–5, supports .5 increments
  text: string;
  source?: string;
  link?: string;  // URL to the source review page
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11nbw7x7pt&hl=en-US&q=Imagine+landwork+LLC#lrd=0x88dd394aca52a4cb:0xe1d83edc80b1a7dd,1,,,,";

export const reviews: Review[] = [
  {
    name: "Maya Shapiro",
    rating: 5,
    text: "My property was an absolute nightmare after the hurricanes; mature oak trees down everywhere. My friend introduced me to this company and assured me that an A+ job would be done. IT WAS! They came with all the needed equipment, employees, and got it done right.",
    source: "Google",
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Dave Fuhrmann",
    rating: 5,
    text: "Seth and his crew removed 3 trees located next to our steel building and everything went very well. They did great work and didn't leave a mess. We will use them again!",
    source: "Google",
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Florida Boy",
    rating: 5,
    text: "We had them do some storm cleanup and repair our gravel driveway. Very fair on the pricing and did a fantastic job.",
    source: "Google",
    link: GOOGLE_REVIEWS_URL,
  },
];
