import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F3F4F6",
          header: "#FFFFFF",
          sidebar: "#E5E7EB",
          text: "#111827",
          tagHover: "#D1D5DB",
          card: "#FFFFFF",
        },
        dark: {
          background: "#0D1117",
          header: "#161B22",
          sidebar: "#161B22",
          text: "#C9D1D9",
          tagHover: "#21262D",
          card: "#21262D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
