function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}
function Addition(a, b) {
    return a + b;
}
function Subtraction(a, b) {
    return a - b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "*":
            return Multiply(arg1, arg2);
        case "/":
            return Divide(arg1, arg2);
        case "+":
            return Addition(arg1, arg2);
        case "-":
            return Subtraction(arg1, arg2);
        default:
            return NaN;
    }
}
let z = mathOperation(10, 5, "*");
alert(z);
z = mathOperation(10, 5, "/");
alert(z);
z = mathOperation(10, 5, "+");
alert(z);
z = mathOperation(10, 5, "-");
alert(z);