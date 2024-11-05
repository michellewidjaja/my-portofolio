import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#010101',
        'floral-white': '#FDF8ED',
        'blue': {
          DEFAULT: '#B7D0DD',
          dark: '#284653',
          light: '#B7D0DD'
        },
        'yellow': {
          DEFAULT: '#E8BA5D',
          dark: '#59400D',
          light: '#E8BA5D'
        },
        'sienna': {
          DEFAULT: '#E38164',
          dark: '#672713',
          light: '#E38164'
        },
        'melon': {
          DEFAULT: '#DBAC9C',
          dark: '#4B281B',
          light: '#DBAC9C'
        },
        'citron': {
          DEFAULT: '#CDCF8A',
          dark: '#47481E',
          light: '#CDCF8A'
        },
        'dutch-white': {
          DEFAULT: '#E3D5B7',
          dark: '#4F442B',
          light: '#E3D5B7'
        },
        'gray': {
          DEFAULT: '#808080'
        }
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
};
export default config;
