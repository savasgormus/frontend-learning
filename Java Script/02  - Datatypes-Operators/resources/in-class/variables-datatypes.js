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
/*
let c = 3;
console.log(c);
let c = 5;
console.log(c);
*/
// hata verir çünkü c daha önce tanımlandı.
// var kullanmış olsaydık tanımlardı. fakat biz değiştirilmemesini istiyoruz.
// böylece uzun kod bloklarında yanlışlıkla değişiklik yapmanın önüne geçeriz.
// Uncaught SyntaxError: Identifier 'c' has already been declared
// var ile atadığımız değişkenler, fonksiyonlar vs window'da yer kaplar. stack'de yer oluşturuyor.
// let ile tanımlarsak bunun önüne geçiyoruz. böylece hafızadan tasarruf ediyoruz.

/*
const h = "constant variable"
console.log(h);
const h = "2"; // daha önce deklare edildiği için hata verecek
h = "2"; // yine aynı hatayı verecek
// const'u değiştirilmesini istemediğimiz değerler için veriyoruz.
// örnek web sitesine giriş hakkı
*/

// -------------- Data Types ------------------
// ---Numbers

/*
var f;
console.log(typeof f);  //undefined

f = 5;
console.log(typeof f);  //number

f = "hello world";
console.log(typeof f);  //string

console.log(typeof 5);  //number
console.log(typeof 5.45);  //number
console.log(typeof -2);  //number
console.log(typeof 0);  //number
console.log(typeof (0/1));  //number
console.log(typeof NaN);  //number
console.log(typeof (typeof 5));  //string
console.log(1/0);  // infinity
console.log(typeof infinity);  //undefined
*/

// ---Strings

/*
var merhaba = "Merhaba"
var selam = 'Sana""""" da s"e"l"a"m""    mark'
console.log(merhaba);
console.log(selam);

var instructer = 'mark'
var mesaj = `merhaba ${instructer}`
console.log(mesaj);

var d = `Merhaba " ' '' "  \` Dünya`
console.log(d);

console.log(`${instructer}`);
console.log(`${3+2}`);
*/

// ---Booleans

/*
console.log(Boolean(""));  // false
console.log(Boolean(3<5)); // true
console.log(Boolean(3>5)); // false
console.log(Boolean(3==5));  // false
console.log(Boolean(0));  // false
console.log(Boolean("0")); // true

var s;
console.log(Boolean(s));  // false (undefined)
console.log(typeof s);

console.log(Boolean(null)); // false
console.log(typeof null);
console.log(null == false);  // false
console.log(null == true);  // false
console.log(null == undefined);  // true
console.log(null === undefined);  // false

console.log(2 == "2");  // true
console.log(2 === "2");  // false
console.log(2 + "2");  // 4 sonucunu verir
*/

// ---

/*
console.log(Number.MAX_SAFE_INTEGER);

var x = 0.1 + 0.2;
console.log(x);

console.log(x.toFixed(5));  // stringe çevirdik
console.log(+x.toFixed(5)); // number

console.log(15+25);   // 40 - decimal
console.log(015+025); // 34 - octal sisteme(7li) göre toplama yaptı  015>> 5 + 8 + 0 = 13 --- 025>> 5 + (8*2) = 21
console.log(018+027); // 41 - octalden çıktı ve decimal toplamı yaptı
console.log(Number(018));

var a = 2;
var b = a;
console.log({a},{b});

var a = 3;
console.log({a},{b});  // b değişmedi
*/