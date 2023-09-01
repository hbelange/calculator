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

// populates the display with clicked number or the computed result
function populateDisplay(e){
    display.textContent = e;
}


// event listner for number buttons
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => number.addEventListener('click', function(e){
    populateDisplay(e.target.textContent);
}))


