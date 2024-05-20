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
          light: "#F8F4FF",
          DEFAULT: violet[500],
          dark: "#4D16A7",
        },
        secondary: {
          light: "#FFB800",
          DEFAULT: "#FF9700",
          dark: "#CB7800",
        },
        accent: {
          light: "#FFEEF7",
          DEFAULT: "#FF018A",
        },
        neutral: {
          light: "#F6F8FA",
          DEFAULT: "#ECEEF3",
          dark: "#8384AD",
        },
        error: {
          light: "#FFF2F1",
          DEFAULT: "#FA012C",
        },
        warning: {
          light: "#FFF7E1",
          DEFAULT: "#E1A800",
        },
        success: {
          light: "#ECFAF0",
          DEFAULT: "#31A64F",
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
