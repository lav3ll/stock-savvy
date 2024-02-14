/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        DMSans: ["DMSans", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0,1fr))",
        8: "repeat(8, minmax(0,1fr))",
        9: "repeat(9, minmax(0,1fr))",
        10: "repeat(10, minmax(0,1fr))",
        11: "repeat(11, minmax(0,1fr))",
        12: "repeat(12, minmax(0,1fr))",
      }
    },
  },
  plugins: [],
};
