// select from the DOM
let count = 0;
let counter = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        
        if(styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
       counter.textContent = count; 
       if (count > 0) {
           counter.style.color = "green"
       } else if (count < 0) {
           counter.style.color = "red"
       } else {
           counter.style.color = "black"
       }
    })

})