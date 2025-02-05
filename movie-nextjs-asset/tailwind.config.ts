import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        light: {
          100: "var(--color-light-100)",
          200: "var(--color-light-200)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
        },
        dark: {
          100: "var(--color-dark-100)",
        },
      },
      backgroundImage: {
        'hero-pattern': 'url("/hero-bg.png")',
        "text-gradient": "linear-gradient(to right, #D6C7FF, #AB8BFF)",
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  safelist: [
    'bg-light-100/5',
    'shadow-light-100/10'
  ],
  plugins: [],
};

export default config;