function addOp (a, b) {
    return (a + b);
}

function subtractOp (a, b) {
    return a - b;
}

function multiplyOp (a,b) {
    return a * b;
}

function divideOp (a,b) {
    return a / b;
}

function operate () {
    if (operator === null || dispReset) return;

    num2 = parseFloat(currentNum);
    let answer;
    switch (operator) {
        case "+":
            answer = addOp(num1, num2);
            break;
        case "-":
            answer = subtractOp(num1, num2);
            break;
        case "*":
            answer = multiplyOp(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                mainDisp.textContent = "Error: Division by 0";
                resetCalc();
                return;
            }
            answer = divideOp(num1, num2);
            break;
    }
    answer = Math.round(result * 100) / 100;
    mainDisp.textContent = answer;
    num1 = answer;
    operator = null;
    dispReset = true;
}

function appendNumber(number) {
    if (dispReset) {
        currentNum = "";
        dispReset = false;
    }
    currentNum += number;
    mainDisp.textContent = currentNum;
    miniDisp.textContent = currentNum;
}

function resetCalc() {
    currentNum = "";
    num1 = null;
    num2 = null;
    operator = null;
    dispReset = false;
    mainDisp.textContent = "0";
    miniDisp.textContent = "";
}

function setOperator(op) {
    if (operator !== null) operate();
    num1 = parseFloat(currentNum);
    operator = op;
    resetCalc = true;
}

let currentNum = "";
let num1 = null;
let num2 = null;
let operator = null;
let dispReset = false;

const miniDisp = document.querySelector(".miniDisp");
const mainDisp = document.querySelector(".mainDisp");

document.querySelectorAll(".btns").forEach(button => {
    button.addEventListener("click", () => appendNumber(button.textContent));
});

const clrBtn = document.querySelector(".clrBtn");
clrBtn.addEventListener("click", resetCalc);

document.querySelectorAll(".opBtns").forEach(button => {
    button.addEventListener("click", () => setOperator(button.textContent))
});