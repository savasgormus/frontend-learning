        // --- örnek 1 ---

/*
let score = 50;
// let grade = score >50
console.log(score );
if (score >= 81) {
    console.log(`tebrikler notunuz ${score}`);
}else if (score >=50){
    console.log(`tebrikler notunuz ${score}`);
}
else{
    console.log(`üzgünüm notunuz ${score}, sınavdan kaldınız`);
}
console.log("ders bitti");
*/

        // --- ternary if else ---
        // --- örnek 2 ---

/*
let score = 50;
score >= 50 ? console.log(`tebrikler notunuz ${score}.`) : 
console.log(`üzgünüm notunuz ${score}`);
*/ 

        // --- örnek 3 ---

/*
let username;
username ? console.log(`merhaba ${username}`) : console.log(`please login`);
*/

        //--- örnek 4 ---

/*
let score = 80;
score >= 80 ? console.log(`tebrikler notunuz ${score}`) : 
(score >=50 ? console.log(`sınavdan geçtiniz ${score}`) :
console.log(`üzgünüm kaldınız. ${score}`));
*/

        // --- örnek 5 ---

let username = "sait";
username && console.log(`merhaba ${username}`);