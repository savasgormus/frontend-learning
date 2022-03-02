-----bootstrap-----

otomatik olarak responsive tasarımı sağlayan bir framework'tür.

https://getbootstrap.com/docs/5.0/getting-started/introduction/

css ve separate linklerini html'imize kopyalayarak başlıyoruz.

bir elemente class name vererek css'i ayarlayabiliriz. 


--- typography ---

p tagi içerisine class verdik ve class'ı h1 yaptığımızda bu element h1 tagine dönüştü. inspect ettiğimizde bu elementi h1 olarak göreceğiz. doğal olarak bütün özellikleri de h1 özelliğiyle aynı olacak.

örneğin; h1 içerisinde bulunan small tagi içerisinde class olarak "text-muded" verdiğimizde stilini farklı bir hale getirdi.

"display-1" ile vurgulamak istediğimiz yerleri gösterebiliriz. bunu css tarafında fontu büyütüp harf aralarını açarak vs yapabiliriz fakat bootstrap ile sadece class vererek frameworkte önceden hazırlanmış kalıbı kullanabiliriz.
display-1'den 6'ya kadar hazır kalıpları kullanmakta özgürüz.

"lead" ile öne çıkarmak istediğimiz yazıları gösterebiliriz.

küçük harflerle yazdığımız bir texti "class=text-uppercase" ile tamamen büyük harfe çevirebiliriz. ya da "class= text-lowercase" ile tamamen büyük harfe çevirebiliriz. ya da "class=text-capitalize" ile ilk harfleri büyük harfe çevirebiliriz.

"fw-bold" ile normal bir texti bold hale getirdik. ya da "fw-light" classı ile light hale getirdik. fst-italic ile italic hale getirdik.
fst-normal ile de normal hale getirdik.

bütün bu özellikleri ezberlemeyeceğiz. bootstrap'in sayfasında bu komutlar zaten var.

--- color ---
bootstrap içerisine hazır gömülü olan renkleri class ismi vererek kullanabiliriz. bu renkler:
primary, 
secondary, 
success, 
danger, 
warning, 
info, 
light, 
dark, 
white, 
muted
black, 
gray.

text-primary ya da bg-primary ile renkleri kullanabiliriz. bg(background)

--- buttons ---

bir button oluşturduk. class'ı btn-primary olarak verdik. primary color'ı aldı ve kendi hazır butonuna çevirdi. 2. bir class verdik. "btn" yine bootstrap bir still verdi.
class = "btn btn-primary" >>> kenarlarını rengini hover'ını otomatik olarak verdi.
örneğin; class'a bir outline ekledik
class="btn btn-outline-secondary"

örneğin 3 tane buttonumuz var ve bunlar bir div içerisine aldık. div'in classını "btn-group" yaparak yekpare bir buton grubu oluşturabiliriz.

ya da class'ını btn-toolbar vererek birden fazla div içerisinde bulunan butonları bir araya getirebiliriz.

--- spacing / Margin&Padding ---

class içerisine p-3 vererek paddingini ayarladık.
property - side - size şeklindedir. örneğin 
p(padding)s(start-left)-3(padding değeri yaklaşık 16 px) 
1'den 5e kadar hazır değerleri kullanabiliriz.

centered için örneğin mx-auto diyerek margine x(sağ ve sol) auto verdik ve paddingini 3 verdik. p3

--- border ---
class="border" ile border'ı ayarladık.
border-start
border-top
border-bottom
border-end

border-0 ile kaldırabiliriz. ya da istediğimiz kenarı kaldırabiliriz. örneğin: border-bottom-0

border-primary ile border rengini verebiliriz.

class = "border border-primary" >>> border rengini primary olarak ayarladık.

border-1'den 5'e kadar kalınlığını belirleyebiliriz.

rounded ile kenarlarını yuvarlatabiliriz.
class="border border-3 rounded"
border içine al ve 3. boyutta kullan ve rounded olsun

rounded-top, rounded-bottom, rounded-end, rounded-start ile yuvarlayacağımız yönü de seçebiliriz.

rounded-0 ile bu yuvarlaklığı kaldırabiliriz.   

shadow özelliği ile gölge efekti verebiliyoruz.


--- Aligment - Display --- 

text-aligment işlemini class vererek yapacağız:

"text-center"
"text-end"
şeklinde yapabiliriz.

3 tane div oluşturduk ve ilkine float-start vereceğiz. float alıp sola yaslayacak. yeşil kutumuz altta kaldı.
yeşile float verdik ve  kırmızı sola kaydı.

clearfix ile div'leri birleştirebiliriz.

div blok bir elementtir. fakat class içerisine d-inline diyere onu inline element haline getirebiliriz.

aynı şekilde inline bir elementi d-block olarak getirebiliriz.

d-none ile display:none haline getirdik.

invisible yaparak görünmez hale getirdik. 

display:none ile invisible farklı şeylerdir. invisible'da o alanı hala kaplar ve varmış gibi algılar. display:none'da ise o bloğu tamamen görünmez yapar ve elementler bir üst satıra çıkar

--- sizing ---

w- ile vereceğimiz değer bize yüzde olarak genişliğini belirler.

örneğin:
class="bg-success mb-2 p-4 w-75"
background yeşil, margin bottom 2, padding 4, width yüzde 75

100,75,50 ve 25 olarak değer alır.

aynı özellik height için de geçerli.

h-25, h-50, h-75, h-100
height kullanımı için bir önceki kapsayıcı div'de bir yükseklik belirtmeliyiz ki bu vereceğimiz değerler yukarıdaki değerlere göre yüzdelik şekilde kendini belirlesin.

örneğin bir div verdik ve height'ını 400 px olarak belirledik.
içerisinde 4 tane div oluşturduk ve bunların classını d-inline-block olarak belirledik.
yine classına h-100 yazdık ve bunların height'ını 100 olarak belirledik. diğerlerini de 75,50,25 olarak belirledik.


--- table ---

class'a "table" vererek hızlı bir şekilde tablo oluşturabiliriz.

table table-success diyerek de bir tablo oluşturduk ve rengini belirledik.

table-striped ya da table-hover gibi özelliklerle şekillendirebiliyoruz.