const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------

let grades = [30, 50, 77, 38, 44, 80];

// grades = grades.map((grade) => {
//     if(grade < 50){     
//         return grade + (grade * 0.2);
//     } else {
//         return grade + (grade * 0.1);
//     }
//     //return grade > 50 ? grade + (grade * 0.1) : grade + (grade * 0.2);
// })
// console.log(grades);

// modified
const gradesInfo = grades = grades.map((grade, index) => {
    const newGrade = (grade > 50 ? grade * 1.11 : grade * 1.2).toFixed(2);
    return `${index + 1}. Student's grade is ${newGrade}`;

});
console.log(gradesInfo);

//* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

const words = ["mum", "kek", "gel", "ısı", "iyi"];

// const checkPalindrome = words.map((word) => [...word].reverse().join("") === word);
// console.log(checkPalindrome);  // true, true , false , true, true

// alternative

// const checkPalindrome = words.map((word) => {
//     const reverse = word.split("").reverse().join("");
//     if (word == reverse){
//         return word;
//     }
// });
// console.log(checkPalindrome); // palindrom olmayan sözcük undefined olarak döner. biz bunu istemiyoruz.

// -------------------------------------------------------
//                          Filter() 
// -------------------------------------------------------

// const checkPalindrome = words.filter((word) => [...word].reverse().join("") === word);
// console.log(checkPalindrome);
// belirttiğimiz callback function'a göre koşulları sağlayan elemanları return ediyor.
// mum, kek, ısı, iyi. yukarıda map örneğindeki gibi true/false göndermez.

//* toUpperCase
const checkPalindrome = words.filter((word) => [...word].reverse().join("")
    === word).map((word) => word.toUpperCase()).forEach((word) => console.log(word));
// filter seçti ve map'e gönderdi. map'e gönderdiğimizleri de uppercase ile büyük harfe çevirdik.
// daha sonra foreach ile tek tek console'a yazdırdık.
// foreach ile kullanmak istiyorsak bir değişkene atamamıza gerek yok. doğal olarak checkPalindrome'u kaldırabiliriz.
// console.log(checkPalindrome);


// -------------------------------------------------------
//                      Reduce()
// -------------------------------------------------------

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------
const salaries = [10000, 15000, 32000, 43000, 20000];

const avgSalaries = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;
console.log(avgSalaries); // ortalamasını aldık.

// filter ile kullanacağız.
const greaterThan20000 = salaries.filter((salary) => salary > 20000).reduce((x, y) => x + y, 0);
console.log(greaterThan20000);


// -------------------------------------------------------
//               Nested Array Iteration (Json)
// -------------------------------------------------------

const personels = [
    {
        id: 1,
        name: "Ali",
        surname: "Yılmaz",
        job: "developer",
        age: 30,
        salary: 5000,
    },
    {
        id: 2,
        name: "Ayşe",
        surname: "Yılmaz",
        job: "tester",
        age: 35,
        salary: 3000,
    },
    {
        id: 3,
        name: "Mehmet",
        surname: "Öztürk",
        job: "team lead",
        age: 40,
        salary: 7000,
    },
    {
        id: 4,
        name: "Fatma",
        surname: "Ayaz",
        job: "developer",
        age: 26,
        salary: 4500,
    },

    {
        id: 5,
        name: "Can",
        surname: "Deniz",
        job: "tester",
        age: 24,
        salary: 3500,
    },
];

console.log(personels);

// sadece job'ları yazdıralım:
personels.forEach((personel) => console.log(personel.job));
//yada
console.log(personels.map((personel) => personel.job));

// her bir age'i 1 arttır ve yeni bir array'e ata:
// değiştir - döndür yani map kullanacağız
const personalAge = personels.map((personal) => personal.age + 1);
console.log(personalAge); // array aldık çünkü map default olarak array döndürür.

// yeni bir obje oluşturup isim ve soyisimi uppercase yap, age'i 5 arttır:
const newPersonels =  personels.map((personel) => {
    // return personel.name.toUpperCase() + " " + personel.surname.toUpperCase() + " " + (personel.age + 5);
    return {
        name: personel.name.toUpperCase() + " " + personel.surname.toUpperCase(),
        age: personel.age + 5
    }
});

console.log(newPersonels);
