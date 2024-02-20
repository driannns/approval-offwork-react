/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        museosans: ["Museo Sans Rounded", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
