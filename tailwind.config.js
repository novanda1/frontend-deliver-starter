const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "app-red": {
        DEFAULT: "#CF234B",
        dark: "#B71B3F",
      },
      "app-green": "#00AA13",
      "app-yellow": "#F7C926",
      "app-purple": "#4D4794",
      "app-primary": "#CF234B",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
