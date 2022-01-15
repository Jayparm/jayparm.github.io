// select the button

const toggle = document.getElementById("toggle");
const body = document.getElementsByTagName("body");

toggle.addEventListener("click", function () {
  body[0].classList.toggle("dark-theme");
});

const swingIt = document.getElementById("swing-it");
const controller = document.querySelector(".controller");

swingIt.addEventListener("click", function () {
  controller.classList.add("gamepad");
});
