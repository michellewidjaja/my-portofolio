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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#272828",
        blue: {
          DEFAULT: "#328dff",
          300: "#e6effc",
        },
        gray: {
          DEFAULT: "#7b7b7b",
          100: "#fcfcfc"
        },
        dark: {
          background: "#111010",
          text: "#858282",
          blue: '#262b34'
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
