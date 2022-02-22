let firstNumber = document.getElementById('first');
let secondNumber = document.getElementById('second');
let operand = document.getElementById('math');
let button = document.getElementById('calc');
let result = document.getElementById('result');

button.addEventListener('click', function() {
    
    if(operand.value == "+"){
        result.innerText = Number(firstNumber.value) + Number(secondNumber.value);
    } else if (operand.value == "-"){
        result.innerText = Number(firstNumber.value) - Number(secondNumber.value);
    } else if (operand.value == "*"){
        result.innerText = Number(firstNumber.value) * Number(secondNumber.value);
    } else if (operand.value == "/" && secondNumber.value != 0){
        result.innerText = Number(firstNumber.value) / Number(secondNumber.value);
    } else {
        alert("Please input a valid operand");
    }
});


