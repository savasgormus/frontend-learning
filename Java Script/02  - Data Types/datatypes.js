console.log('js is running');

//* var, let, const bir değişkeni deklare etme şekliydi.
//* bir projeye başladığımızda default olarak const ile başlarız. değiştirmemiz gerekiyorsa let ile tanımlarız.

//* JS dinamik bir dil olduğu için bir değişken atadığımızda data tipini otomatik olarak belirler. 
//* örneğin bir tam sayı girdiğimizde bunu integer olarak belirtmemize gerek yok.

// let mynumber; => define 
// let myNumber = 10; => assign

//! OPERATORS
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







