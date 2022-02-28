// const myArr = Array.from("hello");
// const len = "My Name is".length;
// console.log(myArr);
// console.log(len);

// const firstName = "Barry";
// const arr = firstName.split("");
// console.log(arr);

// const person = {
//     firstName: "Barry",
//     birthYear: 1977,
//     location: {
//         city: "London",
//     },
//     // doğum yılını sabit tutarak yaşı hesaplıyoruz.
//     get age() {
//         return new Date().getFullYear() - this.birthYear;
//     },
//     set age(value) {
//     if (value > 0 && value < 100) {
//         this.birthYear = new Date().getFullYear() - value;
//     }}
// };

// console.log(person.age);

// person.age = 40;
// console.log(person.birthYear);

// -----------------------------------

// const h1 = document.querySelector("h1");
// console.dir(h1);

// -----------------------------------

const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
        mon: {
            open: 8,
            close: 22,
        },
        fri: {
            open: 9,
            close: 21,
        },
        sat: {
            open: 10,
            close: 20,
        },
    },

    // book: function (obj) {
    // console.log(obj)
    reservation(arrival, departure, optionIndex = 0, roomIndex = 0) {
        console.log(
            `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} for ${arrival} to ${departure}`
        );
    },


    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
        console.log(
            `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
        );
    },
};

// // destructuring (yapıdan ayırma)

// console.log(hotel.brand);
// const { brand, options} = hotel;
// // hangi özellikleri alacağımızı belirtiyoruz.
// console.log(brand);
// console.log(options[0]);
// // hotel değişkeninin içindeki brand ve options özelliklerini alıyoruz.

// const {brand: hotelName, rooms} = hotel;
// console.log("hotel name is",hotelName);

// const{mon} = hotel.receptionHours;
// console.log(mon);
// // sadece mon değişkenini alıyoruz. alt nesneden çekebiliriz.

// const{ receptionHours: {mon: monday}} = hotel;
// console.log(monday);
// // ihtiyacımız olanı çektik.

// const { 
//     fri : {open: openingFriday, close: closingFriday}} = hotel.receptionHours;
// // hotelnesnesi içerisinden receptionhours'ı al ve içindeki fri değişkenini al.
// // open'u openingFriday'a, close'u closingFriday'a at.
// // örneğin kırılım noktasını fri' değil receptionHours'dan alalım:
// /*
// const {
//     receptionHours: {
//         fri: {
//             open: openingFriday, close: closingFriday}}} = hotel;
// */
// console.log(openingFriday, closingFriday);

// hotel.reservation("11:00","23:00", 0, 0); // burada parametreleri alıyoruz ama hiç bir bilgimiz yok.
// hotel.book({
//     roomIndex: 0,
//     departure: "23:00",
//     optionIndex: 1,
//     arrival: "11:00",
// })  // daha açıklayıcı bir şekilde yazılabilir. iki kod da aynı işlevi görüyor
// aradaki fark 2.yi obje olarak aldık. yukarıdaki gibi sıraya uymak zorunda olmaksızın değişkenlerle birlikte yazılabilir. reservation ile book arasında sadece {} farkı var.


// -----------------------------------
// array destructuring

const date = [1970, 4, 20];
//traditional way
const Year = date[0];
const Month = date[1];
const Day = date[2];

const [year, month, day] = date;
console.log(day, month, year);

const [year2, , day2] = date;
console.log("year2: ", year2);
console.log("day2: ", day2);



const nestedArray = [1,2,3, [4,5,6],7];
const [first, , third, [, fifth], seventh] = nestedArray;
console.log("fifth: ", fifth);

const note = {
    id: 1,
    title: "My first note",
    date: "2020-01-01",
};

for(let [key,  value] of Object.entries(note)){
    console.log(key, ">>", value);
}
// Object.entries() ile note'ın içindeki key ve value değerlerini alıyoruz.

Object.entries(note).forEach(([key, value]) => {
    console.log(key, ">>", value);
}); // aynı işlemi forEach ile yapıyoruz.


// ----------------------------------
// !default parameters

function greet(user = "user") {
    console.log(`hello ${user}`);
}
greet();
greet("savas");

// ----------------------------------
// spread operator

let newHotel = {...hotel};
newHotel.brand = "Hotel California";

console.log("hotel.brand: ", hotel.brand);
console.log("newHotel.brand: ", newHotel.brand);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,11,  ...arr2, 7,8,9];
console.log(arr3)

const arr4 = arr1;
arr4.push(42);
console.log("arr4 >>", arr4);
console.log("arr1 >>", arr1);
// ikisine de aynı değer atanıyor.

const person = {
    firstName: "Barry",
    lastName: "Allen",
}

const newPerson = {
    ...person,
    firstName: "John",
    city: "New York",
}

console.log("newPerson >>", newPerson);

const { sat, ...weekdays } = hotel.receptionHours;
console.log("sat >>", sat);
console.log("weekdays >>", weekdays);


// ----------------------------------
// rest operator
/*
function sum(...numbers) {
    let total = 0;
    numbers.forEach((i) => {
        total += i;
    });
    return total;
};

console.log(sum(1,2,3, 15, 20));
*/
function sum(...numbers){
    let total = 0;
    numbers.forEach(i => {
    total = !isNaN(i) ?total + i : total;
    });
    return total
}

console.log(sum(1,2,6, "Mesut",7,9));


// ----------------------------------
// nullish coalescing operator

let temperature = 0; //= 4;
let result = temperature != null && temperature != undefined ? temperature: "error";
console.log(result);
// const tempStatus = `Temperature is ${temperature ?? "Error"}`; // kısa yolu

// console.log(`Temperature is ${temperature}`);
// console.log(tempStatus);




