--- Promise ---

dışarıdan bir kaynaktan bilgi talep ettiğimizde pending durumunda bekliyoruz. eğer bize verilen bu promise olumlu bir şekilde sonuçlanırsa "resolved", olumsuz sonuçlanırsa "rejected" durumuna düşer.

---------------------------------------------
        -> resolved (.then())
promise(pending)              -> promise(pending)
        -> rejected (.catch())
----------------------------------------------
resolve durumunda bir sonraki aksiyona geçer.
reject durumunda da handle error yapılır.

+++ örnek 1:

basit bir promise oluşturduk. promise'e resolve ve reject durumunda oluşacak bir sonraki aksiyonu verdik.

myPromise.then ile resolve durumunda gelecek aksiyonu arrow function ile gönderdik. çıktı: "task completed"

+++ örnek 2:

bir promise oluşturuyoruz. resolve ya da reject durumunda nasıl bir aksiyon oluşturması gerektiği ile ilgili bir girdi oluşturacağız. öncelikle bir Math.floor fonksiyonu ile 0 ila 1 arası bir rakam üretmek istiyoruz.
!Math.floor(Math.random() * 2) yaptık ki ! sayesinde true ya da false bir değer alacağız.
daha sonra IF Else yapısı içerisine true durumunda "success" yazdık, false durumunda "fail" yazdık.

+++ örnek 3:

çay demleme örneği yapacağız. öncelikle bir bekleme durumu için fonksiyon yazdık.

şimdi çay demlemesini aşama aşama yapabilmek için alt fonksiyonlarımızı yazıyoruz:

suyuKaynat() isimli bir fonksiyon içerisine promise oluşturduk. yukarıdaki gibi true / false vermesi için !Math.floor(Math.random() * 2) kullandık. eğer TRUE değeri alırsak resolve durumu için bir promise hazırladık: önce 2 saniye bekleyecek daha sonra resolve mesajını verecek. FALSE durumunda ise bize "kettle arızalı" mesajı verecek.

demEkle() isimli bir fonksiyon içerisine promise oluşturduk. yukarıdaki gibi true / false vermesi için !Math.floor(Math.random() * 2) kullandık. eğer TRUE değeri alırsak resolve durumu için bir promise hazırladık: önce yarım saniye bekleyecek ve sonra resolve mesajını verecek. FALSE durumunda ise bize "Evde çay yok" mesajı verecek.

şimdi asıl fonksiyonumuzu yazıyoruz:
cayDemle() {
    suyuKaynat() .then ile resolve durumu için gelecek mesajımızı belirttik ve console.log ile yazdırdık. daha sonra return bir sonraki fonksiyonu çağırdık: demEkle()

    .then ile demEkle() fonksiyonundan sonra gelecek mesajı belirttik status 2 olarak ve console.log ile çay hazır yazdırdık. return ile çay hazır yazdıracak. 

    fakat bu durum status3. yani bir sonraki .then ile yukarıdaki mesajı çağırdık. böylece zincirleme olarak
    su kaynadı > çay eklendi > çay hazır mesajları gelecek.

    .catch ile hata durumunda gelecek mesajı belirttik ve console.log ile yazdırdık.
}


--- Async / Await ---

bir fonksiyonu async ile tanımlarsak bize bir promise yapısı döndürür. kod okunabilirliği açısından daha çok tercih edilen bir yöntemdir.
kodu bloklamaz yani aynı promiseler ver callback fonksiyonları gibidir.

+++ örnek 4:

async function ile cayDemle2 fonksiyonunu yazacağız:
    önce const ile statuslarımızı tanımladık:
    TRY { yapısı içerisine statuslarımızı belirteceğiz.
        const status1 = await suyuKaynat();
burada await ile status1'e atadığımız fonksiyona diyoruz ki bu fonksiyonun sonucunu al ve bir sonraki adıma geç.
.then() yerine await kullandık. 
        const status2 = await demEkle();
        const status3 = await Promise.resolve("çay hazır");
        } CATCH (error) {
            burada ise hata durumunda alacağımız yanıtı belirtiyoruz.
        console.log(error);
        }
