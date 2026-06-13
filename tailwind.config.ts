import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-ui)",
          "Hiragino Sans",
          "Yu Gothic UI",
          "Yu Gothic",
          "Meiryo",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(73, 55, 83, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
