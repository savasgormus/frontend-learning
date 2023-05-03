        //! OPERATORS


    //? Assigment Operators

// let x = 10;
// let y = 2;

// x = y;
// console.log(x); // 2

// x += y; //* x = x + y;
// console.log(x); // 12;

// x -= y; //* x = x - y;
// console.log(x); //* 8

// x *= y; //* x = x * y;
// console.log(x); //* 20

// x /= y; //* x = x /y;
// console.log(x); //* 5

// x %= y; //* x = x % y;
// console.log(x); //* 0

// x **=y; //* x = x ** y;
// console.log(x); //* 100

    //? Aritmetic Operators

// let x = 'hello ';
// let y = 'world';
// let z = 3;

// console.log(x + y);
// console.log(x + z);

// //* postfix increment ve decrement

// let a = 10;
// let b = a++;

// console.log(a); //* 11
// console.log(b); //* 10

//* a'nın değerini aldı b'ye atadı ve a'yı 1 yükseltti. bu durumda sadece a'nın yeni değeri değişti ve b sabit kaldı.

// let c = 10;
// let d = c--;
// console.log(c); //* 9
// console.log(d); //* 10

//* prefix increment ve decrement ise bu işlemin tam tersidir. önce arttırma ya da azaltma işlemi yapar, daha sonra atamayı gerçekleştirir.

// let a1 = 10;
// let b1 = ++a1;
// console.log(a1, b1); //* 11, 11


    //? Comparison Operators

//* karşılaştırma operatörleri bize her zaman true ya da false döndürür.

//* equality 3 == '3'; true number ya da string olması farketmez
//* inequality 3 != '3'; false
//* strict equality 3 === '3'; false çünkü birisi number diğeri string
//* strict inequality 3 !== '3'; true yine number ve string olduğu için eşit değiller. yani true.

// let x = 5;

// console.log(`(x == 8) -> ${x == 8}`);
// console.log(`(x == '5') -> ${x == '5'}`);
// console.log(`(x === '5') -> ${x === '5'}`);
// console.log(`(x !== 8) -> ${x !== 8}`);
// console.log(`(x < 8) -> ${x < 8}`);
// console.log(`(x <= 4) -> ${x <=4}`);
// console.log(`(x > '6') -> ${x > '6'}`);
// console.log(`(x >= '9') -> ${x <= '9'}`);

    //? Logical Operators

//* And &&, verilen tüm değerler 1 ise true döndürür. aksi halde false döndürür. ilk değer 0 ise false döndürür.
//* Or ||, verilen değerlerden sadece birisi 1 ise true döndürür.
//* Not !, verilen değerin tam tersine göre true ya da false döndürür.

console.log(Boolean(null)); //* false
console.log(null == false); //* false
console.log(null == true); //* false
console.log(null == null); //* true
console.log(NaN == NaN); //* false 
let a,b;
console.log(a == b); //* true - ikisi de undefined

//* Nullish Coalescing Operator ?? ile yapılır.
//* ilk değer null ya da undefined ise diğer değeri çıkartır.
//* diğer bütün işlemlerde ilk değer çıkar.

let d; //* undefined
let e = 'Hello World';
console.log(d ?? e);
console.log(e ?? d);

let f = null;
console.log(f ?? d);
console.log(d ?? 0);