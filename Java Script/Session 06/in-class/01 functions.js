// let student = "Mustafa";

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }

// sayHi(student);




// let students = ["John", "Jane", "Joe"];

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }


// for(let i = 0; i < students.length; i++){
//     sayHi(students[i]);
// }

// sayHi(students);

// --- bu iterasyonu fonksiyonun içine yazacağız

// function sayHi2(student){
//     for(let i = 0; i < student.length; i++){
//         console.log(`welcome ${student[i]}`);
//     }
// }

// sayHi2(students)



// function sum() {
//     let sum = 0;
//     console.log(arguments);
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sum(1));
// console.log(sum(1,2,3,53,643));


// function sum(a, ...others){
//     console.log(arguments);
//     console.log(others);
//     let sum = 0;
//     for(let i = 0; i < others.length; i++){
//         sum += others[i];
//     }
//     return sum * a;
// }

// console.log(sum(5,2,3,4,5,6));

// const bill = function(tax,...list) {
//     console.log(list);
//     let total = 0;
//     for(let i = 0; i < list.length; i++){
//         total += list[i] + list[i] * tax;
//     }
//     return total;
// }

// console.log(bill(0.18, 10, 15, 20));

// function bolme(num1, num2){
//     if(num2 == 0){
//         return "cannot divide by 0";
//     }else{
//         return num1 / num2;
//     }
// }

// console.log(bolme(12,0));

// function bolme2(num1,num2){
//     if(num2 === 0) return "cannot divide by 0";
//     return num1 / num2;
// }
// console.log(bolme2(12,0));




// ternary
// function div2(num1, num2){
//     return num2 ?  num1 / num2 :  "cannot divide by 0"
// }
// console.log(div2(12,0));


// function pascalNumbers1(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(pascalNumbers1(5));

// function pascalNumbers2(n){
//     return (n*(n+1))/2;
// }
// console.log(pascalNumbers2(100));

// function pascalNumbers3 (n){
//     if(n===1) return 1;
//     return n + pascalNumbers3(n-1);
// }
// console.log(pascalNumbers3(50));



//              arrow function

// geleneksel fonskiyon
function add100(a){
    return a + 100;
}

// function expression (isimsiz fonksiyon)
let toplam = function(a){
    return a + 100;
}

// arrow function

// let ahmet = (a) => {
//     return a + 100;
// }
// console.log(ahmet(10));

// let mehmet = a => a + 100;
// console.log(mehmet(20));

// let toplam2 = a => a + 100;
// console.log(toplam2(30));

// let user = "murat";

// let sayHi = () => console.log(`hello ${user}`);
// sayHi();

// let toplam3 = (num1,num2) => num1 + num2;
// console.log(toplam3(10,20));
// console.log(typeof toplam3());



let nums = 5;
let iife = (function(num){
    return num*(num+1)/2;
}) (nums);

console.log(iife);