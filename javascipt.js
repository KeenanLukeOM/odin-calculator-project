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

        // Displays action in console, remove in hypothetical prod
        console.log(action);
        switch (action) {
            case "clear":
                displayTextVar = "";
                displayText.textContent = 0;
                firstNumber = 0;

                smallDisplayTextVar = "";
                smallDisplayText.textContent = smallDisplayTextVar;
                secondNumber = 0;
                break;
            case "negative":
                if (
                    smallDisplayTextVar !== "" &&
                    displayTextVar.includes("-")
                ) {
                    if (displayTextVar === "-0") {
                        displayTextVar = "-0";
                        console.log(displayTextVar);
                    } else {
                        displayTextVar = smallDisplayTextVar.toString();
                    }

                    displayTextVar = displayTextVar.replace("-", "");
                    console.log(displayTextVar);
                    displayText.textContent = displayTextVar;
                } else if (smallDisplayTextVar !== "") {
                    if (displayTextVar === "") {
                        displayTextVar = "0";
                    } else if (displayTextVar === "0") {
                        displayTextVar = "0";
                    } else {
                        displayTextVar = smallDisplayTextVar;
                    }

                    displayTextVar = "-" + displayTextVar;
                    displayText.textContent = displayTextVar;
                } else if (displayTextVar.includes("-")) {
                    displayTextVar = displayTextVar.replace("-", "");
                    displayText.textContent = displayTextVar;
                } else {
                    displayTextVar = "-" + displayTextVar;
                    displayText.textContent = displayTextVar;
                }
                break;
            case "divide":
                if (smallDisplayTextVar === "") {
                    // Checks for an initial value, returns zero if not present
                    if (displayTextVar === "") {
                        displayTextVar = "0";
                    }

                    // Sets the first number, operator to text
                    firstNumber = displayTextVar;
                    operator = "div";
                    // Sets small text content
                    smallDisplayTextVar = displayTextVar + " " + "÷";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Wipes display content
                    displayTextVar = "";
                    displayText.textContent = displayTextVar;
                } else if (displayTextVar === "") {
                    // Sets small text content
                    smallDisplayTextVar = smallDisplayTextVar + " " + "÷";
                    smallDisplayText.textContent = smallDisplayTextVar;
                    operator = "div";
                } else {
                    // Returns error and wipes calculator if dividing by zero
                    if (firstNumber == 0 && secondNumber == 0) {
                        displayTextVar = "";
                        displayText.textContent = "0";
                        alert("Nice try, you can't divide by 0!");

                        smallDisplayTextVar = "";
                        smallDisplayText.textContent = smallDisplayTextVar;
                        break;
                    }

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
                if (smallDisplayTextVar === "") {
                    // Checks for an initial value, returns zero if not present
                    if (displayTextVar === "") {
                        displayTextVar = "0";
                    }

                    // Sets the first number, operator to text
                    firstNumber = displayTextVar;
                    operator = "mult";
                    // Sets small text content
                    smallDisplayTextVar = displayTextVar + " " + "x";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Wipes display content
                    displayTextVar = "";
                    displayText.textContent = displayTextVar;
                } else if (displayTextVar === "") {
                    // Sets small text content
                    smallDisplayTextVar = smallDisplayTextVar + " " + "x";
                    smallDisplayText.textContent = smallDisplayTextVar;
                    operator = "mult";
                } else {
                    // If second display populated, sets numbers to display text
                    secondNumber = displayTextVar;

                    // Calculates outcome
                    const outcome = multiply();

                    // Sets first number to outcome and only ui to outcome
                    firstNumber = outcome;

                    // Sets small text content
                    smallDisplayTextVar = outcome + " " + "x";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Sets text content to outcome, var to blank
                    displayText.textContent = outcome;
                    displayTextVar = "";
                }
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
                if (smallDisplayTextVar === "") {
                    // Checks for an initial value, returns zero if not present
                    if (displayTextVar === "") {
                        displayTextVar = "0";
                    }

                    // Sets the first number, operator to text
                    firstNumber = displayTextVar;
                    operator = "sub";
                    // Sets small text content
                    smallDisplayTextVar = displayTextVar + " " + "-";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Wipes display content
                    displayTextVar = "";
                    displayText.textContent = displayTextVar;
                } else if (displayTextVar === "") {
                    // Sets small text content
                    smallDisplayTextVar = smallDisplayTextVar + " " + "-";
                    smallDisplayText.textContent = smallDisplayTextVar;
                    operator = "sub";
                } else {
                    // If second display populated, sets numbers to display text
                    secondNumber = displayTextVar;

                    // Calculates outcome
                    const outcome = subtract();

                    // Sets first number to outcome and only ui to outcome
                    firstNumber = outcome;

                    // Sets small text content
                    smallDisplayTextVar = outcome + " " + "-";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Sets text content to outcome, var to blank
                    displayText.textContent = outcome;
                    displayTextVar = "";
                }
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
                if (smallDisplayTextVar === "") {
                    // Checks for an initial value, returns zero if not present
                    if (displayTextVar === "") {
                        displayTextVar = "0";
                    }

                    // Sets the first number, operator to text
                    firstNumber = displayTextVar;
                    operator = "add";
                    // Sets small text content
                    smallDisplayTextVar = displayTextVar + " " + "+";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Wipes display content
                    displayTextVar = "";
                    displayText.textContent = displayTextVar;
                } else if (displayTextVar === "") {
                    // Sets small text content
                    smallDisplayTextVar = smallDisplayTextVar + " " + "+";
                    smallDisplayText.textContent = smallDisplayTextVar;
                    operator = "add";
                } else {
                    // If second display populated, sets numbers to display text
                    secondNumber = displayTextVar;

                    // Calculates outcome
                    const outcome = add();

                    // Sets first number to outcome and only ui to outcome
                    firstNumber = outcome;

                    // Sets small text content
                    smallDisplayTextVar = outcome + " " + "+";
                    smallDisplayText.textContent = smallDisplayTextVar;

                    // Sets text content to outcome, var to blank
                    displayText.textContent = outcome;
                    displayTextVar = "";
                }

                break;
            case "zero":
                displayTextVar = displayTextVar + "0";
                displayText.textContent = displayTextVar;
                break;
            case "decimal":
                if (displayTextVar.includes(".")) {
                    break;
                } else {
                    displayTextVar = displayTextVar + ".";
                    displayText.textContent = displayTextVar;
                }
                break;
            case "equals":
                if (displayTextVar === "") {
                    break;
                }
                // Checks for division by zero, resets calc
                if (
                    firstNumber == 0 &&
                    secondNumber == 0 &&
                    operator === "div"
                ) {
                    displayTextVar = "";
                    displayText.textContent = "0";
                    alert("Nice try, you can't divide by 0!");

                    smallDisplayTextVar = "";
                    smallDisplayText.textContent = smallDisplayTextVar;
                    break;
                }
                // Sets numbers to display text
                secondNumber = displayTextVar;

                // Calculates outcome
                let outcome = operate().toString();

                // Checks for decimal and rounds to 5 points max
                if (outcome.includes(".")) {
                    const outcomeDecimalIndex = outcome.indexOf(".");

                    const decimalSuffix = outcome.substring(
                        outcomeDecimalIndex + 1
                    );

                    let roundedSuffix = parseFloat("0." + decimalSuffix);

                    roundedSuffix = roundedSuffix.toFixed(5);

                    outcome =
                        outcome.substring(0, outcomeDecimalIndex + 1) +
                        roundedSuffix.substring(2);
                }

                // Sets first number to outcome and only ui to outcome
                firstNumber = outcome;

                // Sets small text content
                smallDisplayTextVar = outcome;
                smallDisplayText.textContent = smallDisplayTextVar;

                // Sets text content to outcome, var to blank
                displayText.textContent = outcome;
                displayTextVar = "";
                break;
        }
    });
});

let firstNumber = 0;
let operator;
let secondNumber = 0;

function add() {
    return Number(firstNumber) + Number(secondNumber);
}

function subtract() {
    return Number(firstNumber) - Number(secondNumber);
}

function multiply() {
    return Number(firstNumber) * Number(secondNumber);
}

function divide() {
    return Number(firstNumber) / Number(secondNumber);
}

function operate() {
    if (operator === "add") {
        return add();
    } else if (operator === "sub") {
        return subtract();
    } else if (operator === "mult") {
        return multiply();
    } else if (operator === "div") {
        return divide();
    }
}
