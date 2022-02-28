const map1 = new Map();

map1.set("a",1);    // a'ya 1 verdik.
map1.set("b",2);    // b'ya 2 verdik.
map1.set("c",3);    // c'ya 3 verdik.
console.log(map1.get("a")); // 1 döndürür.

map1.set("a", 97);  // a'ya 97 verdik.
console.log(map1.get("a")); // 97 döndürür.
console.log(map1.size); // 3 döndürür.

map1.delete("b");   // b'yi siler.
console.log(map1.size); // 2 döndürür.




const numbers = [1,4,9];

numbers.forEach((number, index) => {
    numbers[index] = number * 2;
});
console.log(numbers);   // [2, 8, 18] döndürür.

const result =  numbers.map(function(number){
    return number * 2;
})
console.log(result);   // [2, 8, 18] döndürür.































// const arr = ["nap", "teachers", "cheaters", "pan", "ear","era","hectares"];
// function cleanArr(arr){
//     let map = new Map();
//     for (let value of arr)
//     {
//         let key = value.toLowerCase().split("").sort().join("");
//         map.set(key, value);
//     }
//     return Array.from(map.values());
// }

// console.log(cleanArr(arr));