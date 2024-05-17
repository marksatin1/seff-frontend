import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { gray, violet } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: violet[200],
          DEFAULT: violet[500],
          dark: violet[800],
        },
        secondary: {
          light: "#FFB800",
          DEFAULT: "#FF9700",
          dark: "#CB7800",
        },
        neutral: {
          light: gray[100],
          DEFAULT: gray[400],
          dark: gray[600],
        },
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
