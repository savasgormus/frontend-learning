// var str1 = "hello world";
// var str2 = new String("hello world");

// console.log(typeof str1);
// console.log(typeof str2);

// console.log(str1);
// console.log(str2);

    // ----- örnek 1 -----

// console.log(str1.length);

    // ----- örnek 2 -----

// let s1 = "hello";
// let s2 = "world";
// let s3 = s1.concat(s2)
// let s4 = s1.concat("world!2")

// console.log(s3);
// console.log(s4);
// console.log(s1+s2);

// console.log(s1.concat(s2.concat(" ekleme")));

    // ----- örnek 3 -----

// let a = "primitive.\nlerin properti veya metodu olmaz.";
// console.log(a);

// console.log(a.charAt());
// console.log(a.charAt(a.length-1));
// console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));

    // ----- örnek 4 -----

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus."
// let n = str.includes("sit");
// let n1 = str.includes("sith", 10);
// console.log(n); //true
// console.log(n1); //false

    // ----- örnek 5 -----

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus."
// var n = str.indexOf("sit");
// var n1 = str.indexOf("s");
// var n2 = str.indexOf("S");
// console.log(n); //18. indexte başlıyor
// console.log(n1); //8. indexte ilk s karakteri var
// console.log(n2); //-1. çünkü S karakteri bu string içinde yok

    //  ----- örnek 6 -----

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus."

// let n = str.replace("dolor", "rolod");
// let n1 = str.replace("Ipsum", "muspi");
// let n2 = str.replace(/Ipsum/i, "muspi");
// console.log(n);
// console.log(n1);
// console.log(n2);
// console.log(str);

    // ----- örnek 7 -----

// let str = " red, green blue"

// let n = str.search("Blue");
// let n1 = str.search(/Blue/i);

// console.log(n);
// console.log(n1);

    // ----- örnek 8 -----

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatibus."

console.log(str.slice(0, 5));
console.log(str.slice(6));
console.log(str.slice(10,-10));