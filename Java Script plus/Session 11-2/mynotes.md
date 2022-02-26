 - Obje nedir?

Değişkenler gibi içinde değer tutan her bir tanımlamaya obje denir. Primitiveler haricinde herşey objedir. Array, fonksiyon.. 

Objeler stack'de (bellekte) adres tutar. bu değiştirilemez. adres içerisinde ise değer tutuyoruz. Const ile tanımladığımız adresi değiştiremeyiz. fakat adres içerisinde heap bölgesinde tutulan değeri değiştirebiliriz.



Objeler değişkenlere benzer.birden fazla veri tutabiliriz. içerisinde tuttuğumuz bu verilere property denir. isim ve değer olarak eşleştirme vardır. key - value

eğer bir fonksiyonu objenin içerisine koyarsak bunun adına method denir.

data ve kod bir arada bulunur.

--- Örnek 1 ---

bir nesne oluşturduk.

clg(person.firstName) ile person objesinin firstName propertysini çağırdık. 1.yöntem

clg(person["birthYear"]) ile person objesinin birthYear propertysini çağırdık. 2.yöntem

nesneye ait olmayan bişeye çağırmak istersek undefined döner.

23. satırda dışarıdan gelen bir değişkenle person'un attribute'ını birleştirdik. Array gibi kullandık.

25. satırda ise birthYear Property'sini değiştirdik. (DOM'da yaptığımız gibi.)
person.firstname = "barry" ile objeye 1 property daha ekledik. çünkü firstname ve firstName farklı. Case sentsitive.
delete person.firstname; ile objenin firstname property'sini sildik.

30. satırda nesne içerisine nesne ekledik. çünkü arrayler de birer nesnedir.

35. satırda -for of- yöntemi ile person objesi içerisindeki key'leri çağırdık.
key yerine values yazarak da değerleri çağırdık.

43. satırda ise key : value olmak üzere ikisini bir arada çağırdık.

--- Obje Metodları ---

şimdi objemize yaşını hesaplayan bir metod ekleyeceğiz.

calcAgeBad: function(bYear){
        return 2022 - bYear;
    }  bu yöntem kötü bir yöntem

calcAge() {
        return 2022 - this.birthYear;
    } bu ise tercih edilen yöntem.