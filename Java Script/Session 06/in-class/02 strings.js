// let str1 = 'hello'; // primitive string
// let str2 = "world"; // primitive string
// let str3 = `${str1} ${str2}`; // primitive string

// console.log(typeof str1, str1);
// console.log(typeof str2, str2);
// console.log(typeof str3, str3);

// let str4 = new String('hello world!');
// console.log(typeof str4, str4); // object


// concat()

// var s1 = 'hello';
// var s2 = 'world';
// var s3 = s1.concat(' ', s2);
// console.log(s3);
// console.log(s3.concat("2022"));


// charAt()

// var a = 'primitive.\nlerin properti veya metodu olmaz.'

// console.log(a);
// console.log(a.charAt()); // ilk indexi getirir. 0 da yazabiliriz.
// console.log(a.charAt(9)); // 9. indexi getirir.
// console.log(a.charAt(10)); // escape karakteri \n
// console.log(a[11]); // charAt ile aynı işlemi yapar.
// console.log(a[a.length - 1]); // son indexi getirir.
// console.log(a.charAt(a.length - 1)); // son indexi getirir.


// includes()

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// var n = str.includes("simply");
// var n1 = str.includes("Simply");
// console.log(n);  // true
// console.log(n1); // false


// indexOf()

// var n = str.indexOf("simply");
// var n1 = str.indexOf("Simply");
// console.log(n);  // 15. index
// console.log(n1); // -1 çünkü yok

// console.log(str.indexOf("m")); // ilk karakter 4. indexte

// console.log(str.lastIndexOf("m")); // son karakter 25. indexte


// replace()


