3. satırdaki kod silik yazıldı. çünkü bu koda erişemeyiz.
bir fonksiyon içerisinde (daha doğrusu bir scope içerisinde) 2 kere return kullanamayız.

typeof sum() ile fonksiyonun çıktısının türünü alacağız.


1. örnekte num1+num2'yi topladığımız için number çıktısını alıyoruz.
şimdi içeriğini değiştireceğiz.
içerisine console.log() yazarak çıktının tipini göreceğiz.

2. örneğin çıktısı undefined

3. örnek. function expression. bir değişken atıyoruz ve fonksiyonu içerisine yazıyoruz. burada isim vermek zorunda değiliz. aslında değişken ismini verirken fonksiyonun ismini vermiş oluyoruz. isimsiz fonksiyon da diyebiliriz.

4. pascal numbers ile ilgili bir örnek yapıyoruz. burada bir recursive fonksiyon yazıyoruz. önceliğimiz fonksiyonu sonsuz döngüden çıkartmak olmalı her zaman.
n değerini görmek için fonksiyonun içine console.log(n) yazdık.
ilk satırda bir condition belirliyoruz. eğer n sayımız 1'e eşitse fonksiyonu bitiriyoruz. eğer yazmazsak 0 -1 -2 diye sonsuza kadar devam eder.
daha sonraki satırda ise asıl fonksiyonumuzu yazıyoruz.
n + pascalNumbers(n-1)

5. örnek: yine sonsuz döngüye girmemek conditionumuzu belirledik. daha sonra da faktöriyeli hesaplaması için gereken işlemi yazdık. n* factorial(n-1).
aynı fonksiyonu function expression ile yapacağız.

6. örnek: => işareti ile fonksiyonu hızlı bir şekilde yazabiliriz. Pythondaki lambda ile aynı işi yapar.
66. satırda f değişkenimiz için 3 değişken atıyoruz. eğer f değişkenimiz için fonksiyonu çağırırken 3 yerine 1 ya da 2 değişken girersek bize sonuç olarak NaN verir. çünkü 3. değişken tanımsız kalıyor.

7. örnek: (...) kalanları anlamına gelir. diyelim ki 1'den 100e kadar olan sayıların toplamını bulmak istiyoruz. tek tek yazamayız. o yüzden (...others) şeklinde yazıyoruz.
öncelikle bir değişken belirledik. sum. çünkü alacağımız sonuçu bu değişkende tutacağız.
1'den 100'e kadar tek tek yazmayacağımız için bir FOR döngüsü oluşturuyoruz.
for(let i = 0, i < others.lenght; i++) => burada yaptığımız şey önce bir i tanımlamak. daha sonra i'nin maksimum değerini belirlemek. lenght methodu ile others olarak belirlediğimiz değişkenin uzunluğu bizim max değerimiz. ve i'yi her seferinde 1 artırıyoruz. i++.
daha sonra sum değişkenimizi her iterasyon için i'ye eşitliyoruz.(75. satır)
for döngüsüyle işimiz bittikten sonra da return sum ile sonucu alıyoruz