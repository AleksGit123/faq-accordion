"use strict"

let plusButton = document.querySelectorAll(".plus");
let minusButton = document.querySelectorAll(".minus");
let answers = document.querySelectorAll(".answers");

plusButton.forEach((plusButton, index) => {
    plusButton.addEventListener("click", () => {
        plusButton.classList.add("hidden");
        minusButton[index].classList.remove("hidden");
        answers[index].classList.remove("hidden");
    });
});

minusButton.forEach((minusButton, index) => {
    minusButton.addEventListener("click", () => {
        minusButton.classList.add("hidden");
        plusButton[index].classList.remove("hidden");
        answers[index].classList.add("hidden");
    });
});

