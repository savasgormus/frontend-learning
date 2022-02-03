arrayler tek bir değişken içerisinde birden fazla veri tutmak için kullanılır. array içerisinde birden fazla ve farklı türlerde data olabilir. (string, number, boolean, object, array, function, undefined, null)

3 şekilde array oluşturabiliriz:
Arrayler object tipindedir. [] işareti ile array oluşturulur.
Array.of() metodu ile de array oluşturulur.
new Array() ile de array oluşturulur. (eski bir yöntem olduğu için çok fazla tercih edilmez.) örneğin new Array(5) 5 elemanlı bir array oluşturur.


array'in elemanlarına ulaşmak için index numarası kullanılır. index numarası 0 dan başlar.

arrayin index numarasını girerek heap bölgesinde bulunan bir elemanın değerini değiştirebiliriz. const ile array atamamız bişey değiştirmez.
<!-- 
const cars = ["Opel", "Audi", [1,2,true], "BMW"];
cars[2] = "mercedes";
console.log(cars); // ["Opel", "Audi", "mercedes", "BMW"] -->

fakat array'in kendisini direkt değiştiremeyiz.
<!-- const cars = ["Opel", "Audi", [1,2,true], "BMW"];
cars= "mercedes";
console.log(cars); // hata alırız. -->

var ile bu atamayı yapabiliyoruz. const izin vermiyor.

örneğin array'in sonuna bir eleman ekleyeceğiz. arraydeki elemanların sayısını bilmiyoruz. cars.lenght ile eleman sayısını bulabiliriz.

olmayan bir yere atama yaparsak o indexe kadar boş eleman oluşturur. undefined olarak geçer bu boş elemanlar.
<!-- 
var cars = ["Opel", , "Audi", "BMW"]; 
--> array içerisinde boş virgüller koyarak da boş eleman oluşturabiliriz.

girdiğimiz değişkenin array olup olmadığını şu şekilde sorgulayabiliriz: 
<!-- 
console.log(cars instanceof Array); // true  
console.log(Array.isArray(cars)); // true  -->


---- concat() metodu ----
array'i bozmadan birleştirmek için kullanılır. iki array'de hala değişmedi. eğer farklı bir değişkene atasaydık bu concat işlemini yeni bir array oluşturmuş olurduk.

"" + işareti ile birleştirme işlemi yapmaya çalışırsak stringe çevirir.
myArray.toString(); ile de stringe çevirebiliriz.


---- sort() metodu ----
alfabetik olarak sıralamaya yarar. fakat bu işlem sayılarda işe yaramaz. çünkü ascii kodlarına göre sıraladığımız için farklı bir sonuç alırız.

bunu önüne geçmek ve rakamsal olarak doğru sonucu almak için callback fonksiyonunu kullanabiliriz.
console.log(num.sort((a,b) => a-b));
b-a şeklinde yaparsak tersten sıralar.


---- push() ve pop() metodu ----
push ile array'in sonuna eleman ekler. pop ile array'in sonundan eleman çıkarır.

pop() bize sildiği elemanı döndürür.
push() bize ekledikten sonra arrayin uzunluğunu verir.


---- shift() ve unshift() metodu ----
shift ile array'in başındaki elemanı çıkarır. unshift ile array'in başına eleman ekler.
shift sildiği elemanı geri döndürür.
unshift bir rakam döndürür. döndürdüğü rakam array'in yeni uzunluğudur.


---- splice() metodu ----
splice(1,2,"john","doe") ile array'in 1. indexinden başlayarak 2 eleman çıkarır ve bunları "john" ve "doe" olarak değiştirir.

orjinal array içerisinde değişiklik yapılmış olur.

sildiği elemanı döndürür. eğer 2. değere 0 verirsek hiç birşey silmez onun yerine 1. değerden sonraki indexe ekleme yapar.


---- slice() metodu ----
verdiğimiz parametrelere göre array'in içerisinden yeni bir array oluşturur. orjinal array'imizi bozmaz.
slice(1,2) eğer ikinci değeri vermezsek sonuna kadar olanları alır.


--- indexOf() ve lastIndexOf() metodu ---