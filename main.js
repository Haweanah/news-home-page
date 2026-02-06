const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  nav.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});
