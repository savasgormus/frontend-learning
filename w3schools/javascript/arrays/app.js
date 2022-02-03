    // --- 1 ---

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars;  // Saab, Volvo, BMW


    // --- 2 ---

var cars =[]
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
document.getElementById("demo2").innerHTML = cars;  // Saab, Volvo, BMW


    // --- 3 ---

var cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo3").innerHTML = cars;  // Saab, Volvo, BMW


    // --- 4 --- accessing array element

var car = cars[0];
document.getElementById("demo4").innerHTML = car;  // Saab


    // --- 5 --- changing an array element

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo5").innerHTML = cars;  // Opel,Volvo,BMW


    // --- 6 --- Arrays are Objects

var person = ["John", "Doe", 46];
document.getElementById("demo6").innerHTML = person[0];  // john
console.log(typeof person); // object


    // --- 7 --- Arrays are Objects

var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo7").innerHTML = person.firstName;  // John
console.log(typeof person);  // object


    // --- 8 --- lenght property

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var lenght = fruits.length;
document.getElementById("demo8").innerHTML = lenght;  // 4


    // --- 9 --- Accessing the First Array Element

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits[0];
document.getElementById("demo9").innerHTML = fruit;  // Banana


    // --- 10 --- Accessing the Last Array Element

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits[fruits.length - 1];
document.getElementById("demo10").innerHTML = fruit;  // Mango


    // --- 11 --- Looping Array Elements

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fLen = fruits.length;

var text = "<ul>";
for (var i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo11").innerHTML = text;  // <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>


    // --- 12 --- Looping Array Elements

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>"
}

document.getElementById("demo12").innerHTML = text;  // <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>

































