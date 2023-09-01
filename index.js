function add(a, b){
    return a + b;
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

let firstNumber, operator, secondNumber; // three parts of a calculator operation

function operate(firstNum, op, secondNum){
    if (op === "+"){
        add(firstNum, secondNum);
    } else if (op === '-'){
        subtract(firstNum, secondNum);
    } else if (op === '*'){
        multiply(firstNum, secondNum);
    } else if (op === '/'){
        divide(firstNum, secondNum);
    }
}

const display = document.querySelector('.display');
let displayValue = '';

// populates the display with clicked number or the computed result
function populateDisplay(e){
    if (secondNumberStarted){
        // reset display if the operator has been selected, preceed as normal
        display.textContent = '';
        displayValue = '';
        secondNumberStarted = false;
    }
    if (display.textContent === '0'){
        display.textContent = '';
    }
    display.textContent += e;
    displayValue += e;
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
})

// event listener for operator
const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', (e) => {
    // whatever numbers are currently stored in the display we want to save
    firstNumber = display.textContent;
    // store whichever operation was selected into the operator variable
    operator = e.target.textContent;
    secondNumberStarted = true;
}))

let secondNumberStarted = false;


// enter numbers for first number
// click operation. store the numbers in a variable as well as the operation
// click numbers for scond number. 
// click equals, store digits for second number in a variable
// call the function depening on the operation
// return the value of the operation and store it in the first variable




