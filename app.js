const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
