let word = prompt("Bir Kelime Giriniz");
function reverseWord(word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) newWord += word[i];
  console.log(newWord);
}
reverseWord(word);
​
//
​
let ques = "Oğuzhan Uçar";
let oguzhan = ques.split("").reverse().join("");
console.log(oguzhan);
