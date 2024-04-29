"use strict";

// Select the display windows

let displayText = document.querySelector(".displayText");
let smallDisplayText = document.querySelector(".smallDisplayText");

let currentDisplayText = "";

// Query selectors for buttons
let selector = document.querySelectorAll(".topButton, .button, .lowerButton");

selector.forEach((selector) => {
    selector.addEventListener("click", function () {
        const action = selector.dataset.action;
        console.log(action);
        switch (action) {
            case "clear":
                displayText.textContent = "Clear!";
                break;
            case "negative":
                // Code!
                break;
            case "divide":
                // Code!
                break;
            case "seven":
                currentDisplayText = currentDisplayText + 7;
                displayText.textContent = currentDisplayText;
                break;
            case "eight":
                currentDisplayText = currentDisplayText + 8;
                displayText.textContent = currentDisplayText;
                break;
            case "nine":
                currentDisplayText = currentDisplayText + 9;
                displayText.textContent = currentDisplayText;
                break;
            case "multiply":
                // Code!
                break;
            case "four":
                currentDisplayText = currentDisplayText + 4;
                displayText.textContent = currentDisplayText;
                break;
            case "five":
                currentDisplayText = currentDisplayText + 5;
                displayText.textContent = currentDisplayText;
                break;
            case "six":
                currentDisplayText = currentDisplayText + 6;
                displayText.textContent = currentDisplayText;
                break;
            case "minus":
                // Code!
                break;
            case "one":
                currentDisplayText = currentDisplayText + 1;
                displayText.textContent = currentDisplayText;
                break;
            case "two":
                currentDisplayText = currentDisplayText + 2;
                displayText.textContent = currentDisplayText;
                break;
            case "three":
                currentDisplayText = currentDisplayText + 3;
                displayText.textContent = currentDisplayText;
                break;
            case "plus":
                // Code!
                break;
            case "zero":
                currentDisplayText = currentDisplayText + 0;
                displayText.textContent = currentDisplayText;
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
