// Operations functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operation variables (hardcoded for now)
let num1 = 5;
let num2 = 3;
let operand = '+';

// return a result by calling it's required operation function
function operate(num1, num2, operand) {
    switch (operand) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    }
}

console.log(operate(num1, num2, operand));