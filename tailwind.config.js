const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{jsx,js,tsx,ts}",
    "./components/**/*.{jsx,js,tsx,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
};
