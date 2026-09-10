import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090a",
        surface: {
          50: "#18191b",
          100: "#121315",
          200: "#0e0f11",
          300: "#0a0b0d",
        },
        border: {
          subtle: "#1c1e22",
          light: "#262930",
        },
        accent: {
          DEFAULT: "#10b981", // subtle emerald
          muted: "rgba(16, 185, 129, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.15em",
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
