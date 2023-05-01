console.log('js is running');

//* var, let, const bir değişkeni deklare etme şekliydi.
//* bir projeye başladığımızda default olarak const ile başlarız. değiştirmemiz gerekiyorsa let ile tanımlarız.

//* JS dinamik bir dil olduğu için bir değişken atadığımızda data tipini otomatik olarak belirler. 
//* örneğin bir tam sayı girdiğimizde bunu integer olarak belirtmemize gerek yok.

// let mynumber; => define 
// let myNumber = 10; => assign

//*typeof operatörü ile datanın tipini görebiliriz.

// console.log(`1: ${typeof 0}`);

// let e= prompt('bir şey yazınız');
// console.log(typeof e);
//* prompt ile girdiğimiz değerin türünü gördük.
//* kullanıcıdan aldığımız veri her zaman stringtir.


//? UNDEFINED
//* bir değer ataması yapılmamış veri tipidir. 

// let age;
// console.log(age); //* output: "undefined"
// console.log(userName); //* userName is not defined. hatadır.
//* birisi undefined bir data type. diğeri ise hiç tanımlanmamış yani bir hata.

// console.log(a); //* hata alacağız
// var a = 3; //* a değeri daha sonradan tanımlandığı için undefined değeri verecek bize.

// console.log(b);  
// let b = 1; //* let ile tanımladığımız için bir önceki durumdaki gibi undefined değeri değil direkt hata alırız.

//* var ile tanımladığımız değişkenler hoist olur ve en başta yüklenir, hazırda bekler. let ve const'da bu yoktur.



//? NULL
//* boş değer. primitive bir data tipidir ama typeof operatörü ile baktığımızda object verir.
//* garbage collector mekanizması kullanılmayan memory'i kullanmak için null'ı kullanır.

// let f = null;
// console.log(typeof f);



//? NUMBER

// let g = 3.14;
// let h = 1_000_000; //*underscorelar okunabilirliği artsın diye koyduk. sayıda bir değişiklik yaratmaz.
// console.log(typeof g, g);
// console.log(typeof h, h);

//* maksimum 15 basamağa kadar JS destekler. daha sonrası için garanti vermez yuvarlayabilir.
// let i = 999_999_999_999_999;
// let j = 999_999_999_999_999_333;
// console.log(i, j);

// 01.07

// let k = +prompt('bir sayı giriniz:');
// console.log(typeof k, k);
// console.log(isNaN(k));
//* bir nan'ı tespit etmek için isNaN fonksiyonunu kullanıyoruz.
//* bunu örneklendirmek için kullanıcı sayı girene kadar devam ettirecek bir fonksiyon yazalım:

// let x;

// do{
//     x = prompt('bir sayı giriniz: ')
// } while (isNaN(x));
// console.log(x);
//* böylece kullanıcı sayı girene kadar prompt ekranı gelmeye devam edecek.

// console.log(15+25);
 //*decimal sayı sistemine(10luk sayı sistemi) göre 40 alacağız.
// console.log(015+025);
 //*octal sayı sistemine göre(8lik sayı sistemi) hesapladığı için 34 alacağız.

// let l = 0.1 + 0.2;
// console.log(l);
//* 0.30000000000000004
// console.log(+l.toFixed(2));
//* 0.3 toFixed ile noktadan sonra kaç basamak alacağımızı belirttik. fakat stringe dönüştü. başına + koyarak number'a çevirdik.


//? STRINGS

// let m = 'Hello world';
// let n = "Hello world";

// console.log(typeof m);
// console.log(typeof n);

// let p = `hello world ${3+2}`;
//* template literal sayesinde içerisinde bir işlem yapabiliriz ya dakod çalıştırabiliriz.
// console.log(p);

// let userName = 'Savaş';
// let greet = `Hello ${userName}`
// console.log(greet);

//? BOOLEANS
//* true ve false. değeri olan herşey true döndürür.
//* 0 , null, undefined veya boş stringler false döndürür

//? OBJECTS
//* JS'de herşey objedir. Özellikleri ve türü olan bağımsız yapılardır. referansları stack'de değerleri heap'de tutulur.
//* primitivelerin propertyleri olmaz(.lenght gibi). fakat bir stringin .lenght ile uzunluğunu ölçmek istediğimizde
//* js arka planda bunu objeye çevirir ve bize uzunluğunu verir.

// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1965,
//     color: 'Black'
// };

// console.log(myCar);

// myCar.color = 'Red';
//* color değerini değiştirdik.
// myCar.sunRoof = true
//* sunroof diye bir özellik ekledik.
// console.log(myCar);

// myCar.age = function(current) {
//     console.log(current - this.year);
// }
//* objeye bir metod ekledik.
// console.log(myCar);
// myCar.age(2022);
//* eklediğimiz metod ile aracın yaşını hesapladık.

// delete myCar.sunRoof
//* sunRoof özelliğini sildik.
// console.log(myCar);


