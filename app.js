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

// Split input in the same order as displayed to gather numbers and operand as an array
function splitInput(input) {
    return input.split(/([+\-*/])/);
}

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

// Gather relevant items
const container = document.querySelector('.container');
const inputField = document.querySelector('.input-window');

// Listen for clicks in container to append clicked number or operand to input window
container.addEventListener('click', (event) => {
    const targetTag = event.target.tagName;
    const targetContent = event.target.textContent;

    if (targetTag == 'BUTTON' && targetContent == 'C') {
        inputField.value = '';

    } else if (targetTag == 'BUTTON' && targetContent == '=') {
        // Split input value and call operate() to return result inside input field
        let valuesArray = splitInput(inputField.value);

        inputField.value = operate(valuesArray[0], valuesArray[2], valuesArray[1]);
    } else {
        inputField.value += event.target.textContent;
    }
});