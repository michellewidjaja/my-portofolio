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
        'columbia-blue': '#B7D0DD',
        'yellow': '#E8BA5D',
        'sienna': '#E38164',
        'melon': '#DBAC9C',
        'citron': '#CDCF8A',
        'dun': '#D5C8AD',
      },
      fontFamily: {
        itim: ['Itim', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
