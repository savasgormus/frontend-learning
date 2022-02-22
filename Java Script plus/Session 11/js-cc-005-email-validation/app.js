// email validation test

let input = document.querySelector('input');
console.log(input);
let button = document.querySelector('button');
console.log(button);
let text = document.querySelector('p');
console.log(text);
let mail = input.value;


button.addEventListener('click', function() {
    if (mail.includes("@")) {
        let mailList = mail.split("@");
    }
});

















// button.addEventListener("click", ()=> {
//     if (!input.value.startsWith(".") && !input.value.startsWith("@") 
//         && !input.value.startsWith("-") && !input.value.startsWith("+")) {
//         text.innerText = true;
//         }
//     });