let tempC = 36.6;
let tempF = ConvertCelsToFareng(tempC);
function ConvertCelsToFareng(cels) {
    return ((9 / 5) * cels + 32);
}
function ShowResult(input, result) {
    alert(`${input} градусов по Цельсию - это ${result} градусов по Фаренгейту.`);
}
setTimeout(ShowResult(tempC, tempF), 5000);