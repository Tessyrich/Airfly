const hoverText2 = document.getElementById("hoverText2");
const hoverText3 = document.getElementById("hoverText3");
const hoverText4 = document.getElementById("hoverText4");
const changeableImage = document.getElementById("changeableImage");

hoverText1.addEventListener("mouseover", function () {
  // Change the image source when text 1 is hovered
  changeableImage.src = "../images/Dubai.avif";
});

hoverText1.addEventListener("mouseout", function () {
  // Reset the image source when mouse leaves text 1
  changeableImage.src = "../images/travel2.jpg";
});

hoverText2.addEventListener("mouseover", function () {
  // Change the image source when text 2 is hovered
  changeableImage.src = "../images/bali.webp";
});

hoverText2.addEventListener("mouseout", function () {
  // Reset the image source when mouse leaves text 2
  changeableImage.src = "../images/travel2.jpg";
});
hoverText3.addEventListener("mouseover", function () {
  // Change the image source when text 2 is hovered
  changeableImage.src = "../images/Instanbul.webp";
});

hoverText3.addEventListener("mouseout", function () {
  // Reset the image source when mouse leaves text 2
  changeableImage.src = "../images/travel2.jpg";
});
hoverText4.addEventListener("mouseover", function () {
  // Change the image source when text 2 is hovered
  changeableImage.src = "../images/rome.jpg";
});

hoverText4.addEventListener("mouseout", function () {
  // Reset the image source when mouse leaves text 2
  changeableImage.src = "../images/travel2.jpg";
});

// Function For FAQ

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".mb-4");

  faqItems.forEach((item) => {
    const question = item.querySelector(".cursor-pointer");
    const answer = item.querySelector(".hidden");

    question.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });
});
