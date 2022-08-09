// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.
function TwoFunNumbers(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    }
    else if (a < 0 && b < 0) {
        return a * b;
    }
    else {
        return a + b;
    }
}
let x = -5;
let y = -100;
let z = TwoFunNumbers(x, y);
alert(z);
x = 90;
z = TwoFunNumbers(x, y);
alert(z);
y = 0;
z = TwoFunNumbers(x, y);
alert(z);
