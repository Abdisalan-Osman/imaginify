import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        purple: {
          "100": "#F4F7FE",
          "200": "#BCB6FF",
          "400": "#868CFF",
          "500": "#7857FF",
          "600": "#4318FF",
        },
        dark: {
          "400": "#7986AC",
          "500": "#606C80",
          "600": "#2B3674",
          "700": "#384262",
        },
      },
      fontFamily: {
        IBMPlex: ["var(--font-ibm-plex)"],
      },
    },
  },
  plugins: [],
};

export default config;
