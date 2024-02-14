/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ceraroundpros: ["ceraroundpros", "sans-serif"],
      },
      colors: {
        yellow: {
          400: "#ffd43b",
        },
        slate: {
          100: "#F0F1F3FF",
          500: "#616D8AFF",
        },
        blue: {
          1000: "#183153FF",
        },
      },
    },
  },
  plugins: [],
};
