/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1400px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    fontFamily: {
      manrope: ["MANROPE"],
    },
  },

  plugins: [],
};
