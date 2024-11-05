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

function operate (num1, num2, op) {
    let answer;
    switch (op) {
        case "+":
            answer = addOp(num1, num2);
            return answer;
        case "-":
            answer = subtractOp(num1, num2);
            return answer;
        case "*":
            answer = multiplyOp(num1, num2);
            return answer;
        case "/":
            answer = divideOp(num1, num2);
            return answer;
    }
}

let currentNum = "";
let num1 = null;
let num2 = null;
let operator = null;
let dispReset = false;

const miniDisp = document.querySelector(".miniDisp");
const mainDisp = document.querySelector(".mainDisp");

