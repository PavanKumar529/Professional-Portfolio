import { defineConfig } from "vite";

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        'gradient-to-left': 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))',
      },
      colors: {
        'custom-purple': '#8f00ff',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '80': '20rem',
      },
    },
  },
  plugins: [],
});
