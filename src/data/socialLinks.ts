export interface SocialLink {
  label: string;
  url: string;
  description: string;
  tag: string;
}

export const socialLinks = {
  dribbble: "https://dribbble.com/VolEm", // Replace with your actual Dribbble URL
  linkedin: "https://www.linkedin.com/in/munir-akromin/",
  behance: "https://www.behance.net/VolEm", // Replace with your actual Behance URL
  email: "munirakromin@gmail.com",
};

export const externalPortfolios: SocialLink[] = [
  {
    label: "DRIBBBLE",
    url: socialLinks.dribbble,
    description: "Explore selected design work",
    tag: "Visual Design & UI Shots",
  },
  {
    label: "LINKEDIN",
    url: socialLinks.linkedin,
    description: "Professional experience & updates",
    tag: "Network & Career",
  },
  {
    label: "BEHANCE",
    url: socialLinks.behance,
    description: "Selected visual projects",
    tag: "Case Studies & Creative Direction",
  },
];
