örnek 11:

<!-- 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fLen = fruits.length;

var text = "<ul>";
for (var i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo11").innerHTML = text;   -->
 <!-- <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul> -->

 önce fruits isimli bir array oluşturduk. daha sonra bu arrayin uzunluğunu fLen isimli bir değişkene
 atadık.

bir text değişkeni atadık ve bu değişkenin içine "ul" etiketini koyduk.

for döngüsü içerisine alıyoruz. (i'yi 0'a atadık ve i'nin değeri fLen'in değerinden büyük olana kadar i'yi bir arttır --- var i = 0; i < fLen; i++)

text değişkeninin içine "li" etiketi koy ve içindeki fruits arrayindeki i. elemanını yaz daha sonra "/li" ile etiketi kapat.

for döngüsü bittikten sonra text'e "/ul" etiketi koy.

örnek 12:
<!-- 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>"
}

document.getElementById("demo12").innerHTML = text; -->

yukarıdaki gibi önce arrayimizi ve text değişkenini oluşturduk. forEach metodu ile arrayimizi myFunction ismini verdiğimiz bir fonksiyona soktuk. bir alt satırda da text'e += ile "/ul" etiketi koyduk.
forEach ile for döngüsünü uzun uzun yazmadan yukarıdaki işlemin aynısını yapabiliriz.