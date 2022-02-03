// var colors = ["red", "green", "blue"];
// var colors2 = new Array("red", "green", "blue");

// console.log(typeof colors);
// console.log(typeof colors2);

// // var name = colors[0]
// // console.log(name);
// colors[0] = "black";
// console.log(colors);

// var name = ["John", "James", "24"];  // array 

// var name2 = {firstName: "John", lastName: "James", age: 24};  // object

// console.log(name);
// console.log(typeof name);
// console.log(name2);
// console.log(typeof name2);


// ------ lenght method ------

// var name1 = ["john", "james", "oliver", "aaron", "scott"];

// var x = name1.length;
// console.log(x);

// var name2 = [];
// var x = name2.length;
// console.log(x);  // 



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

// shift() ilk elemanı silip döndürüyor
// unshift() ilk elemanı ekliyor