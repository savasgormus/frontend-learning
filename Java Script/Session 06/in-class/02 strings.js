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

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text";

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
console.log(str.replace("Lorem", "Hello"));
console.log(str); // orjinali değişmedi.

var str = str.replace("Lorem", "Hello");
console.log(str); // orjinali değişti.

console.log(str.replace(/e/g, "--")); // /e/g gibi regex kullanılır. "e" gördüğü her yere -- koyduk.

// search()

console.log(str.indexOf("text",30)); // 75. indexte
console.log(str.search("Text")); // -1 çünkü yok
console.log(str.search(/TEXT/i)); // 28. index regex ile case sensitive'i kaldırdık.


// slice()

console.log(str.slice(0,5)); // 0. indexden 5. indexe kadar. "Hello"
console.log(str.slice(6)); // 6. indexden sona kadar.
console.log(str.slice(12,-10)); // 12. indexden -10. indexe kadar.


// split()

console.log(str.split(" ")); // array olarak döndürür.
console.log(str.split());  // stringimiz komple bir array oldu


// substr()

console.log(str.substr(22,10)); // 22. indexden itibaren 10 index al


// substring()

console.log(str.substring(22,33)); // 22. indexden 33. indexe kadar.
console.log(str.substring(33,22)); // 22. indexden 33. indexe kadar. yine aynı şekilde getirdi.