/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background: linear-gradient("#ff0000", "#6b0505"),
        Black: "#000",
        Overlay: "#a6050562",
        DarkRed: "#a90707",
        DarkGray: "#666",
        LightGray: "#aaacac88",
      },
      flex: {
        full: "0 0 100%",
      },
    },
  },
  plugins: [],
};
