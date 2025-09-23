import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        black: {
          100: '#171717',
          DEFAULT: '#15171a'
        },
        blue: {
          100: '#f7fbff',
          300: '#ebf5ff',
          500: '#328dff',
          600: '#4493f7d1',
          DEFAULT: '#328dff'
        },
        gray: {
          50: '#fcfcfc',
          400: '#7b7b7b',
          500: '#878787',
          DEFAULT: '#7b7b7b',
        },
        purple: {
          500: '#744db1'
        },
      
        // dark themes
        theme: {
          background: '#121316',
          primary: '#e0e0e0',
          secondary: '#b9b9b9',
          muted: '#858282',
          accent: '#4493f7d1',
        },
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      fontSize: {
				"h1": "1.625rem", // 26px
        "h2": "1.25rem", // 20px
        "h3": "1.125rem", // 18px
        "h4": "1rem", // 16px
        "h5": "0.875rem",// 14px
        "h6": "0.75rem", // 12px
      },
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			slideDown: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0px)'
  				}
  			}
  		},
  		animation: {
  			slideDown: 'slideDown 0.5s ease-out forwards',
  			slideUp: 'slideUp 0.5s ease-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [animatePlugin],
};
export default config;
