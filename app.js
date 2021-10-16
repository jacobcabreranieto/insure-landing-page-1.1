const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
// Hamburger //
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
