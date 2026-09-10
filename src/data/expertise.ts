export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  focus: string[];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    number: "01",
    title: "PRODUCT DESIGN",
    description: "Digital products, interfaces and user experiences.",
    focus: ["User Journeys", "Product Strategy", "Interaction Architecture"],
  },
  {
    number: "02",
    title: "UI / UX",
    description: "Clear interfaces and thoughtful user flows.",
    focus: ["Wireframing", "High-fidelity Prototyping", "Usability Heuristics"],
  },
  {
    number: "03",
    title: "DESIGN SYSTEMS",
    description: "Consistent and scalable visual systems.",
    focus: ["Component Libraries", "Tokens & Spacing", "Documentation"],
  },
  {
    number: "04",
    title: "BRANDING",
    description: "Visual identities, illustrations and brand assets.",
    focus: ["Visual Identity", "Typography Systems", "Brand Guidelines"],
  },
  {
    number: "05",
    title: "2D / 3D ILLUSTRATION",
    description: "Visual assets for digital products and campaigns.",
    focus: ["Custom Avatars", "Icon Systems", "Spatial & 3D Assets"],
  },
  {
    number: "06",
    title: "MOTION",
    description: "2D animation and motion-oriented visual experiences.",
    focus: ["Micro-interactions", "Transition Timing", "2D Keyframe Motion"],
  },
];
