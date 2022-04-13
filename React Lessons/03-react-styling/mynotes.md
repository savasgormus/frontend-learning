 - --- React Styling ---


 - inline styling


"rafce" ile template'i oluşturduk. h1 içerisine mesajımızı yazdık ve görmek için "app.js" dosyasına import ettik.

div içerisine style={{}} vereceğiz. {{}}  ile yazıyoruz çünkü birincisi JS ile alakalı bir obje oluşturduğumuz için. ikinci süslü parantez ise JSON formatında bir dizi oluşturduğumuz için.

eğer dışarıda oluştursaydık:
const myStyle = {
    backgroundColor:"red"
}  şeklinde olacaktı.

stil için verdiğimiz değer "" içerisinde olacak. JSON formatında olduğu gibi.

return() içerisinde yazdığımız her kod JSX fakat dışında yazdıklarımız JS.

şimdi JS objesi olarak inline style vereceğiz. yukarıya const myStyle ile bir değişken oluşturacağız.

iç içe stiller de oluşturabiliriz. örneğin myStyles içerisinde paragraflar için ayrı div için ayrı birer stil oluşturduk 

şimdi bu oluşturduğumuz stilleri çağıralım: style={myStyle.div} ya da {myStyle.parag}


 - regular styling


öncelikle styleSheet.css dosyamızı import ediyoruz. böylece css dosyasında yaptığımız her değişiklik componentimizde görüntülenecek. yine aynı şekilde app.js içerisine şu an çalışacağımız StyleSheet.jsx dosyasını import ettik.

şimdi css dosyasında stillerimizi vermek için yine html elementlerine class isimlerini atadık. şimdi css dosyamıza gidiyoruz.

css dosyasında yaptığımız herşey bildiğimiz css yazımı ile ilgili öğrendiğimiz şeyler. react ile alakası yok.

şimdi props ile stil vermeyi deneyeceğiz. ana class'a giden veriye göre 2 farklı stil alacak componentimiz:

"once" ve "sonra" diye 2 farklı class stili oluşturuyoruz.
App.js dosyasından StyleSheet.jsx'e ne yolluyor ise ternary yapı ile p tagimizi değiştireceğiz.

App.js dosyasında <StyleSheet secenek={true}/> yani seçenek olarak bir props yolluyoruz.
const StyleSheet = (props) ile başlıyoruz.  buradaki props aslında app.js'den gelen "secenek={true}" demek. eğer (props.secenek) der ise direkt true'yu almış oluruz.

şimdi p tagi içerisine className olarak bir ternary yazacağız:
{props.secenek ? "once" : "sonra"} 
eğer parent elementten gelen props(app.js'den gelen props) true ise css dosyasında verdiğimiz "once" stilini uygula. false ise "sonra" stilini uygula.

yine bunun bir alternatif yolu ise return'un üstünde bu ternary ifadesini bir değişkene atayabiliriz. örneğin:
const isSecenek = props.secenek ? "once" : "sonra";

daha sonra p taginin className={isSecenek} şeklinde değiştirebiliriz. bu yöntem best practice açısından daha uygundur.


 - scss styling ve country cards uygulaması:


şimdi bir ülke kartları uygulaması yapacağız. öncelikle ülkeler için gerekli bilgilerin bulunduğu data.js dosyasını app.js'e import ediyoruz. daha sonra yine src klasörümüze sass ile ilgili dosyalarımızı koyacağımız klasörü oluşturduk ve bu klasöre gerekli componentlerimizi yarattık:
_button.scss, _reset.scss, _variables.scss

_variables.scss dosyası içerisine $darkestGreen:#5b7347 gibi daha sonra kullanacağımız renkleri tanımladık. hatırlatma: sass/scss gibi stillendirme işlemlerinde yine react'ın kendisinde oluşturduğumuz gibi component yapısını kullanıyoruz. 

bu işlemleri tamamladıktan sonra tek tek hepsini import etmemek için toplayıcı bir style.scss dosyası oluşturduk ve bu componentlerimizi import ettik:
@import "variables";
@import "reset";
@import "buttons";

şimdi src/components/card/Card.jsx dosyasına geliyoruz. "rafce" ile yapımızı oluşturuyoruz ve yine aynı klasör içerisinde bulunan Card.scss stil dosyamızı import ediyoruz( import "./Card.scss" ). Daha sonra Card.jsx'i App.js'ye import ediyoruz.

app.js'de işimiz bitmedi. import ettiğimiz data.js dosyasını şimdi <Card veri={data}/> şeklinde componentimize bağladık. böylece data.js dosyasından aldığımız bütün bilgiler "veri" ismiyle Card.jsx'e gidiyor.

şimdi console.log(props) ile parent'dan gelen veriyi görelim. verinin içerisinde 4 elemanlı bir array görüyoruz(data.js).
buradaki props aslında app.js'de yazdığımız veri={data}.
console.log({veri}) yazarsak daha kısa direkt object içerisindeki arrayi görebiliriz. yani aslında {veri} yazarak içerisindeki "data"ya ulaşmış oluyoruz.

şimdi bu array'in içerisindeki elemanlara tek tek ulaşalım.
<h1>{veri[0].countries}</h1> => veri'nin 0. elemanından countries'i getirdik.
<img src={veri[0].img}> => verinin 0. elemanından img'yi getirdik ...

burada birden fazla ülke var. doğal olarak hepsi için tek tek bir card açıp içerlerine h1,img,p vs gibi html elementleri açmak çok fazla zaman alır. bu yüzden sadece 1 tane card yapısı oluşturup map fonksiyonu ile tek tek hepsini çağıracağız.

şu an jsx ortamında olduğumuz için (return içerisindeki kapsayıcı div) {} ile yazacağız:

{veri.map((eleman) =>
    return(
      <div>  
        <h1>{eleman.countries}</h1>
        <img src={eleman.img}>
      </div>
))}

özet: verinin içerisinde map ile dolaşacağız. dolaştığımız her bir parçaya "eleman" ismini verdik. map fonksiyonunu ise şunu return etmesini istiyoruz. div içerisinde h1 elementi: içeriği ise {eleman.countries}, img elementi {eleman.img} ... vs

ya da destructing yöntemi ile eleman'ı parçalayarak yapabiliriz:

 {veri.map((eleman) => {
                const { id,countries, img, capital, population } = eleman;
                return (
                    <div className='card' key={id}>
                        <h1>{countries}</h1>
                        <img src={img} alt="" />
                        <h2>{capital}</h2>
                        <p>{population}</p>
                    </div>
                )
            })}

şimdi stil kısmına geçiyoruz: - Card.scss - 

@import "../../sass/style.scss";
style dosyamızı import ettik. (sass klasörü içerisinde componentleri style.scss dosyasına daha önceden import etmiştik.)
Card.jsx'deki className atamalarını yaptıktan sonra scss dosyamıza geçebiliriz.

.container{
    display, flex-direction, align-items, text-align, gap, margin-top, margin-bottom

    .card{
    max-width, min-width, border-radius, box-shadow, width, padding
    .img{
        width, box-shadow, margin-top
    }
    h1{
        color: $acıkkırmızı (_variables.scss dosyası içerisine tanımladığımız değişkeni atıyoruz.)
    }
    }   
}

şimdi Card.jsx'e 2 tane button ekledik. map'in içerisinde bulunduğu div'in içine eklediğimiz için butonlarımız hepsine geldi.

sass klasörü içerisindeki _button.scss dosyasına geçiyoruz: @import "./variables"; ile renk için kullandığımız değişkenleri import ettik.
şimdi vereceğimiz stiller en son eklediğimiz butonları şekillendirecek. çünkü buttons'ı style.scss'e import ettik. style.scss'i de card.scss dosyasına import etmiştik.

.card{ (ortak olan className)
    &--{ (card'ın içerisinde -- diye devam eden)
        &small{ (card-- içerisinde small diye devam eden)
            background-color: $darkestGreen;
            padding: 5px;
        }

        &large{
            background-color: $darkGreen;
            padding: 5px 10px;
            margin-left: 5px;
        }
    }
    button{ (card classının içerisinde button tag'ine sahip)
        border-radius: 5px;
        color: white;
        margin-top: 5px;
    }
}