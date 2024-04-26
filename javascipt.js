"use strict";

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
