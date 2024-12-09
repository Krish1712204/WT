function Add() {
    let num1 = parseFloat(document.getElementById("value1").value);
    let num2 = parseFloat(document.getElementById("value2").value);
    result = num1 + num2;
    document.getElementById("result").innerHTML = "Addition is: " + result
}

function Sub() {
    let num1 = parseFloat(document.getElementById("value1").value);
    let num2 = parseFloat(document.getElementById("value2").value);
    result = num1 - num2;
    document.getElementById("result").innerHTML = "Subtraction is: " + result
}

function Mul() {
    let num1 = parseFloat(document.getElementById("value1").value);
    let num2 = parseFloat(document.getElementById("value2").value);
    result = num1 * num2;
    document.getElementById("result").innerHTML = "Multiplication is: " + result
}

function Div() {
    let num1 = parseFloat(document.getElementById("value1").value);
    let num2 = parseFloat(document.getElementById("value2").value);
    result = num1 / num2;
    document.getElementById("result").innerHTML = "Division is: " + result
}