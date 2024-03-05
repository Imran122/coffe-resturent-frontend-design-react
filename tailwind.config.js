/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary_colour: "var(--secondary-colour)",
        primary_colour: "var(--primary-colour)",
        third_colour: "var(--third-colour)",
      },
      backgroundColor: {
        primary_background: "#FFFAF2",
      },
      textColor: {
        primary_text: "#270A05",
        secondary_text: "#86371C",
      },
      fontFamily: {
        primary_font: "Value Sans Pro",
        secondary_font: "Bakilda Histori",
        third_font_medium: "Value Sans Pro Medium",
      },
    },
  },
  plugins: [],
};
