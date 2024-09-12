console.log("Calculator");

let num1 = prompt("what is your first number")
let num2 = prompt("what is your second number")

let operation = prompt(Number("what operation are you using? +, -, /, x"))

if (operation = "+") {
   console.log(num1 + num2)
} else if (operation = "-") {
    console.log(num1 - num2)
} else if (operation = "/") {
    console.log(num1 / num2)
} else if (operation = "x") {
    console.log(num1 * num2)
}