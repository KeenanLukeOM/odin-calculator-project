"use strict";

// Select the display windows

let displayText = document.querySelector(".displayText");
let smallDisplayText = document.querySelector(".smallDisplayText");

let displayTextVar = "";
let smallDisplayTextVar = "";

// Query selectors for buttons
let selector = document.querySelectorAll(".topButton, .button, .lowerButton");

selector.forEach((selector) => {
    selector.addEventListener("click", function () {
        const action = selector.dataset.action;
        console.log(action);
        switch (action) {
            case "clear":
                displayTextVar = "";
                displayText.textContent = displayTextVar;
                smallDisplayTextVar = "";
                smallDisplayText.textContent = smallDisplayTextVar;
                break;
            case "negative":
                // Code!
                break;
            case "divide":
                if (smallDisplayTextVar === "") {
                    // Sets the first number, operator to text
                    firstNumber = displayTextVar;
                    operator = "div";
                    // Sets small text content
                    smallDisplayTextVar = displayTextVar + " " + "÷";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Wipes display content
                    displayTextVar = "";
                    displayText.textContent = displayTextVar;
                } else {
                    // If second display populated, sets numbers to display text
                    secondNumber = displayTextVar;

                    // Calculates outcome
                    const outcome = divide();

                    // Sets first number to outcome and only ui to outcome
                    firstNumber = outcome;

                    // Sets small text content
                    smallDisplayTextVar = outcome + " " + "÷";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Sets text content to outcome, var to blank
                    displayText.textContent = outcome;
                    displayTextVar = "";
                }
                break;
            case "seven":
                displayTextVar = displayTextVar + "7";
                displayText.textContent = displayTextVar;
                break;
            case "eight":
                displayTextVar = displayTextVar + "8";
                displayText.textContent = displayTextVar;
                break;
            case "nine":
                displayTextVar = displayTextVar + "9";
                displayText.textContent = displayTextVar;
                break;
            case "multiply":
                // Code!
                break;
            case "four":
                displayTextVar = displayTextVar + "4";
                displayText.textContent = displayTextVar;
                break;
            case "five":
                displayTextVar = displayTextVar + "5";
                displayText.textContent = displayTextVar;
                break;
            case "six":
                displayTextVar = displayTextVar + "6";
                displayText.textContent = displayTextVar;
                break;
            case "minus":
                // Code!
                break;
            case "one":
                displayTextVar = displayTextVar + "1";
                displayText.textContent = displayTextVar;
                break;
            case "two":
                displayTextVar = displayTextVar + "2";
                displayText.textContent = displayTextVar;
                break;
            case "three":
                displayTextVar = displayTextVar + "3";
                displayText.textContent = displayTextVar;
                break;
            case "plus":
                // Code!
                break;
            case "zero":
                displayTextVar = displayTextVar + "0";
                displayText.textContent = displayTextVar;
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

let firstNumber = 0;
let operator;
let secondNumber = 0;

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
