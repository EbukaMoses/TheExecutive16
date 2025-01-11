/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Background: linear - gradient("#ff0000", "#6b0505"),
        Black: "#000",
        Overlay: "#a6050562",
        Red: "#a90707",
        DarkGray: "#aaacac88",
        LightGray: "#9b9b9b",
      },
      flex: {
        full: "0 0 100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

