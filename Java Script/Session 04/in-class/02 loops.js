// ------------------------------------------------- Loops ----------------------------------

// --------- while statement

/*
let i = 0;
let sum = 0;

while (i < 6) {
    sum += i; // sum = sum + i
    i++;
    console.log({i});
}

console.log(sum);
*/

// ----------do .. while statement

// en az bir kere çalışacak. conditionu önce verecek daha sonra statement.

/*
let i = 10;
let sum = 0
do {
    sum += i;
    i++
} while (i < 6);

console.log({sum},{i});
// önce bir kere çalıştı ve while döngüsüne girdi.
// daha sonra şarta baktı ve çalışmayı durdurdu.
*/

// let i = +prompt("bir sayı giriniz: ") // sayıya çevirmek için başına + koyuyoruz.

// // console.log(isNaN(i), {i});

// while(isNaN(i)) {
//     i = +prompt("bir sayı giriniz: ")
// }
// console.log("bir sayı girdiniz");

// let i;

// do {
//     i = +prompt("bir sayı giriniz:" )
// } while (isNaN(i));

// console.log(`girilen değer ${i}`);

// sonsuz döngüye örnek:

// let i = 0;
// while (i < 6) {
//     console.log(i);    
// }



// -------------- for statement

let i = 0;

for (; i < 10;) {
    console.log(i);
    i++;
    
}
console.log({i});


