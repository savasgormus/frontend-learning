var cars = ["Opel", "Audi", "BMW"];
console.log(cars);

var cars2 = Array.of("Opel", "Audi", "BMW");
console.log(cars2);

var cars3 = new Array("Opel", "Audi", "BMW");
console.log(cars3);

var num1 = new Array(2,10);
var num2 = new Array(5);
console.log(num2);



var cars = ["Opel", "Audi", [1,2,true], "BMW"];
console.log(cars[2][2]); // array içerisinde bulunan bir array'in 2. indexini aldık: true

cars[2] = "mercedes"
console.log(cars);

cars[10] = "ferrari"
console.log(cars);




var cars = ["Opel", , "Audi", "BMW"];
var cars2 = 2

console.log(typeof cars);   // object
console.log(cars instanceof Array); // true  array demektir.
console.log(cars2 instanceof Array); // false  array demektir.
console.log(Array.isArray(cars)); // true  array demektir.


// ----- lenght -----

var fruits = ["apple", "banana", "orange"];
fruits[6] = "mango";
console.log(fruits.length); // 7 elemanlı çünkü arada boş elemanlar da oluştu.


// ----- concat() -----

var fruits = ["apple", "banana", "orange"];
var vegetables = ["tomato", "potato", "carrot"];

console.log(fruits.concat(vegetables));
console.log(fruits.concat("fig", 3, true, [1,3,false]));

console.log("" + fruits); // string olarak döndürüyor.
console.log(fruits.toString()); // string olarak döndürüyor.


// ----- sort() -----

const daltones = ['Joe','Jack','William','Avarel']
console.log(daltones.sort());  // alfabetik sıralama yapar.

const num = [40, 100, 1, 5, 25, 10];
console.log(num.sort()); // 1, 10, 100, 25, 40, 5 -- string olarak sıralıyor.

console.log(num.sort((a,b) => a-b)); // 1, 5, 10, 25, 40, 100 -- sıralama yapar.)));

console.log(daltones.reverse()); // daltones dizisini tersine çevirir.
console.log(daltones);  // reverse orjinali değiştirir.


//  ----- push ve pop() -----

var fruits = ["apple", "banana", "orange"];
fruits.push("fig");
console.log(fruits);
fruits.push("fig", "pineapple", "2");
console.log(fruits);


console.log(fruits.pop()); // son elemanı sildi
console.log(fruits.pop()); // tekrar sildi
console.log(fruits.pop()); // birtane daha sildi
console.log(fruits);


// ----- shift() ve unshift() -----

var fruits = ["apple", "banana", "orange" , "mango"];
var deleted = fruits.shift();
console.log(deleted); // sildiği elemanı döndürür.
console.log(fruits);

var unshift = fruits.unshift("fig", "pears", 2, [1,2,3,]);
console.log(unshift);  // 7
console.log(fruits); 


// ----- splice() -----

var names = ["Joe", "Jack", "William"];
var deleted = names.splice(2, 2, "Mark", "James");
console.log({deleted});
console.log(names);


// ----- slice() -----

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var spring = months.slice(2, 5);
console.log(spring);
console.log(months);


// ----- indexOf() -----

var colors = ["red", "yellow", "green", "blue", "pink", "green"];
var first = colors.indexOf("green", 3);
console.log(first);

var last = colors.lastIndexOf("blue", 6);
console.log(last);

