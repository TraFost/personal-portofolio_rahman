/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        teal: "#54BAB9",
        "teal-white": "#F5FCFF",
      },
    },
  },
  plugins: [],
};
