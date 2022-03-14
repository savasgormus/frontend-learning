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


- --- Userlist.JS ---


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
- getApiUserList() fonksiyonunu async fonksiyon olarak yazmalıyız çünkü apiden veri çekeceğimiz fonksiyon işlem akışımızı bozmayacak ve sayfa donmayacak. await kullanmamız için async fonksiyonu yazmalıyız.
- apiden veri çekmek için fonksiyonumuzun içini dolduruyoruz:
değişken atadık ve await axios(url) ile bu işlemi gerçekleştirdik. daha sonra console.log ile gelen veriyi göreceğiz: bize bir Object döndürdü. Objenin içerisinde bir data var ve onun içerisinde de bir data daha var. istediğimiz bu ver 6 elemanlı bir Array.
- object içerisindeki datayı parçalayarak daha düzenli bir şekilde görmek istiyoruz. const { data:userListArray } = responseData.data; ile bu işlemi yapıyoruz. ayrıca bu "data" ismini userListArray olarak değiştirdik.  
- şimdi bu yaptığımız işlemleri Try/Catch içerisine alıyoruz. catchin içerisine de bir error yazıyoruz. ayrıca removeLoading() fonksiyonunu çağırıyoruz. böylece bir hata aldığımızda spinner dönmeye devam etmeyecek. diğer durumda hata aldığımızda spinner sürekli dönecekti. ayrıca postErrorLog ile aldığımız hata mesajını loglamak için kullanabiliriz. böylece admin olarak girip hata nerede, alınmış kontrol edip müdahale edebiliriz.
- try bloğu içerisine IF yapısı ile bize göre hata olabilecek durumları yazacağız. Burada dikkat etmemiz gereken bir husus var. catch bloğundaki hata API'ye göre bir hata. bizim yazdığımız ise bizim bakış açımıza göre olan hatalar.
- ELSE durumunda ise asıl yapmak istediğimiz işlemleri yazacağız: 
userListArray.forEach(customer => {
    tbody.innerHTML += `
    <tr>
    <td>
		${customer.id}
    </td>
    <td>
		<img src= "${customer.avatar}">
    </td>
    <td>
        ${customer.email}
    </td>
    <td>
        ${customer.first_name}
    </td>
    <td>
        ${customer.last_name}
    </td>
    </tr>    
    `
})
burada ilk başta yakaladığımız tbody elementinin innerHTML'ini düzenledik. table row içerisine id, avatar, email, first_name, last_name bilgilerini yazabilmek için table data oluşturduk.
-${} içerisine forEach ile gelen customer bilgilerini yazdık. costumer.id, customer.avatar ... gibi. (log ile gördüğümüz data içerisindeki bilgiler.)
- dikkat etmemiz gereken bir nokta da innerHTML'i düzenlerken += kullandık. çünkü apiden 6 tane kullanıcı çekeceğiz. eğer sadece = kullanmış olsaydık sadece 5. indextekini bize çıktı olarak yazardı. += ile hepsini tek tek tbody'nin içerisine ekliyor.

- şimdi işleri biraz daha zorlaştıracağız. örneğin her 5 saniyede bir yeni kullanıcı gelecek. bunun simulasyonunu yapacağız. 

- onload eventi içerisine setInterval fonksiyonu ekledik ve parametre olarak içerisine getApiUserList() fonksiyonunu ve 10000 milisaniye değerini verdik. böylece yapmış olduğumuz işlem şu hale geldi:
sayfa yüklenirken apiden veri çekilecek. daha sonra 10 saniye bekleyecek ve getApiUserList() fonksiyonunu tekrar çağıracak.

- ELSE yapımızın içine   tbody.innerHTML = ""; ekledik. böylece önce tbody içerisini boşalttık ve gelen en güncel kullanıcıları eklemesi için bir alan oluşturduk. yani her 10 saniyede bir güncelleme geldiğinde bir öncekileri silecek ve yeni kullanıcıları ekleyecek.

- veri çekişini şimdi method belirterek yapacağız: await axios(url, { method: 'get' }) aslında ilk kullanımı ile arasında hiç bir fark yok fakat bize post methodunu kullanmamızı sağlar.

- --- signup.js ---

bir register işlemi yapacağız ve api'ye bir register işlemi gerçekleşecek.

postman'e post ile register bilgisi göndereceğiz. linki verdik fakat api dökümanımız bizden kullanıcı bilgilerini de istiyor. body => row içerisine email ve passwordu yapıştırdık. fakat gönderme şeklini json olarak seçmeliyiz. bu işlem aslında json.stringify işlemi ile aynı işlevi görüyor. çünkü postman fetch/axios ayrımını yapamaz.

yapacağımız işlemleri önce kafamızda tasarlayalım:
- JS'de 2 tane inputumuz olmalı. biri e mail, diğeri password. bu bilgileri submit butonu ile almalı ancak json formatında bir string elde etmeliyiz.
- yani bir customer objesi var ve bu objenin 2 property'si var. email ve password.
- fetch ya da axios ile url'yi methodu(post) ve datayı vermeliyiz. fetch ile yapacaksak json.stringfy yapmalıyız fakat biz axios kullanacağımız için buna gerek yok çünkü axios bunu kendisi yapıyor.

- dom ile 3 elementimizi de yakaladık.

- addEventListener ile sayfa yüklendiğinde kullanıcı adı ve şifresini otomatik doldurması için mail ve password değişkenlerimizin value'larını belirttik.

- yine addEventListener ile submit butonuna tıklandığında gerçekleştireceğimiz işlemleri yazıyoruz.

- submit butonu için async fonksiyon yazarak bodyDatamızı oluşturduk. email değişkenini ve password değişkenine dom ile aldığımız elementlerin value'larını atadık ve console.log postman ve api sayfamızda gördüğümüz verinin aynısını elde ettik.

- şimdi try/catch bloğumuzu oluşturuyoruz:
try {                                      
        const response = await axios({
            url: "https://reqres.in/api/register",
            method: "post",
            data: bodyData,
        })
    } catch (error) {
        alert(error)
    }

- TRY içerisine bize göre hata olan conditionları yazacağız. örneğin response url'mizi yanlış girdik ve bunun bize hata vermesini istiyoruz. bu durumda userData.token == undefined ise bize alert verecek.

- ELSE kısmı için de apiKey'i ve baseURL'yi localStorage'a gönderiyoruz. buradaki amaç, çok fazla yerde kullanacağımız veriyi localsorage'a kaydetmek.

- ek olarak apikey'i extentions.js dosyasından aldığımız EncryptStringAES() fonksiyonu ile şifreleyip localStorage'a kaydediyoruz.

- daha sonra window.location.href ile userList.html sayfasına yönlendiriyoruz.