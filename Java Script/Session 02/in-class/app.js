/* 
console.log("Hello World!");

// Assign

var x = 7;
var y = 5;

console.log(x);
console.log({y});
y = x;
console.log({y});
*/

// --------------------------------------------------------------------------------------

/*
var alert = "merhaba"
console.log(alert);
alert("hey")  
// alert artık bir fonksiyon değil bir değişken.
*/

// -------------------------------------------------------------------------------------

/* 
var a = "Global A";
console.log(a);
{
    let a = "Scope A";
    console.log(a);
}
console.log(a);

// ---

var b = "Global B";
console.log(b);
{
    b = "Scope B";  // globali değiştirmiş olduk.
    console.log(b);
}
console.log(b);

// ---

var c = "global C";
console.log(c);
{
    let c = "scope c";
    console.log(c);
    {
        let c = "inner scope c"
        console.log(c);
    }
    console.log(c);
}
console.log(c); 
*/

let c = 3;
console.log(c);
let c = 5;
console.log(c);
// hata verir çünkü c daha önce tanımlandı.
// var kullanmış olsaydık tanımlardı. fakat biz değiştirilmemesini istiyoruz.
// böylece uzun kod bloklarında yanlışlıkla değişiklik yapmanın önüne geçeriz.
// Uncaught SyntaxError: Identifier 'c' has already been declared
