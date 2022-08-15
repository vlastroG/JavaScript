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
function Power(val, power) {
    if (power == 0) {
        return 1;
    }
    else if ((power % 1) == 0 && power > 0) {
        return val * Power(val, power - 1);
    }
    else return null;
}
let z = Power(2, 8);
alert(z);