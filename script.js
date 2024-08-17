console.log("Hello Bhai")

let input = document.querySelector(".input");
let hide = document.querySelector(".hide");
let body = document.querySelector("body");

input.addEventListener("focus" , () => {
    hide.style.display = "block";
    hide.style.display = "flex";
});


