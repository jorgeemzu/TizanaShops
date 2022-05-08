const navToggle = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const pregunta = document.querySelectorAll(".pregunta");
const preguntaBody = document.querySelectorAll(".pregunta-body");
const header = document.querySelector(".header");
var bgFlag = 0;
const screenSize = window.matchMedia("(max-width: 700px)");

console.log(navToggle);

const backgrounds = [
  "imgs/desktop-bg-1.jpg",
  "imgs/desktop-bg-2.jpg",
  "imgs/desktop-bg-3.jpg",
  "imgs/desktop-bg-4.jpg",
];

const backgroundsPhone = [
  "imgs/phone-bg-1.jpg",
  "imgs/phone-bg-2.jpg",
  "imgs/phone-bg-3.jpg",
  "imgs/phone-bg-4.jpg",
];

navToggle.addEventListener("click", () => {
  console.log("hola");
  const navstate = nav.getAttribute("data-visible");

  if (navstate == "false") {
    nav.classList.add("mobile-nav-show");
    overlay.classList.add("overlay-show");
    nav.setAttribute("data-visible", true);
    hamburger.classList.add("is-active");
  } else {
    nav.classList.remove("mobile-nav-show");
    overlay.classList.remove("overlay-show");
    nav.setAttribute("data-visible", false);
    hamburger.classList.remove("is-active");
  }
});

pregunta.forEach((pregunta, i) => {
  pregunta.addEventListener("click", () => {
    preguntaBody.forEach((body) => {
      console.log(body);
      body.classList.remove("accordeon-active");
    });

    preguntaBody[i].classList.add("accordeon-active");
  });
});

function background() {
  if (bgFlag == backgrounds.length) {
    bgFlag = 0;
  }

  if (screenSize.matches) {
    header.style.backgroundImage = `url(${backgroundsPhone[bgFlag]})`;
  } else {
    header.style.backgroundImage = `url(${backgrounds[bgFlag]})`;
  }
}

function changeBackground() {
  background();

  bgFlag++;
}

changeBackground();

setInterval(changeBackground, 10000);
