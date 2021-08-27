// colors Array
const colors = ["red", "green", "blue", "black", "seablue", "pink"]

// selection 

const btn = document.querySelector(".btn");
const color = document.getElementById("color");

// get random number
function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function () {
    const random = randomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

