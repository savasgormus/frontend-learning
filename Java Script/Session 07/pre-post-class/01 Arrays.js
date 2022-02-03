/* preclasss

colors = ["red", "green", "blue"];
var colors2 = new Array("red", "green", "blue");

console.log(typeof colors);
console.log(typeof colors2);

// var name = colors[0]
// console.log(name);
colors[0] = "black";
console.log(colors);

var name = ["John", "James", "24"];  // array 

var name2 = {firstName: "John", lastName: "James", age: 24};  // object

console.log(name);
console.log(typeof name);
console.log(name2);
console.log(typeof name2);


// ------ lenght method ------

var name1 = ["john", "james", "oliver", "aaron", "scott"];

var x = name1.length;
console.log(x);

var name2 = [];
var x = name2.length;
console.log(x);  // 



// ------ concat() method ------

var dogs = ["bulldog", "beagle", "rottweiler"];
var cats = ["ragdoll", "sphynx", "birman"];
var pets = dogs.concat(cats);
console.log(pets);
var birds = ["parrot", "sparrow", "robin"];
var pets2 = dogs.concat(birds);
console.log(pets2);
var pets3 = dogs.concat(cats, birds);
console.log(pets3);


// ------ sort() method ------

var arr = ["john", "james", "oliver", "aaron", "scott"];
console.log(arr.sort());  // Aaron, James, John, Oliver, 

var num = ["23", "198", "34", "3", "9"]
console.log(num.sort());  // 198, 23, 3, 34, 9
var num1 = [23, 198, 34, 3, 9];
console.log(num1.sort());  // 198, 23, 3, 34, 9


// ------ push() and pop() Methods ------

// push() sona ekleme yapıyor
// pop() son elemanı silip döndürüyor
var names = ["john", "james", "oliver", "aaron", "scott"];

names.push("guile");
console.log(names);
names.pop();
console.log(names);


// ----- shift() and unshift() Methods ------

// shift() ilk elemanı silip döndürüyor string olarak sildiği elemanı döndürüyor
// unshift() ilk elemanı ekliyor ve arrayin yeni uzunluğunu veriyor.
var colors = ["red", "yellow","green"];
var shifted = colors.shift();

console.log(shifted);  // red
console.log(colors);  // yellow, green

var colors = ["red", "yellow","green"];
var x = colors.unshift("blue");
console.log(colors);  // ["blue", "red", "yellow", "green"]
console.log(x);  // 4


// ----- splice() Method ------

var colors = ["red", "yellow","green", "blue"];
colors.splice(1,2, "white" , "asd", "dasdas", 123, "2fsdfsfsdf");
// 1. indexten itibaren ekleyeceğim, 2 tane sileceğim

console.log(colors); // ["red", "white", "pink", "blue"]

var colors = ["red", "yellow","green", "blue"];
colors.splice(1,0, "white", "pink");
console.log(colors); // ["red", "white", "pink", "yellow", "green", "blue"]



// ----- slice() Method ------

var colors = ["red", "yellow","green", "blue"];
var newColors = colors.slice(1,3);  // 1. indexden başlayarak 3. indexe kadar olanları alıyor. 3.index dahil değil

console.log(colors); // ["red", "yellow","green", "blue"]
console.log(newColors); // ["yellow", "green"]  


var colors = ["Red" ,"Yellow", "Green", "Blue"];
var newColors = colors.slice(2, 4);
console.log(colors);  // ["Red" ,"Yellow", "Green", "Blue"]


// ----- indexOf() and lastIndexOf() Methods ------

var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
var x = colors.indexOf("Green", 3);
// arayacağım değer, kaçıncı indexten itibaren arayacağız.
console.log(x);  // 5

var colors = ["red", "yellow", "green", "blue", "pink", "green"];
var x = colors.lastIndexOf("green",4);
// arayacağım değer, sondan geriye doğru arama yapıyor. kaçıncı indexten itibaren arayacağız.
console.log(x);  // 2

var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green","Black"];
var x = colors.lastIndexOf("Green", 1);
console.log(x); // -1

*/
