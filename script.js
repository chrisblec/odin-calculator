const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let operator = "";
let currentNumbers = [];
let currentNumber = "";
let total = "";

function buttonAction(value, type) {
    switch (type) {
        case "number":
            if (value == 0 && currentNumber == 0) {
                currentNumber = "";
            } else {
                currentNumber += Number(value);
            }
            console.log(currentNumber);
            display.textContent = currentNumber;
            break;
        case "decimal":
            if (currentNumber == 0) currentNumber = "";
            if (currentNumber > Math.floor(currentNumber)) break;
            currentNumber += Number(value),
            display.textContent = currentNumber;
            break;
        case "operator":
            operator = value;
            currentNumbers.push(currentNumber);
            if (currentNumbers.length === 2) {
                currentNumber = operate(currentNumbers[0], operator, currentNumbers[1])
                display.textContent = currentNumber;
                currentNumbers = [];
                currentNumbers.push(currentNumber);    
            }
            currentNumber = "";
            break;
        case "equals":
            currentNumbers.push(currentNumber);
            if (currentNumbers.length === 2) {
                currentNumber = operate(currentNumbers[0], operator, currentNumbers[1]);
                display.textContent = currentNumber;
                currentNumbers = [];
            };
            break;
        case "%":
            currentNumber *= .01;
            display.textContent = currentNumber;
            break;
        case "+/-":
            currentNumber = -Math.abs(currentNumber);
            display.textContent = currentNumber;
            break;
        case "AC":
            display.textContent = "";
            currentNumber = "";
            currentNumbers = [];
            break;
    }
}

// Display text content of the button when clicked 
buttons.forEach(button => {
    button.addEventListener("click", () => buttonAction(button.textContent, button.id))
})

function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function multiply(a, b) {
    return Number(a) * Number(b)
}

function divide(a, b) {
    if (b == 0) {
        return "Nahhhh bruh.. get real.";
    } else { 
        return Number(a) / Number(b)
    }
}

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'X': 
            return multiply(a, b); 
        case '/':
            return divide(a, b)
    }
}
