ilk çıktımız bir string.
fakat ikinci çıktımız ise bir string objesi

str1'in çıktısı hello world (primitive) iken
str2'nin çıktısı: string {'hello world'}
çünkü bir obje oluşturdu.


1. length property
stringin uzunluğunu gösterir. boşlukları da saydırır. ve toplamda kaç karakterden oluştuğunu görüyoruz.

2. concat() metodu
iki stringi birleştirir. + ile de bunu yapabiliriz.
concat içerisinde concat de yapabiliriz.

3. charAt() metodu
indexlemek için kullanılır. ilk karakter default olarak 0'dır.
str.charAt(0). parantez içerisine bir değer girmezsek default olarak 0 olduğu için ilk karakteri getirir.
str[0] ile de bu yapılabilir. ikisi arasında hiç bir fark yok.
fakat burada metod olarak kullanıyoruz.
str.charAt(str.lentgh - 1) ile son karakteri alıyoruz.

bu örnekte \n'i karakter olarak gördük mü onu anlamak istiyoruz. ikisi de tek karakter sayılıyor.

4. includes() metodu
bize bir boolean değer gönderiyor. örneğin bir password oluşturuyoruz. içerisinde ise sayı, harf, özel karakter vb. olması şartını koyuyoruz. bunun kontrolünü sağlayabiliriz.

5. indexOf() metodu
bize girdiğimiz değerin kaçıncı indexte olduğunu gösterir.
eğer o index yoksa -1 döner.
1'den fazla aynı karakter varsa ilk bulduğu indexi döner.

6. replace() metodu
replace ile bir stringi değiştirebiliriz.
.replace(eski değer, yeni değer)
ilk örnekte "dolor" sözcüğünü buldu ve değiştirdi. fakat ikinci örnekte hiç birşey yapmadı çünkü Ipsum ve ipsum birbirine eşit değildir.
* regular expression kullanarak büyük küçük harf duyarlılığını engelleyebiliriz.
let n2 = str.replace(/Ipsum/i, "muspi");

7. search() metodu
içinde bulunan değerin ilk indexini gösterir.
ilk arama sonucumuz -1 verdi çünkü Blue sözcüğü yok.
diğerinde de / /i(regex yapısı) kullanarak büyük küçük harf duyarlılığını engelleyerek aradığımız sözcüğü bulduk.

8. slice() metodu
istediğimiz indexleri belirleyip kesebiliriz. boşluklar da birer karakter olduğu için dahil edilir.
eğer 2. değeri vermezsek sonuna kadar olan bütün texti ayırır.

9. split() metodu
stringi bölüyor ve array olarak bize veriyor.
split(parametre). örneğin split(' ') ile boşlukları ayırıyoruz.
eğer split("") ise bütün stringi tek tek her harfini ayırıyoruz.
içerisine parametle vermezsek tek bir array'e dönüştürür.

10. substr() metodu
stringin içinde arama yapmak istiyorsak bu metodu kullanırız.
örneğin substr(26,10) 26. indexden 10 karakteri alır.
not: yakında kaldırılacak bir özellik. MDN'de konu ile ilgili açıklama yapılmış.

11. substring() metodu
negatif index kullanamayız.
substring(start, end) ile substring(end, start) yapılabilir. ikisi de aynı sonucu verir. belirli aralıktaki stringi almak için kullanırız.

12. toLowerCase() metodu
stringi küçük harfe çevirir. I harflerini i olarak çevirdi. toLocaleLowerCase() metodu da küçük harfleri lokal şekilde çevirir. "tr-TR" kodu ile çevirir. bilgisayarın local ayarına göre çevirmek için parantezi boş bırakabiliriz.

13. toUpperCase() metodu
stringi büyük harfe çevirir. i harflerini I'ya çevirdi.
bunu engellemek için toLocaleUpperCase() metodunu kullanabiliriz.

14. trim() metodu
trim() ile sağda ve solda olan boşlukları siler.
trimLeft() ile trimRight() da yapılabilir. bu ikisi dışında parametre almaz. istediğimiz yerlerdeki boşlukları silebiliriz.