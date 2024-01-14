document.addEventListener("DOMContentLoaded", function () {
  const toggleFormButton = document.getElementById("toggleFormButton");
  const formContainer = document.getElementById("formContainer");

  toggleFormButton.addEventListener("click", function () {
    // Toggle the visibility of the form container
    formContainer.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hoverText1 = document.getElementById("hoverText1");
  const hoverText2 = document.getElementById("hoverText2");
  const hoverText3 = document.getElementById("hoverText3");
  const hoverText4 = document.getElementById("hoverText4");
  const changeableImage = document.getElementById("changeableImage");

  hoverText1.addEventListener("mouseover", function () {
    // Change the image source when text 1 is hovered
    changeableImage.src = "./images/Dubai.avif";
  });

  hoverText1.addEventListener("mouseout", function () {
    // Reset the image source when mouse leaves text 1
    changeableImage.src = "./images/travel2.jpg";
  });

  hoverText2.addEventListener("mouseover", function () {
    // Change the image source when text 2 is hovered
    changeableImage.src = "./images/bali.webp";
  });

  hoverText2.addEventListener("mouseout", function () {
    // Reset the image source when mouse leaves text 2
    changeableImage.src = "./images/travel2.jpg";
  });
  hoverText3.addEventListener("mouseover", function () {
    // Change the image source when text 2 is hovered
    changeableImage.src = "./images/Instanbul.webp";
  });

  hoverText3.addEventListener("mouseout", function () {
    // Reset the image source when mouse leaves text 2
    changeableImage.src = "./images/travel2.jpg";
  });
  hoverText4.addEventListener("mouseover", function () {
    // Change the image source when text 2 is hovered
    changeableImage.src = "./images/rome.jpg";
  });

  hoverText4.addEventListener("mouseout", function () {
    // Reset the image source when mouse leaves text 2
    changeableImage.src = "./images/travel2.jpg";
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
