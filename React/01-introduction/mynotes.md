-- React bir javascript kütüphanesidir. fakat bazı yerlerde framework olarak da geçebilir. framework bir ekosistemdir, belirli kuralları ve kalıpları vardır ve bu kurallara uymak zorundayız. bu koşullara uymaz isek proje yapamayız.

-- Fakat librarylerde bu zorunluluk yok. Örneğin react kullanırken bize jsx formatında yazmamız önerilir fakat bu bir zorunluluk değildir. ayrıca frameworklerdeki gibi dahili platformlar yoktur. kendimiz 3. parti programları/kütüphaneleri ihtiyacımız doğrultusunda kurarız. Özetle bize seçme hakkı tanır. fakat dezavantajı ise projemizdeki dependency yayından kaldırıldıysa projemiz çalışmaz ve farklı alternatif aramamızı gerektirir.

-- Component based bir yapısı vardır. Bu element içerisinde html css ve js bulunuyor. Örneğin register sayfası tasarladık ve bunu bir component haline getirdik. böylece her yerde kullanabiliriz. Ya da bir buton tasarladık. Bu componenti istersek daha önce yaptığımız register componenti içerisinde ya da başka bir yerde de kullanma olanağı sağlar. 

-- ES6 kullanır. Fakat daha düşük browserlar için JS versiyonunu Babel ile compile edebiliriz.

-- MVC(model view controller) dizayn mimarisini kullanır. Projeler 3 temel katmana bölünüyor. Model(Backend tarafı), Controller(Backend tarafı), View(Frontend/ui tarafı). Kullanıcı ile view muhatap olur. oradan gelen veriler controller üzerinden geçerek model kısmına geçer. ya da model'dan veri çekilip controller üzerinden view'e aktarılır.

-- Fazla ve gereksiz rendering'i azalattığı için uygulamalar daha hızlı çalışır. Bunun sebebi virtual bir DOM yaratıp bunu kullanmasıdır. Ayrıca html kodlarını JS içerisinde direkt yazabiliyoruz(jsx). Normalde bu işlemi innerHTML ile yapıyorduk fakat bunu okumak, debug yapmak vs oldukça zordur ve çok da güvenli bir yol değildir. 

-- React Dom'un bir kopyasını alır ve daha hızlı çalışması için RAM bellekte çalıştırır. buna Virtual dom denir. Virtual Dom'un bir snapshot'ı(kopyası) daha oluşturulur. Değişiklik bu snapshot üzerinde yapılır ve önceki Virtual Dom ile diff() algoritmasıyla farkları bulur ve değişmesi gereken componentleri bulup toplu bir şekilde bunları DOM'da günceller.

-- React bütün elementleri statik olarak görür. Bunun sebebi render işlemini minimuma indirmektir. Developer hangi componentlerin statik ya da değişken element olduğuna karar verir. Değişken elementlerin state'lerini belirttiğimizde diff ile güncelleme sağlanır.
