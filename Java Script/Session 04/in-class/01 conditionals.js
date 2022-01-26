// ------------------------------------------- Conditionals ------------------------------------------------------------------------------------------------

// let score = prompt("Notunuzu girin: ");
// let score = 47
// let grade = score >=50

// if (grade) console.log(`tebrikler notunuz ${score} geçtiniz`);

// console.log("kod sonu");

// if (grade) {
//     console.log(`tebrikler notunuz ${score} geçtiniz`);
// } else {
//     console.log("üzgünüm kaldınız.");
// }

// let score = 75;

// if (score > 80) {
//     console.log("tebrikler çok başarılı bir öğrencisiniz");
// } else if (score >=50) {
//     console.log(`tebrikler notunuz ${score}. geçtiniz`);
// } else {
//     console.log("üzgünüm kaldınız.");
// }

// ------------------------------------------------ nested if yapısı ------------------------------------------------------------------------------------------------
/*
let score = 81;

if (score >= 50) {
    if (score > 80) { 
        console.log("tebrikler çok başarılı bir öğrencisiniz");
    } else{
        console.log("tebrikler geçtiniz.");
    }
} else {
    console.log("üzgünüm kaldınız.");
}
*/

// ----------------------------------------------- Ternary if ---------------------------------------------------------------------------------------------

/*
let score = 49;

score >= 50 ? console.log("tebrikler") : console.log("kaldınız");
// condition ?(if) if statement : else statement

score >=80 ? console.log("tebrikler") : (score >= 50 ? console.log("başarılı") : console.log("kaldınız"));
// iç içe ternary yapısı
// condition ? (if) if statement : (condition ?(if) if statemment : else statement)
*/

// ------------------------------------------- Switch statement ---------------------------------------------------------------------------------------------
// string equity devrede
let text;
let fruits = "lemon";
// toLowercase()
// console.log(fruits.toLowerCase());

switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good";
        break;
    case "lime":
    case "lemon":
    case "orange":
        text = `im not fan of ${fruits.toLowerCase()}`;
        break;

    case "apple":
        text = "How you like them apples?";
        break;

    default:
        text = "I have never heard of that fruit";
        break;
}

console.log(text);

// pazartesi çarşamba perşembe cumartesi inclass
// salı cuma teamwork
// pazar tatil
// default yanlış gün ismi girildi

// let day = prompt("gün giriniz :");
// let message;

// switch(day.toLowerCase()){
//     case "pazartesi":
//     case "çarşamba":
//     case "perşembe":
//     case "cumartesi":
//         message = "inclass activity";
//         break;
//     case "salı":
//     case "cuma":
//         message = "teamwork activity";
//         break;
//     case "pazar":
//         message = "tatil"
//         break
//     default:
//         message = "yanlış gün ismi verildi"
//         break

// }
// console.log(message);

