const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      persian: "#d49556",
      axolotl: "#66806A",
      olive: "#B4C6A6",
      text: "#454545",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Cormorant SC", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
