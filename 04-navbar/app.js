// select from the DOM
const toggle = document.querySelector(".toggle");
const navLinks = document.querySelector(".navlinks");

toggle.addEventListener("click", function () {
    navLinks.classList.toggle("is-active");
    toggle.classList.toggle("active")
})