document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");

  toggle.addEventListener("change", function () {
    document.documentElement.classList.toggle("dark");
    document.querySelector(".dot").classList.toggle("translate-x-full");
    document.querySelector(".dot").classList.toggle("bg-gray-800");
  });

  burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
