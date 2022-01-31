    //----- örnek 1 -----
/*
function sum(num1, num2){
    return num1 + num2;
    // return num1 - num2;
}
console.log(typeof sum());
*/

    //----- örnek 2 -----
/*
function sum(num1,num2){
    console.log("hello");
}
console.log(typeof sum());
*/

    //----- örnek 3 -----
/*
const sum = function(num1,num2){
    return num1 + num2;
}

console.log(sum(2,3));
*/

    //----- örnek 4 recursive -----
/*
function pascalNumbers (n){
    console.log(n);
    if (n === 1) return 1;
    return n + pascalNumbers(n-1);
}

console.log(pascalNumbers(5));
*/

    //----- örnek 5 recursive -----
/*
function factorial(n){
    console.log(n);
    if (n === 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));
*/
/*
const fact = function(n){
    console.log(n);
    if (n === 1) return 1;
    return n * fact(n-1);
}

console.log(fact(5));
*/

    //----- örnek 6 arrow function -----
/*
const d = (num1,num2) => num1 + num2;
console.log(d(2,3));

const e = num1 => num1 + 100;
console.log(e(150));

const f = (num1,num2,num3) => num1 + num2 - num3;
console.log(f(2,3,4));
*/

    //----- örnek 7 arrow function -----
/*
const g = (...others) => {
    sum = 0;
    for (let i = 0; i < others.length; i++){
        sum += others[i];
        console.log(sum);
    }
    return sum;
}

console.log(g(2,3,4,5));
*/

