/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      red: "#dd4333",
      yellowDarkSeeThrow: "rgba(76, 67, 28, 0.4)",
      yellowDark: "#251749",
      green: "#13ce66",
      yellow: "#FFFF00",
      grayDark: "#273444",
      gray: "#8492a6",
      grayLight: "#d3dce6",
      white: "#fff",
    },

    fontFamily: {
      Inter: ["Inter"],
    },
  },
  plugins: [],
};
