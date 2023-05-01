// ---  --- JS Variables --- ---

var myNumber = 3;
document.write(myNumber)

var x=5;
var x=7;
y=x;
console.log(y);

// --- --- ---

var a = 10;
{
    let b = 3;
}

console.log("a = " + a);
// console.log("b = " + b); => generates error 

const xx = 5;
// xx = 7; => generates error


let firstName = "John", lastName = "clarusway", age = 40;
console.log(firstName+lastName);

var a;

a = 2;
console.log(a);


// --- --- JS Data Types --- ---

console.log("1. " + typeof 0);
console.log("2. " + typeof (3,14));
console.log("3. " + typeof "hello");
console.log("4. " + typeof (7+8));
console.log("5. " + typeof "Oliver");
console.log("6. " + typeof "");
console.log("7. " + typeof true);
console.log("8. "+ typeof (3>=2));  // true
var aaa;
console.log("9. " + typeof aaa);  //undefined

// --- Numbers

var x = 7;  //number
var y = 33.33;  //number
//---
var x = 999999999999999;     // output 999999999999999
var y = 9999999999999999;    // output 10000000000000000
console.log(x);
console.log(y);


var x = 0.2 + 0.1;
console.log(x);
// output 0.30000000000000004

var y = (0.2*10 + 0.1*10) / 10;
console.log(y);
// output 0.3

var a = 111e3;
console.log(typeof a);

// --- BigInt

var x = 2n ** 53n;
console.log(x);
// output 9007199254740992n
var y = x +1n;
console.log(y);
// output 9007199254740993n