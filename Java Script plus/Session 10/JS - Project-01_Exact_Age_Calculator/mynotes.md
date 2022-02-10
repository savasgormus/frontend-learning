counter olarak html tarafında yazdığımız div'leri yakalayacağız.
event'i objenin kendisine tanımlayabiliriz. yani burada innertext gibi attribute alırsak addEventListener ekleyemeyiz.
o yüzden objenin kendisini ilk önce alıyoruz:
const years = document.getElementById("years");
ilk üçünü id ile alıyoruz. diğer üçünü de örnek olarak querySelector ile alacağız.
hatırlatma: querySelector ile alacaksak css'deki gibi yazmalıyız: const hours = document.querySelector("#hours");

9. satır = sayfa load durumunda yani html'i yüklüyoruz ise bir fonksiyon aktif olacak. 
önce html'de tanımladığımız loading classına sahip elemanı objeye çevirdik. 
<!-- const loading = document.querySelector(".loading"); -->
eventlistener ile sayfa yüklendiğinde çalışacak bir fonksiyon yazıyoruz. 

<!-- window.addEventListener("load",()=>{
    loading.style.display = "block";
    setTimeout(()=>{
        loading.style.display = "none";
    },1000);)  
}) 
-->
bu fonksiyonda önce loading'in style'ının display özelliğini block yapıyoruz. devamında ise 1 saniye bekleyip loading'in display özelliğini none yapıyoruz. setTimeout fonksiyonu bize bunu sağlıyor.
setTimeout 2 tane parametre alıyor. ilk parametre fonksiyonu ifade ediyor. 2. parametre ise milisaniye cinsinden bekleme süresi. setTimeout(()=>{}, 1000)  bu fonksiyon sayfa yüklendikten 1 saniye sonra devreye girsin. ilk parametreye de arrow function ile loading.style.display = "none"; yazıyoruz.


ilk 6 satırda yakaladığımız elementleri loading bittikten sonra ekranda göstermek ve sıfırlamak istiyoruz. böylece kullanıcı sayfayı açınca loadingi görecek ve daha sonra display = "none" olan countdown elementlerimizi styling işlemiyle yakalayacağız. göstereceğiz.
countdown elemanları içersindeki child elementleri göstermemiz için öncelikle parent elemanı olan #countdown'ı seçmemiz lazım.

az önce yazdığımız fonksiyonun içerisini şimdi güncelleyeceğiz.
önce countdown'ın display özelliğini setTimeout içerisinde flex olarak verdik ki yanyana gelsin. setTimeout işlemi bittikten sonra daha önce yakaladığımız years, month days... elementlerin innerHTML'ini "00" yaptık.

diğer yöntem ise for döngüsü ile bunu yapmak.

H2 elementlerine ulaşmak için getElementsByTagName ile bütün h2 elementlerine ulaştık. html collection olarak aldık.

üçüncü yöntem ise foreach yöntemi: queryselector ile nodelist aldık ve bunu nodeList.forEach ya da Array.forEach ile döngüye sokabiliriz. bir index yapısı kullanmıyoruz. her elementi tek tek geziyor. parantez içerisinde element olarak adlandırdığımız şey h2Elements2 isimli arrayimizin her bir elemanını temsil ediyor. yani forEach içerisine bir fonksiyon tanımlamış oluyoruz. ve fonksiyonumuz element.innerHTML'i "00" yapıyor. child elementleri tek tek iterasyona soktuğu için hepsini tek tek seçip innerHTML'ini değiştirmekle uğraşmıyoruz.

özetle countdown isimli div'i aldık ve içerisindeki child elemanlarının innerHTML'ini "00" yaptık.

diğer yöntem isse bir html collection ile bunu yapmak. öncelikle html collectionu bir array haline getirmemiz gerekiyor.
Array.from(htmlCollection) ile html collection'u array haline getirdik. ya da [...htmlCollection] ile de array haline getirebiliriz.


-----

seçtiğimiz tarihin bir fonksiyon olarak sürekli çalışmasını sağlayacağız.

selectedbirthday diye bir değişken oluşturduk.

queryselector ile input name'i birthday olan elemanı alıyoruz. yine cssvari bir şekilde yazmalıyız. "input[name='birthday']"

şimdi bir eventlistener ile input'a bir event ekliyoruz. evente target olan elemanı yerleştirdik.  
girdiğimiz tarih değeri bir string olduğu için selectedBirthday'i tarih formatına yani bir objeye çevirdik. çünkü input olarak aldığımız değer string olarak geliyor.


bir if döngümüz var. çünkü doğum günümüz bugünden önce olmalı. bunun için bir alert koyduk.

hesaplama fonksiyonunu bitirmeden önce tekrar bir settimeout fonksiyonu yazıyoruz ki 1 saniyeliğine çalışsın.

change eventi tetiklendiğinde çalışmasını istediğimiz bir fonksiyon ekledik. setInterval(updateCountdown, 1000); yani 1 saniye süreyle sürekli çalışacak bir countdown oluşturduk.

şimdi bugün ile doğum tarihi arasındaki farkı bulmak için selectedBirthday'den yıl ay gün ... hepsini tek tek seçiyoruz.
ve let now = new Date(); ile bugünün tarihini alıyoruz.

daha sonra bugünün tarihinin değerlerini tek tek alacağız yukarıdaki yöntem gibi. ardından da matematiksel işlemimizi gerçekleştirmek için bugünün tarihinden doğum günü tarihlerini yıl ay gün olarak çıkartıyoruz.

ilk başta dom metodu ile yakaladığımız h2 taglerine geliyoruz şimdi...

bu taglerin innerHTML'lerine işlem yaptığımız değeri vereceğiz. fakat burada şöyle bir durum var. 2 tane digit almak istiyoruz. 
.padStart(2, "0") ile 2 digitlik bir sayıya 0'ları ekliyoruz.

fakat burada bir sorun var. farklar pozitif olduğunda bir problem çıkmıyor ama 2. aydan 5. ayı çıkartırsak - değer alıyorum.

şimdi sonucun negatif olma durumunu kontrol altına alacağız. yıl ile ilgili bir problem yok çünkü yukarıda alert return koyduğumuz fonksiyon bunu hallediyor.

if statement içerisinde (monthOfAge < 0) ise yıldan 1 eksiltip monthOfAge'i 12 ile toplamalıyız. özetle ondalık alıyoruz. günün de negatif çıkma ihtimali olduğu için ay'dan gün alıp güne ekliyoruz ve aydan 1 eksiltiyoruz. fakat şöyle bir durum var. ayların hepsi aynı gün değil.