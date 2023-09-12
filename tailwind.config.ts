import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      purple: "#937dc2",
      "gray-100": "#f1f1f1",
      "gray-300": "#7b7881",
      "gray-400": "#7b7881",
      violet: "#c689c6",
    },
    extend: {
      minWidth: {
        "560px": "560px",
        "480px": "480px",
      },
    },
  },
  plugins: [],
};
export default config;
