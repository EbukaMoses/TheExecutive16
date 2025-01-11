/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background: linear-gradient("#ff0000", "#6b0505"),
        Black: "#0f172a ",
        Overlay: "#a6050562",
        Danger: "#B91C1C",
        Warning: "#e4a11b",
        Success: "#14a44d",
        Primary: "#3b71ca",
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
