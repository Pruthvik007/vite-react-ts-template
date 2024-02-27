/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light: {
        //   primary: "#3C4042", // Dark grey
        //   secondary: "#5F6368", // Grey
        //   success: "#34A853", // Green
        //   error: "#EA4335", // Red
        //   warning: "#FBBC05", // Yellow
        //   info: "#4285F4", // Blue
        // },
        // dark: {
        //   primary: "#222831", // Charcoal
        //   secondary: "#393E46", // Iron
        //   success: "#006400", // Dark Green
        //   error: "#D00000", // Lusty Red
        //   warning: "#FFBA08", // Selective Yellow
        //   info: "#0081A7", // Cerulean Blue
        // },
      },
    },
  },
  plugins: [],
};
