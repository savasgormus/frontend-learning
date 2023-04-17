// var today = new Date();
// var hourNow = today.getHours();
// var greetings;

/*
if (hourNow > 18) {
    greetings = "Good Evening!";
} else if (hourNow > 12) {
    greetings = "Good Afternoon";
} else if (hourNow > 0) {
    greetings = "Good Morning";
} else {
    greetings = "Welcome"
}
*/

// console.log(`its ${hourNow}`);
// console.log(greetings);

// let age = prompt('Enter your age', 17);
// alert(`you are ${age} years old!`);

// let confirmLegal = confirm('are you older than 17?');
// alert(confirmLegal);

// let ad = prompt('Adınızı Girin');
// console.log('Adınız: ', ad);

// document.write('<h2>Savaş</h2>')

// let sonuc = confirm('emin misiniz?');
// console.log(sonuc);

// console.log(" \"Ankara\" \n is the capital of Turkey");
// document.write(" \"Ankara\" <br> is the capital of Turkey")

// console.log(`Adınız ${ad}`);

var quantity;
quantity = 3;

console.log(quantity);

let x = 5;
let y = 10;
y = x;
console.log(y, x);

//! Stack - Heap

// let age = 30;
// let oldage = age;
// age = 31;

// console.log(age); //31
// console.log(oldage); //30


const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend); // 27
console.log('Me: ', me); //27
//* me olarak tanımladığımız adres değişmiyor. fakat me içerisine tanımlı adreste içerisinde bulunan verileri değiştirebiliyoruz.
//* friend ve me aynı adrese baktığı için friend.age ile me içerisindeki age:30 verisini değiştirebildik.

{
    let localvar1= "local variable";
    console.log(localvar1);
    var myName= "savaş";
}
// console.log(localvar1); 
//* scope içerisinde tanımladığımız için hata alacağız. çünkü scope dışına çıktığı anda bellekte yer tutmaz.
console.log(myName);
//* var ile scope içerisinde tanımlamamız bişey değiştirmez. bellekte her türlü yer tutacak.

//! const Konusu

const student = {
    firstName: "Can",
    number: "F1234"
}

const otherStudent = student;
console.log(otherStudent);

otherStudent.number = "F999";
//* ikisi de aynı adrese baktığı için number datası ikisinde de değişecek.
console.log(student);

// otherStudent = {
//     firstName: 'Sinan',
//     number: 'F3333'
// }
// console.log(otherStudent); // hata verir
//* burada adresi değiştirmeye çalışıyoruz. JS buna izin vermez, hata alırız.
//* yukarıda adresin içerisinde değişiklik yaptık. bu yüzden bir hata almamıştık.
//* özetle variables dediğimiz kutunun yerini değiştiremeyiz fakat içerisindeki herşeyi değiştirebiliriz.

otherStudent.number1 = 'f3333';
console.log(otherStudent);
//* ikinci bir number eklemiş olduk. yine const ile atadığımız değiştirilemez bir sabite ekleme yaptık.
