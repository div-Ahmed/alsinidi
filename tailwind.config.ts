import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mainBg': '#f9fafc',
        'primary': '#138AA8',
        'bgBrimary': '#E2EFF4',
        'secondary': '#EB8F3C',
        'grayColor': '#F2F2F2',
        'graySubText': '#979797',
        'lightGrayColor': '#e8e8e8',
        'blackText': '#363636',
        'blackSubText': '#585858',
        'captionColor': '#979797',
        'yellowLightColor': '#EB8F3C1A',
        'pinkLightColor': '#F13A3A26',
        'redColor': '#F13A3A',
        'success': '#62BA7B'
      },
      dropShadow: {
        'custom': '0 0 5px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config