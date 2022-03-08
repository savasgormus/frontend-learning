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
//todo Örnek
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

//-----------------------------------------------------
//! Async Await
//-----------------------------------------------------

// const prom = new Promise((resolve, reject) => {
//     wait(2000);
//     resolve("Promise çalıştı");
// });

// const func1 = async () => {
//     wait(2000);
//     return "async function çalıştı";
// };

// async function func2() {
//     wait(2000);
//     return "blabla";
// };

// console.log("prom instanceof promise: >>", prom instanceof Promise);
// console.log("func1 instanceof promise: >>", func1() instanceof Promise);
// console.log("func2 instanceof promise: >>", func2() instanceof Promise);

// async function func3() {
//     wait(2000);
//     // throw new Error("Hata oluştu");
//     await Promise.reject(new Error("Hata oluştu"));
// };

// console.log("func3 instanceof promise: >>", func3() instanceof Promise);

const cayDemle2 = async () => {
    try {
        const durum1 = await suyuKaynat();
        console.log(durum1);
        const durum2 = await cayEkle();
        console.log(durum2);
        await bekle(1500);
        const durum3 = await afiyetOlsun();
        console.log(durum3);
    } catch (error) {
        console.error(error);
    }
};

// cayDemle2();


//-----------------------------------------------------
//! Fetch
//-----------------------------------------------------

//* https://jsonplaceholder.typicode.com/users/8
const url = "https://jsonplaceholder.typicode.com/users/8";

// fetch(url)
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });


function usingFetch(url) {
    fetch(url)
        .then((res) => {
            console.log(res);
            if(!res.ok) {
                throw new Error("Hata oluştu");
            }
            res.json()})
        .then((data) => {
            // console.log("user:", data);
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
}

//usingFetch(url);

async function usingAsyncFetch(url){
    try {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error("Hata oluştu");
        }
        const userData = await res.json();
        // console.log("User Data :",userData);
        for (const [key, value]  of Object.entries(userData)) {
            console.log(key,"=>", value);
        }
    } catch (error) {
        console.error(error);
    }
}

// usingAsyncFetch(url);



async function usingAsyncFetch2(url){
    try {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error("Hata oluştu");
        }
        return await res.json();
        
    } catch (error) {
        console.error(error);
    }
}
// usingAsyncFetch2(url).then((data) => {
//     console.log(data);
// });

const f1 = async () => {
    const data = await usingAsyncFetch2(url);
    console.log(data);
};
f1();

(async () => {
    const url2 = "https://jsonplaceholder.typicode.com/todos";
    const todoList = await usingAsyncFetch2(url2);
    // console.log(todoList);
    todoList.forEach(todoItem => {
        console.log(`${todoItem.id} \n ${todoItem.title} \n ${todoItem.completed}`);
    })
})();