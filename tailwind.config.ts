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
        black: {
          DEFAULT: "#272828",
          100: "#171717"
        },
        blue: {
          DEFAULT: "#328dff",
          300: "#ebf5ff",
          100: "#f7fbff"
        },
        gray: {
          DEFAULT: "#7b7b7b",
          dark: "#878787",
          100: "#fcfcfc"
        },
        dark: {
          background: "#111010",
          text: "#858282",
        },
        purple: {
          500: "#744db1"
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
    // boxShadow: {
    //   'custom-md': '0 4px 6px 2px rgba(46, 46, 46, 0.1), 0 2px 4px 1px rgba(80, 80, 80, 0.1)',
    //   'custom-md-dark': '0 6px 12px -2px rgba(247, 247, 247, 0.1)',
    // },
  },
  plugins: [],
};
export default config;
