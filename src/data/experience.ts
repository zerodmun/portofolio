export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "tenten",
    period: "September 2023 — Present",
    company: "PT. Tenten Digital Indonesia",
    role: "Product Designer",
    isCurrent: true,
    responsibilities: [
      "UI/UX Design",
      "Tablet UI/UX Design",
      "Branding Illustration",
      "2D Animation",
      "3D Illustration",
      "Asset Library",
      "Icon Design",
      "Avatar Design",
      "Visual Assets",
    ],
  },
  {
    id: "novatama",
    period: "March 2022 — March 2023",
    company: "PT. Novatama Solusi Teknologi",
    role: "Junior UI/UX Designer",
    isCurrent: false,
    responsibilities: [
      "UI/UX Design for TokoMobile",
      "Branding Illustration",
      "Design Flow Documentation",
      "UI/UX Design for Primeguard",
    ],
  },
  {
    id: "joogist",
    period: "May 2019 — April 2020",
    company: "Joogist",
    role: "Graphic Designer",
    isCurrent: false,
    responsibilities: [
      "3D Illustration",
      "2D Illustration",
      "Logo Design",
      "Brand Identity",
      "Product Campaign Design",
      "UI/UX",
      "Design System",
    ],
  },
];
