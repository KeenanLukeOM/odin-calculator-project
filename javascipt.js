"use strict";

// Query selectors for buttons
let selector = document.querySelectorAll(".topButton, .button, .lowerButton");

let clearQS = selector[0];
let negativeQS = selector[1];
let divideQS = selector[2];
let sevenQS = selector[3];
let eightQS = selector[4];
let nineQS = selector[5];
let multiplyQS = selector[6];
let fourQS = selector[7];
let fiveQS = selector[8];
let sixQS = selector[9];
let minusQS = selector[10];
let oneQS = selector[11];
let twoQS = selector[12];
let threeQS = selector[13];
let plusQS = selector[14];
let zeroQS = selector[15];
let decimalQS = selector[16];
let equalsQS = selector[17];

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
