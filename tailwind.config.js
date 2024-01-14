/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Html sub/solutions.html",
    "./Html sub/aboutUs.html",
    "./Html sub/Contact.html",
    "./Html sub/Share-a-flight.html",
  ],
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
      backgroundImage: {
        "hero-pattern": "url('../images/contactus4.jpg')",
        "footer-texture": "url('../images/insideflight4.jpg')",
        "share-bg": "url('../images/Privatecharter.webp')",
      },
      colors: {
        blueshade: "rgb(98,146,158)",
      },
      Height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
