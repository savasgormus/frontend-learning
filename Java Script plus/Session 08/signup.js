// dom accessing
let firstNameById = document.getElementById("first_name");
console.log(firstNameById);

let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClassName);

let firstNameByName = document.getElementsByName("first_name")[0];
console.log(firstNameByName);

let firstNameBySelectorId = document.querySelector("#first_name");
console.log(firstNameBySelectorId);

let firstNameBySelectorClass = document.querySelector(".input--style-4");
console.log(firstNameBySelectorClass);