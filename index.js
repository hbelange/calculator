function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNumber = 0;
let operator = ''
let secondNumber = 0; // three parts of a calculator operation

function operate(firstNum, op, secondNum){
    if (op === "+"){
        return add(firstNum, secondNum);
    } else if (op === '-'){
        return subtract(firstNum, secondNum);
    } else if (op === 'X'){
        return multiply(firstNum, secondNum);
    } else if (op === '/'){
        return divide(firstNum, secondNum);
    }
}

const display = document.querySelector('.display');

// populates the display with clicked number or the computed result
function populateDisplay(e){
    if (secondNumberStarted){
        // reset display if the operator has been selected, preceed as normal
        display.textContent = '';
        secondNumberStarted = false;
    }
    if (display.textContent === '0'){
        display.textContent = '';
    }
    display.textContent += e;
}


// event listner for number buttons
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => number.addEventListener('click', function(e){
    populateDisplay(e.target.textContent);
}))

// event listner to clear display
const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
})

// event listener for operator
const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', (e) => {
    operationPerformed = false;
    if (firstNumber == '') {
        // whatever numbers are currently stored in the display we want to save
        firstNumber = display.textContent;
    } else {
        secondNumber = display.textContent
        firstNumber = operate(firstNumber, operator, secondNumber);
        updateDisplay(firstNumber);
    }
    // store whichever operation was selected into the operator variable
    operator = e.target.textContent;
    secondNumberStarted = true;
}))

// event listener for equal
const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
    if (operationPerformed){
        firstNumber = operate(firstNumber, operator, secondNumber);
    } else {
        secondNumber = display.textContent;
        firstNumber = operate(firstNumber, operator, secondNumber);
        operationPerformed = true;
    }
    
    // call function to operate
    updateDisplay(firstNumber);
})

let secondNumberStarted = false;
let operationPerformed = false;

function updateDisplay(result){
    display.textContent = result;
}

// if the user selects a second operator, i need to assign result of first operation to the first number

