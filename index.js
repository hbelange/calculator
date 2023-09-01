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

