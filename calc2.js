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
    let answer = 0;
    switch (op) {
        case "+":
            answer = addOp(num1, num2);
            return answer;
            break;
        case "-":
            answer = subtractOp(num1, num2);
            return answer;
            break;
        case "*":
            answer = multiplyOp(num1, num2);
            return answer;
            break;
        case "/":
            answer = divideOp(num1, num2);
            return answer;
            break;
        default:
            break;
    }
}

var num1 = parseInt(prompt("a"));
var num2 = parseInt(prompt("b"));
var operator = prompt("operator");

console.log(operate(num1, num2, operator));