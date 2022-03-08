// ----------------------------------------------------------------------------
//! Promises
//-----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
//todo Örnek 1
// -----------------------------------------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//     resolve("task completed");
//     reject(new Error("task failed"));
// });

// myPromise
// .then(result => console.log(result))
// .catch(err => console.log(err));


// ----------------------------------------------------------------------------
//todo Örnek 2
// -----------------------------------------------------------------------------

// const myPromise2 = new Promise((resolve, reject) => {
//     console.log("myPromise2 started");

//     let condition = !Math.floor(Math.random() * 2);
//     if (condition) {
//         resolve("success");
//     } else {
//         reject(new Error("fail"));
//     }
// });

// myPromise2
// .then(result => console.log(result))
// .catch(err => console.log(err));


// ----------------------------------------------------------------------------
//todo Örnek 3
// -----------------------------------------------------------------------------

//* 1 suyun kaynaması -> kettle -> promise :çalışıyor / arızalı
//* 2 çay var mı -> promise: çay yok / çay var


// function cayDemle() {
//     suyuKaynat()
//         .then((status1) => {
//         console.log(status1);
//         return demEkle();
//     })
//     .then((status2) => {
//         console.log(status2);
//         wait(1000);
//         return "Çay hazır.";
//     })
//     .then((status3) => {
//         console.log(status3);
//     })
//     .catch(new Error("error"));
// }


const wait =  (ms) => {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
};


function suyuKaynat() {
    return new Promise((resolve, reject) => {
        let suKaynadı = Math.floor(Math.random() * 2);
        if(suKaynadı) {
            wait(2000);
            resolve("Su kaynadı.");
        } else {
            reject(new Error("Kettle arızalı."));
        }
    })
}

function demEkle() {
    return new Promise((resolve, reject) => {
        let çayVarMı = Math.floor(Math.random() * 5);
        if(çayVarMı) {
            wait(500);
            resolve("Çay eklendi.");
        } else {
            reject(new Error("Evde çay yok."));
        }
    })
}

// cayDemle()



// ----------------------------------------------------------------------------
//! Async / Await
//-----------------------------------------------------------------------------
//todo Örnek 4
async function cayDemle2() {
    try {
        const status1 = await suyuKaynat();
        console.log(status1);
        const status2 = await demEkle();
        console.log(status2);
        const status3 = await Promise.resolve("Çay hazır.");
        console.log(status3);
    } catch (error) {
        console.log(error);
    }
} 

cayDemle2();