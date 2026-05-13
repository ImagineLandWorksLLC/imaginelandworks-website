export interface Review {
  name: string;
  rating: number; // 1–5, supports .5 increments
  text: string;
  source?: string;
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "These guys showed up on time, worked straight through, and left the lot cleaner than I expected. No drama, no surprises on the bill.",
    source: "Google",
  },
  {
    name: "Brittany H.",
    rating: 5,
    text: "Had a thick wooded half-acre that needed full clearing before our build. They knocked it out in a day. Communication was excellent the whole time.",
    source: "Google",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Fair price, fast turnaround, and they actually sent end-of-day photos without me having to ask. Will use again for phase two.",
    source: "Google",
  },
];
