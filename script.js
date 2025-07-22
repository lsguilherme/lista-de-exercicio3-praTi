document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const closeMenu = () => {
    navMenu.classList.remove("active");
  };

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
});
