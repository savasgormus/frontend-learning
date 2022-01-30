
let num1 = +prompt("Enter first number");
let operator = prompt("Enter operator");
let num2 = +prompt("Enter second number");
let text;

switch (operator) {
    case '+':
        text = num1 + num2;
        break;
    case '-':
        text = num1 - num2;
        break;
    case '*':
        text = num1 * num2;
        break;
    case '/':
        text = num1 / num2;
        break;
    default:
        text = "Invalid operator or number";
        break;
}
console.log(text);