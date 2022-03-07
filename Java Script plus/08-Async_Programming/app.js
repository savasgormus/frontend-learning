// let id = setTimeout(() => {
//     console.log("hello world");
// }, 4000);
// console.log(id);

// clearTimeout(id); // gelen id'yi iptal et - çalıştırma
// console.log("continue");

// let id2 = setTimeout(() => {
//     console.log("hello world 2");
// }, 4000);
// console.log(id2);




// ---- Örnek 2 ----

const slowTask = () => {
    let i = 0;
    let result = {firstName : "John", lastName : "Doe"};
    do {
        i++;
    } while (i < 1000000000);
    return result;
}

function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}; // bekleme için bir fonksiyon yazdık

/*
console.log(">> ...1");
wait(1000); // 1 saniye bekle
// sıralı kodu bloke ettik.
console.log(">> ...2");
setTimeout(() => {
    let res = slowTask();  // bu fonksiyon başlasın ama arka plana devredelim. böylece sonucu geldiğinde yazdırsın.
    console.log(res);
}, 1000);
console.log(">> ...3"); // yazdırmaya devam edecek
console.log(">> ...4"); // yazdırmaya devam edecek
// slowtask sonucu gelecek.
// çünkü setTimeout ile arka plana attık ve sonraki satırları yazdırdık.
// yani boşa düştüğü anda verdiğimiz süre kadar geçecek örneğin 1000ms
// eğer 0 vermiş olsaydık işimiz bittiği anda ne zaman arada boşluk bulursan o zaman slowtask işini yap ve icra et.
*/
// console.time("slowtask");
// slowTask();
// console.timeEnd("slowtask");

// ---------------------------------------------------------------------------------------------------------------------
// *** synchronous Example;
// ---------------------------------------------------------------------------------------------------------------------
// console.time("time elapsed");  // bir zaman ölçümü başlattık
// console.timeLog("time elapsed");  // geçen süreyi yazdırdık
// console.log("hello");
// wait(1500);
// console.timeLog("time elapsed");
// console.log("world");
// console.timeEnd("time elapsed");
// sıralı bir şekilde yukarıdan aşağı doğru çalışır.

// ---------------------------------------------------------------------------------------------------------------------
// *** timeout Example;
// ---------------------------------------------------------------------------------------------------------------------
// console.time("time elapsed");  // bir zaman ölçümü başlattık
// // wait(2000);
// console.timeLog("time elapsed");  // geçen süreyi yazdırdık
// setTimeout(() => {
//     console.warn("this message is printed after 2seconds");
//     wait(2000);
//     console.timeEnd("time elapsed");
//     }, 2000);
// setTimeout ile 2 saniye bekleme yaptık.

// ---------------------------------------------------------------------------------------------------------------------
// *** örnek
// ---------------------------------------------------------------------------------------------------------------------

// console.time('»» setTimeout example');
// console.timeLog('»» setTimeout example');
// setTimeout(() => {
//     console.error('this is the first message');
//     console.timeEnd('»» setTimeout example');
// }, 4000);
// setTimeout(() => {
//     console.warn('this is the second message');
//     console.timeLog('»» setTimeout example');
// }, 3000);
// setTimeout(() => {
//     console.warn('this is the third message');
//     console.timeLog('»» setTimeout example');
// }, 1000);
// önce 3 sonra 2 sonra 1'i yazdırdı.

// console.time('»» setTimeout example');
// console.timeLog('»» setTimeout example');
// setTimeout(() => {
//     console.warn('this is the third message');
//     console.timeLog('»» setTimeout example');
// }, 3000);
// setTimeout(() => {
//     console.error('this is the first message');
//     console.timeLog('»» setTimeout example');
// }, 1000);
// setTimeout(() => {
//     console.warn('this is the second message');
//     console.timeLog('»» setTimeout example');
// }, 2000);

//! callback hell
// istenmeyen durumdur

// setTimeout(() => {
//   console.log('john:Hi');
//   setTimeout(() => {
//     console.warn('Sarah: Hello');
//     setTimeout(() => {
//       console.log('John: How Are you?');
//       setTimeout(() => {
//         console.warn('Sarah: Fine and you?');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.time('»» callback hell example');
// console.timeLog('»» callback hell example');
// setTimeout(() => {
//   console.warn('this is the first message');
//   setTimeout(() => {
//     console.warn('this is the second message');
//     setTimeout(() => {
//       console.warn('this is the third message');
//       setTimeout(() => {
//         console.warn('this is the fourth message');
//         setTimeout(() => {
//           console.warn('this is the fifth message');
//           console.timeEnd('»» callback hell example');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//----------------------------------------------------------------------------------------------------------------------
//? setInterval Example;
// ---------------------------------------------------------------------------------------------------------------------

// function hello() {
//     console.log("hello world");
// }
// setInterval(hello, 2000);
//! setInterval ile 2 saniye aralıklarla hello fonksiyonu çalıştırılır.

// let count = 0;
// let interval = setInterval(function() {
//     count +=1;
//     if (count === 5) {
//         clearInterval(interval);
//     }
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
// }, 2000);
//! her 2 saniyede bir zamanı gösterecek.

// let count = 10;
// let intervalId = setInterval(function() {
//     if (count === 0) {
//         console.log("time is over")
//         clearInterval(intervalId);
//     } else {
//         console.log(count);
//         count --;
//     }
// }, 1000);
//! 10'dan geriye doğru yazdıran bir fonksiyon oluşturduk.

//? setInterval Example;

// let counter = 0;
// const tick = () => {
//     counter++;
//     console.warn(`${counter}`);
//     if (counter == 5) {
//         clearInterval(intervalId);
//     }
// };
// const intervalId = setInterval(tick, 1000);


// ---------------------------------------------------------------------------------------------------------------------
// todo Promises
// --------------------------------------------------------------------------------------------------------------------- 

