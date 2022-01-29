// ------------- Functions -------------
// function sayHi() {
//     console.log("hello") ;
// }

// let userName = "Savaş" ;

// function sayHi(name = "new user") {
//     console.log(`hello ${name}`) ;
// }

// sayHi();
// sayHi(userName);
// sayHi("Savaş");

// function sayHi(){
//     console.log("hello");
// }
// console.log(typeof sayHi());

// function sayHi2(name){
//     return (name + 2);
// }


// console.log(sayHi2("Savaş"));
// sayHi2();
// console.log(typeof sayHi2("savaş"));


// function add100(num1){
//     return num1 + 100;
// }

// console.log(add100(23));

// function addToplama(num1,num2 = 0){    // 2. parametre default olarak 0 atıyor. kullanıcı girmezse 0 atar.
//     return num1 + num2;
// }

// console.log(addToplama(23,45));

// let square = function(a){ return a * a ;}
// console.log(square(5));


// let adder = new Function("a","b","return a + b");
// console.log(adder(2,3));
// console.log(typeof adder);

// let sum = function(a,b){return a + b;}

// let addTwo = function(num1){
//     return sum(num1,2);
// }
// console.log(addTwo(5)); //  num1'e 5 verdik. daha sonra sum fonksiyonunu çağırdık. böylece 5 + 2 = 7 yazdık.

// function sayHello(name){
//     if(name){
//         console.log(`hello ${name}`);
//     } else {
//         console.log("hello");
//     }
// }

// sayHello("savaş");
// sayHello();

// function sayHello(name = "new user"){
//     name && console.log(`hello ${name}`);	// && ile if else yapısını kullanmıyoruz. shortcut
// }

// sayHello("savaş");
// sayHello();


// fonksiyon kendine verilen değeri değiştirmeyecek:

// function square(num1) {
//     num1 *= num1;              // myNum = num1 * num1; şeklinde yapmış olsaydık aşağıdaki myNum değeri 16 olarak kalacektı.
//     return num1;               // return myNum; çünkü fonksiyon bende myNum diye bişey yok diyeceği için bir alttaki variable'ı alacaktı.
// }
// let myNum = 4;
// console.log(square(myNum));
// console.log(myNum);



let student = {};

student.name = "Savaş";

function sayHi3(student){
    console.log(`hello ${student.name} from entry point` )
    student.name = "Zuhal";   // burada çıkışı bozmuş olduk. değeri globalde "Zuhal olarak değiştirdik."
    console.log(`hello ${student.name} inside function` );
    student = {name: "Başar"};
    console.log(`hello ${student.name} inside function` );
};

sayHi3(student);
console.log(`hello ${student.name} outside function` );