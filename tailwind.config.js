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
        secondary__text: "#86371C",
      },
      fontFamily: {
        primary_font: "ValueSansPro",
        secondary_font: "bakildahistori",
        third_font_medium: "ValueSansPromedium",
      },
    },
  },
  plugins: [],
};
