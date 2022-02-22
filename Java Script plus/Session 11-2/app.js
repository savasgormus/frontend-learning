// --- Örnek 1 ---

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