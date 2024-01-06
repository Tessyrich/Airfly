/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Signika"],
        Secondary: ["Merienda"],
      },
      fontSize: {
        big: "11rem",
        bigger: "15rem",
      },
      borderRadius: {
        lgg: "3rem",
      },
    },
  },
  plugins: [],
};
