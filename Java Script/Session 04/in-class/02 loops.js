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

// let i = 0;

// for (; i < 10;) {
//     console.log(i);
//     i++;
    
// }
// console.log({i});

// let str = "clarusway"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// --- continue statement

// for (let i = 0; i <= 100; i++){
//     if (i % 5 == 0) {
//         continue;
//     }
//     console.log(i);
// }



// while(true){
//     let x = prompt(`bir sayı giriniz: \n q ile çıkış yapabilirsiniz`);
//     if (x == "q") {
//         console.log("çıkış yapıldı");
//         break;
//     } else if (isNaN(x)) {
//         continue;
//     } else{
//         console.log(`${x}'in kares = ${x * x}`);
//         //break;
//     }
// }


// ----------- Math.random() metodu

// console.log(Math.random()*6+1); // 1 ile 6 arasında sayı üretir.
// console.log(Math.trunc(Math.random()*6)+1); // kesme işlemi yapar.
// // özet: rastgele bir sayı ürettik ve küsüratını kesiyoruz.

let x,y;
let counter = 0;
let çift = 0

while(true){
    x = Math.trunc(Math.random()*6)+1;
    y = Math.trunc(Math.random()*6)+1;
    if (x == 6 && y == 6) {
        counter++;
        console.log(x,y, "kazandınız");
        break;
    } else if (x == y && x != 6) {
        çift++;
        console.log(x,y,`${çift}. çift zar`);
        if (çift == 3) {
            console.log("3 çift zar kaybettiniz");
            break;
        }
    }
    console.log(x,y);
    counter++;
}

console.log(`${counter} defa tekrarlandı`);	