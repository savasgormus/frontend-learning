//------------------------------------------------------------------------------
//! örnek 1
//------------------------------------------------------------------------------

// function hello(){
//     console.log("hello");
// }

// let intervalID = setInterval(hello, 3000);
// console.log("1. mesaj");
// console.log("id:" + intervalID);


let id = setTimeout(() => {
    console.log("Hello world");
},4000);
console.log(id);
clearTimeout(id);
console.log("continue");
let id2 = setTimeout(() => {
    console.log("Hello world");
},1000);
console.log(id2);