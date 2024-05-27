import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { amber, gray, green, purple, red, slate, violet, yellow } from "tailwindcss/colors";

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
          light: purple[100],
          DEFAULT: violet[500],
          dark: violet[800],
        },
        secondary: {
          light: amber[400],
          DEFAULT: amber[500],
          dark: amber[600],
        },
        paper: {
          light: gray[100],
          DEFAULT: gray[300],
          dark: slate[500],
        },
        error: {
          light: red[100],
          DEFAULT: red[600],
        },
        warning: {
          light: yellow[100],
          DEFAULT: yellow[500],
        },
        success: {
          light: green[100],
          DEFAULT: green[600],
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
