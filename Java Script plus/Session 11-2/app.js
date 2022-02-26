// --- Örnek 1 ---
/*
const person = {
    firstName: 'Barry',
    lastName: "Mitchell",
    birthYear: 1977,
    skills: ["JS", "AWS", "Docker", "Python"],
    employed: true,
}

console.log(person);
console.log(person.firstName);
console.log(person["birthYear"]);

console.log(person.midName); // undefined
console.log(person["2022"]); // undefined

let year = 2022;
console.log(person[year]); // undefined
console.log(person.year); // undefined

let tag = "Year";
console.log(person["birth" + tag]); // undefined

person.birthYear = 1979;
person.midName = "Adam";
person.firstname = "barry";
delete person.firstname;  

const comments = [
    {username: "Mark", comment: "very good", likes: 10},
    {username: "john", comment: "not good", likes: 2},
]

for (const key of Object.keys(person)) {
    console.log(key);
}

for (const value of Object.values(person)){
    console.log(value);
}

for (const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`);
}
*/

// --- Örnek 2 ---

const person = {
    firstName: 'Barry',
    lastName: "Mitchell",
    birthYear: 1977,
    skills: ["JS", "AWS", "Docker", "Python"],
    employed: true,
    // calcAgeBad: function(bYear){
    //     return 2022 - bYear;
    // }   kötü bir yöntem
    calcAge() {
        return 2022 - this.birthYear;
    }
};

// console.log(person.calcAgeBad(1980));
console.log(person.calcAge());


