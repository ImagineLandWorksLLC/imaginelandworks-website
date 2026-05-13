export type SocialKey = "facebook" | "instagram" | "tiktok" | "youtube" | "linkedin" | "google";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface HoursEntry {
  days: string;
  hours: string | null;
}

const hours: HoursEntry[] = [
  { days: "Mon – Fri", hours: "7:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 3:00 PM" },
  { days: "Sunday", hours: null },
];

const social: SocialLink[] = [
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/imaginelandworks" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/imaginelandworks" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@imaginelandworks" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@imaginelandworks" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/imaginelandworks" },
  { key: "google", label: "Google Business", href: "https://g.page/imaginelandworks" },
];

export const contact = {
  phone: {
    display: "(863) 712-4867",
    raw: "8637124867",
  },
  email: "seth@imaginelandworks.com",
  address: {
    city: "Lakeland",
    state: "FL",
    county: "Polk County",
  },
  hours,
  social,
  jobber: {
    clienthubId: "9b1e8ded-a0cb-4ca0-a3d9-cb0bbed65d9e-2746986",
    formUrl:
      "https://clienthub.getjobber.com/client_hubs/9b1e8ded-a0cb-4ca0-a3d9-cb0bbed65d9e/public/work_request/embedded_work_request_form?form_id=2746986",
    workRequestUrl:
      "https://clienthub.getjobber.com/client_hubs/9b1e8ded-a0cb-4ca0-a3d9-cb0bbed65d9e/public/work_request/new",
  },
  founding: 2026,
  legalName: "Imagine Land Works, LLC",
};
