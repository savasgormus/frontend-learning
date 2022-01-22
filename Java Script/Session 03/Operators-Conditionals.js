// camel case >>> myNameIsSavas
// snake case >>> my_name_is_savas
// kebab case >>> "my-name-is-savas"   genelde css'de kullanırız.
// screaming snake case >>> "MY_NAME_IS_SAVAS" js'de çok önemli durumlarda kullanırız. SQL'de de kullanılıyor.


// --- --- --- Operators --- --- ---

// Aritmetic operators

var x = 2;
var y = 5;
var z = 7;
var t = "2";

console.log(x+y);
console.log(x+t);  // number + string = string

console.log(z - t); // number - string = number
console.log(t - y); // string - number = number
console.log(z / t); // number / string = number

var u = t - y;
console.log(typeof u,u);

console.log(5%2); // modulus

var a = 5;
var b = 0;

console.log(a/b);
console.log(typeof Infinity);

var c = 100+50*3;
console.log(c);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// increment - decrement
var a = 10;
console.log(a++); // 10 önce a'nın değerini verdi daha sonra increment yaptı
console.log(a); // 11 burada da a'nın yeni değerini görüyoruz

var b = 5;
console.log(b); // 5
console.log(++b); // 6 önce arttırdı sonra b'nin değerini verdi

var c = 8;
console.log(c--); // yukarıdaki işlemin tam tersi
console.log(c);

var d = c++
console.log({d},{c}); // d = 7, c = 8

console.log(c++ + ++c); // 8 + 10

