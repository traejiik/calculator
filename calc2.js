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
        default:
            break;
    }
}

var num1 = parseInt(prompt("a"));
var num2 = parseInt(prompt("b"));
var operator = prompt("operator");

console.log(operate(num1, num2, operator));