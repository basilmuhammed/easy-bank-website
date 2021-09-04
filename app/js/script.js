const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  body.classList.toggle("noscroll");
  header.classList.toggle("open");
});
