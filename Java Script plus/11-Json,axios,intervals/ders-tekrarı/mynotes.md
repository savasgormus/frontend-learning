fetch ile axios arasındaki fark nedir?

- fetch vanilla javascript'dir. axios ise 3. parti kütüphanesidir. head kısmına mdn linkini vermeliyiz ya da paketi indireceğiz.

- axiosda veri alsak da göndersek de JSON formatında veri döndürülecektir. fetch'de ise JSON'a çevirmek durumundayız. respond.json() yazmamız gerekir.

- axios fetch'den daha hızlı çalışır.


API'den bir kullanıcı listesi çekeceğiz ve bunu bir tablo oluşturarak web sayfasında göstereceğiz:
https://reqres.in/
simülasyonu POSTMAN uygulaması ile yapacağız.
javascript'de uygulamadan önce API linkini postman'de göreceğiz.
postman'de linki girip send dediğimizde yaptığımız işlem aslında axios ya da fetch ile veriyi çağırma ile aynı işlemi yapıyor.

API'den gelen kullanıcı bilgilerini bir tablo içerisinde göstereceğiz. HTML' sayfamızdaki id = "tbodyUserList" olan elementi kullanacağız. 


 --- Userlist.JS ---


- DOM ile bu elementi yakaladık.
- şimdi window.onload durumunda bir fonksiyon ile apiden bilgi çekeceğiz. 
- bu fonksiyon çalıştığında spinner dönmesini istiyoruz. böylece kullanıcıya şu an web sayfası işlem yapıyor mesajı vereceğiz. HTML sayfasında id = "loading" olan elementi yakalamalıyız. Fakat burada şunu göz önüne almalıyız. Örneğin birden çok sayfamız var ve hepsine showLoading() fonksiyonu uygulayamayız. Bu yüzden bu fonksiyonu Extensions.js dosyasında yazıyoruz ve hepsine uyguluyoruz. Extension.js dosyasını da html sayfamızın head kısmına ekliyoruz.

const showLoading = () => {
    loading.style.display = "block";
}

const removeLoading = () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);
}

- bu iki fonksiyonu getApiUserList() fonksiyonumuza ekliyoruz. böylece sayfa açıldığında bir spinner dönecek ve belirli bir süre sonra kaybolacak.
- getApiUserList() fonksiyonunu async fonksiyon olarak yazmalıyız çünkü apiden veri çekeceğimiz fonksiyon. böylece işlem akışımızı bozmayacak ve sayfa donmayacak. await kullanmamız için async fonksiyonu yazmalıyız.
- apiden veri çekmek için fonksiyonumuzun içini dolduruyoruz:
değişken atadık ve await axios(url) ile bu işlemi gerçekleştirdik. daha sonra console.log ile gelen veriyi göreceğiz: bize bir Object döndürdü. Objenin içerisinde bir data var ve onun içerisinde de bir data daha var. istediğimiz bu ver 6 elemanlı bir Array.
- object içerisindeki datayı parçalayarak daha düzenli bir şekilde görmek istiyoruz. const { data:userListArray } = responseData.data; ile bu işlemi yapıyoruz. ayrıca bu "data" ismini userListArray olarak değiştirdik.  
- şimdi bu yaptığımız işlemleri Try/Catch içerisine alıyoruz. catchin içerisine de bir error yazıyoruz. ayrıca removeLoading() fonksiyonunu çağırıyoruz. böylece bir hata aldığımızda spinner dönmeye devam etmeyecek. diğer durumda hata aldığımızda spinner sürekli dönecekti. ayrıca postErrorLog ile aldığımız hata mesajını loglamak için kullanabiliriz. böylece admin olarak girip hata nerede, alınmış kontrol edip müdahale edebiliriz.

