counter olarak html tarafında yazdığımız div'leri yakalayacağız.
event'i objenin kendisine tanımlayabiliriz. yani burada innertext gibi attribute alırsak addEventListener ekleyemeyiz.
o yüzden objenin kendisini ilk önce alıyoruz:
const years = document.getElementById("years");
ilk üçünü id ile alıyoruz. diğer üçünü de örnek olarak querySelector ile alacağız.
hatırlatma: querySelector ile alacaksak css'deki gibi yazmalıyız: const hours = document.querySelector("#hours");

8. sayfa load durumunda yani html'i yüklüyoruz ise bir fonksiyon aktif olacak. 
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