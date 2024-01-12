/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media", //"media" regarde les préférence de l'ordinateur, "class" est détecté par une action utilisateur
  theme: {
    extend: {
      colors: {
        primary: {
          claire: "#fff3e5",
          DEFAULT: "#ffd6a5",
          sombre: "#b36100",
          100: "#ffc580",
        },
      },
      fontFamily: {
        title: ["Gluten"],
      },
      screens: {
        "3xl": "1600px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
