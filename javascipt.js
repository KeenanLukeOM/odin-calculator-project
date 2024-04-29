"use strict";

// Query selectors for buttons
let selector = document.querySelectorAll(".topButton, .button, .lowerButton");

selector.forEach((selector) => {
    selector.addEventListener("click", function () {
        const action = selector.dataset.action;
        console.log(action);
        switch (action) {
            case "clear":
                // Code!
                break;
            case "negative":
                // Code!
                break;
            case "divide":
                // Code!
                break;
            case "seven":
                // Code!
                break;
            case "eight":
                // Code!
                break;
            case "nine":
                // Code!
                break;
            case "multiply":
                // Code!
                break;
            case "four":
                // Code!
                break;
            case "five":
                // Code!
                break;
            case "six":
                // Code!
                break;
            case "minus":
                // Code!
                break;
            case "one":
                // Code!
                break;
            case "two":
                // Code!
                break;
            case "three":
                // Code!
                break;
            case "plus":
                // Code!
                break;
            case "zero":
                // Code!
                break;
            case "decimal":
                // Code!
                break;
            case "equals":
                // Code!
                break;
        }
    });
});

let firstNumber = 5;
let operator;
let secondNumber = 5;

function add() {
    return firstNumber + secondNumber;
}

function subtract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}

function operate() {
    if (operator === "add") {
        add();
    } else if (operator === "sub") {
        subtract();
    } else if (operator === "mult") {
        multiply();
    } else if (operator === "div") {
        divide();
    }
}
