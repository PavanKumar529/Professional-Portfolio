// tailwind.config.js
import { defineConfig } from "vite";

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "serif"],
      },
      backgroundImage: {
        'gradient-to-left': 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))',
      },
    },
  },
  plugins: [],
});
