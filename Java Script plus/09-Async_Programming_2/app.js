function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


//-----------------------------------------------------
//! Promises
//-----------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     const data = "Some result1";
//     const success = true;
//     if(success){   
//         resolve(data); // olumlu sonuç
//     }  
//     reject(new Error("Some error occured")); // olumsuz sonuç
    
// });

// const promise = new Promise((resolve, reject) => {
//     //database'den bilgi çektiğimizi düşünelim
//     wait(2000);
//     const userData = {
//         firstName: "Barry",
//         birthYear: "1977",
//     }
//     let successful = Math.floor(Math.random() * 5); // yüzde 20 şans
//     if(successful){resolve(userData)}; // resolve ile başarılı sonuç
//     reject(new Error("Some error occured"));  // else şeklinde de yazabiliriz fakat gerek yok. çünkü ya success diyecek ya da reject edecek.
// });

//console.log(promise);
// promise.then(
//     result => {console.log(result)}, 
//     error => {console.log(error)
// });


// promise
//     .then(result => {
//         console.log(result)
//         return "selam"
//     })
//     .then((r) => {
//         console.log(r)
//     })
//     .catch(error => {
//         console.log(error)
//     });

//-----------------------------------------------------
//! Örnek
//-----------------------------------------------------

const cayDemle = () => {
    // suyuKaynat(); -> cayEkle(); -> bekle(); -> afiyetOlsun();
    suyuKaynat()
        .then((durum1)=>{
            console.log(durum1);
            return cayEkle();
        })
        .then((durum2)=>{
            console.log(durum2);
            bekle(1500);
            return afiyetOlsun();
        })
        .then((durum3) => {
            console.log(durum3);
        })
        .catch(error => {
            console.error(error);
        })
};

const suyuKaynat =  () => {
    return new Promise((resolve, reject) => {
        const nasip = Math.floor(Math.random() * 10);
        if (nasip) {
            bekle(2000);
            resolve("Su kaynadı.");
        }
        reject(new Error("Kettle arızalı."))
    });
};

const cayEkle =  () => {
    return new Promise((resolve,reject) => {
        const cayNasibi = Math.floor(Math.random() * 5);
        if (cayNasibi) {
            bekle(500);
            resolve("Cay eklendi.")
        } reject(new Error("Evde çay yok!"))
})};


const bekle =  (ms) => {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
};

const afiyetOlsun =  () => {
    return "çay hazır afiyet olsun";
};

// cayDemle();