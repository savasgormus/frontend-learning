//------------------------------------------------------------------------------
//! örnek 1
//------------------------------------------------------------------------------

// function hello(){
//     console.log("hello");
// }

// let intervalID = setInterval(hello, 3000);
// console.log("1. mesaj");
// console.log("id:" + intervalID);


// let id = setTimeout(() => {
//     console.log("Hello world");
// },4000);
// console.log(id);
// clearTimeout(id);
// console.log("continue");
// let id2 = setTimeout(() => {
//     console.log("Hello world");
// },1000);
// console.log(id2);

// ------------------------------------------------------------------------------
//! örnek 2
// ------------------------------------------------------------------------------

/*
const slowtTask = () => {
    let i = 0;
    result = {firstName: "john", lastName: "doe"};
    do {
        i++;
    } while (i < 5000000);
    return result;
}

function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

console.log("task 1");
wait(2000)  //! 2 saniye bekle
console.log("task 2");
setTimeout(() => {
    let res = slowtTask();
    console.log(res);
    
}, 0);
console.log("task 3");
console.log("task 4");
*/


// ------------------------------------------------------------------------------
//! örnek 3
// ------------------------------------------------------------------------------
/*
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
}

console.time("time elapsed");
console.log("hello");
wait(1500);
console.timeLog("time elapsed");
console.log("world!");
console.timeEnd("time elapsed");
*/

// ------------------------------------------------------------------------------
//! örnek 4
// ------------------------------------------------------------------------------
/*
function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

console.time(">> time elapsed");
wait(2000);
console.timeLog(">> time elapsed");
for(let i = 0; i < 1000; i++) {
    //console.log(i);
}
setTimeout(() => {
    console.warn("this message is printed after 2 seconds");
    console.timeEnd(">> time elapsed");
}, 2000);
*/

// ------------------------------------------------------------------------------
//! örnek 5
// ------------------------------------------------------------------------------
/*
console.time(">> time elapsed");
console.timeLog(">> time elapsed");
setTimeout(() => {
    console.error("this is the first message");
    console.timeEnd(">> time elapsed");
},4000);
setTimeout(() => {
    console.warn("this is the second message");
    console.timeLog(">> time elapsed");
},3000);
setTimeout(() => {
    console.log("this is the third message");
    console.timeLog(">> time elapsed");
},1000);
*/

console.time(">> time elapsed");
console.timeLog(">> time elapsed");
setTimeout(() => {
    console.error("this is the first message");
    console.timeLog(">> time elapsed");
    setTimeout(() => {
        console.warn("this is the second message");
        console.timeLog(">> time elapsed");
        setTimeout(() => {
            console.log("this is the third message");
            console.timeLog(">> time elapsed");
        },1000);
    },3000);
},4000);




