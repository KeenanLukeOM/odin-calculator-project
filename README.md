# Odin Calculator Project

This repo contains code for a simple calculator utilizing learnings from the entirety of the "Javascript foundations" course in The Odin Project.

https://www.theodinproject.com/paths

**Link to project:** https://keenanlukeom.github.io/odin-calculator-project/

![ODIN Calculator Project](https://i.ibb.co/Pj4CBHk/Calculator.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This project leverages fundamentals level HTML and CSS to create a calculator interface, and utilizes Javascript switch functions to determine which key was pressed, and when to calculate outcomes.

The "switch(action)" function under the selector event listener provides interface and variable changes based on the expected outcome of the user input, while the add(), subtract(), multiply(), divide(), and operate() functions calculate based on those values.

## Optimizations

-   When a user attempted to use the negative case multiple times after the upper display is populated, it would fetch the upper input, resulting in an error. This was rectified through a simple if statement nested in the if else flow to ensure the intended string is utilized.

-   When a user attempted to use multiple operations, an error would occur. This behavior was unintended, and rectified by re-declaring the operator in all cases where an operator is used in succession.

-   When a user attempted to use equals without any input, infinite was returned. This was rectified by ensuring the first and second number are reset to zero, instead of a blank string, when the display is wiped.

-   When a user attempted to divide by zero, the calculator would crash! This was rectified with a simple check for zero division, and by returning a fun alert in the browser.

## Lessons Learned:

I learned more of the complexities associated with DOM manipulation, and the requirements to make a functioning UI. I also learned, as the project predominantly utilized strings, many string manipulation techniques (particularly when working with decimals and negatives).

## Examples:

Take a look at these examples that I have in my portfolio:

**Etch-A-Sketch:** https://github.com/KeenanLukeOM/odin-etch-a-sketch

**The Envisionists Landing Page:** https://github.com/KeenanLukeOM/envisionists-landing
