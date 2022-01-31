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


function sum(a,b, ...others){
    console.log(arguments);
    console.log(others);
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,1000));