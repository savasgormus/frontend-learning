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


+++ örnek 2 +++

5 tane işlemimiz var fakat aralarından biri çok uzun sürecek bir işlem. bu durumda setTimeout() ile işlemleri sırayla çalıştırır. ve uzun süren işlemi arka planda çalıştırmaya devam ederken kod akışını bozmaz.

bir slowtask isimli fonksiyon tanımladık.
burada istediğimiz şey 1,2,3,4'ü yazsın fakat slowtask'i ne zaman biterse o zaman yazsın. burada setTimeout() süresini 0 yazdık. böylece belirli bir sürede değil benim işim biter bitmez ilk fırsatta yazdır dedik.

Javascript single-thread'dir. bu yüzden settimeout 0 ile bütün işlemler bittikten sonra ilk müsait zamanında çalıştır dedik. 

yine aynı örnekte wait() fonksiyonu var. burada sıralı kodu bloke ettik. task1 yapıldıktan sonra 2 saniye bekliyor ve task2 yapılıyor. daha sonra slowtask'i arka plana atıp task3 ve task4'ü yapıyor.

wait(ms) fonksiyonu:
    başlangıç zamanı aldık: bugünün tarihi - şu anki zaman
    bitiş tarihi : başlangıç tarihi olarak atadık:
    WHILE (end < start + ms) {
        bitiş tarihi : bugünün tarihi - şuanki zaman
    }


+++ örnek 3 +++

console.time ile zaman tutmaya başlıyoruz
console.timeLog ile zamanı ölçmeye, geçen süreyi yazdırmayı sağlıyoruz.
console.timeEnd ile zamanı ölçmeyi bitiriyoruz.

yazdığımız kodun developement aşamasında ne kadar süre içerisinde çalıştığını test edebiliriz.


+++ örnek 4 +++

zaman ölçümünü başlattık ve 2 saniye beklettik. daha sonra bir for döngüsü ile i'yi 1000'e kadar arttıran for döngüsü kurduk.
bu işlem BİTTİKTEN 2 saniye sonra setTimeout() ile zaman tutma işlemini durdurduk.


+++ örnek 5 +++

bu 3 kod settimeout sırasına göre çalışacak. yani hepsi bittikten sonra verdiğimiz süreye göre bize mesajlarını verecek. yani ilk önce 3. uyarıyı sonra 2.yi sonra 1.yi yazdıracak.

şimdi bu örneği biraz değiştireceğiz. ilk iş bitsin ve 1 saniye sonra diğeri başlasın. diğeri de 2. işlem bittikten 1 saniye sonra başlasın:
bu durumda aritmetik işlem yapamayız. o yüzden nested yapıda yapmalıyız.
