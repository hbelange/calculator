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
let displayValue = 0;

// populates the display with clicked number or the computed result
function populateDisplay(e){
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
    console.log(displayValue);
}))

// event listner to clear display
const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    display.textContent = '0';
})

// click button
// make it appear on screen
// display variable and store it in first number
// click operation



