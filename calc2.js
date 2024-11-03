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
    switch (op) {
        case "+":
            addOp(num1, num2);
            break;
        case "-":
            subtractOp(num1, num2);
            break;
        case "*":
            multiplyOp(num1, num2);
            break;
        case "/":
            divideOp(num1, num2);
            break;
        default:
            break;
    }
}

var num1 = parseInt(prompt("a"));
var num2 = parseInt(prompt("b"));
var operator = prompt("operator");