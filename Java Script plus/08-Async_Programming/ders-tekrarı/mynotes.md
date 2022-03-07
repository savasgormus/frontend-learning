eğer head kısmına script'i bağlarsak:
html dosyası indirilir ve scripti çalıştırır fakat bu sırada sayfa yüklenmesini beklemeye alır ve scriptler yüklendikten sonra web sayfamız açılır. düşük performans olduğu için tercih edilmez.

eğer body kısmının sonuna script bağlarsak(bugüne kadar bu şekilde yaptık) önce sayfa yüklenir ve en son scriptler yüklenir. bu şekilde performansı artırır.

head kısmına script'i async olarak bağlarsak:
sayfa inmeye başlar. bu sırada script dosyası iner. script uygulanırken sayfa yüklemesi beklemeye alır. script execute edildikten sonra sayfa yüklenir.

defer ile head kısmında scripti indirirsek: html'i indirirken scripti de indirir. sayfa yüklendiği anda scripti execute eder. performans açısından en iyisi budur.

--- Async Callbacks ---
basit anlamda: işin bitince beni çağır.
eskide kalmış bir yöntem fakat hala kullanılmakta. 2 tane yapımız var:
setTimeout() ve setInterval()

örneğin 3 kod yazdık:
console.log('1');
alert('2');
console.log('3');
    bu durumda ilk kod çalışır fakat 2. koda geldiğinde bizden bir tepki beklediği için kod akışı durur. bloke olur. alert'i kapattığımızda 3. kodu çalıştırır.
    async olarak 2. kodu çalıştırırsak eğer (bir süre verdiğimizi varsayalım) 1. kod çalışır, 2. kod sıraya geçer fakat çalışmaz, 3. kod çalışır. verdiğimiz zaman dolduğunda ise 2. kod yani alert ekrana gelir.
    2. kodu dışarıdan beklediğimiz veri gibi düşünebiliriz. ya da browser kamera için izin istedi. 
burada amaç sayfanın yüklenmesini engellememek.

setTimeout(function, milliseconds) belirlenen bir milisaniye sonra çalıştır. sıralı kod bittikten(ms'e 0 verirsek) sonra veya zamanı geldiğinde çalışır. 
örneğin: bir blog / haber sayfasına girdik. belirli bir süre okuduktan sonra bize "üye olmak istermisiniz?" vs. sorusunu sorar.
setTimeout() bize bir intervalID verir.

+++ örnek 1 +++

önce bir fonksiyon oluştruduk ve bir intervalID tanımladık. setInterval içerisine oluşturduğumuz fonksiyonu "callback" olarak yazdık ve 3000ms süre tanımladık: böylece hello yazısı her 3 saniyede bir çalışacak.
çıktımız şu şekilde olacak:
1. mesaj
id:1
hello (3 saniye geçtikten sorna çıktı alıyoruz.)

id isimli bir değişken tanımladık ve içerisine setTimeout kurduk: arrow function ile önce fonksiyonumuzu tanımladık (clg:hello world) ve 4000ms süre tanımladık.
clg(id) dediğimizde bize tanımlanan id'yi yazdıracak ve 4 saniye bekledikten sonra hello world çıktısını alacağız.

clearTimeout() ile bu işlemi durdururuz. setTimeout'un id vermesinin amacı da budur. 
bu örnekte clearTimeout(id) diyerek 4 saniye sonra gelecek olan hello world çıktısının çalışmasını durdurduk.
fakat id2 çalışmaya başladı ve 1 saniye sonra "hello world" çıktımızı aldık.