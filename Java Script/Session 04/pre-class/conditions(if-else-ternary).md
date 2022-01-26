    1. örnek:

if else yapısını kullanırken tek satırlık bir kod yazacaksak eğer 
{ }'i pas geçebiliriz.

örneğin:
if(score >=50) console.log("asd)

else if yapısı ise :
birinci koşulu sağlamıyorsa diğer koşullara bakar. else gelmeden önce diğer ikincil koşulları kontrol eder. pythondaki elif yapısı ile aynıdır.
else if'i koşullarımızı sağlayana kadar devam ettirebilir. herhangi bir limitimiz yok.

özet: 1. örnekte ilk önce bir değişken atadık ve if yapısı ile sorguladık.
eğer değişkenimiz istediğimiz şartı sağlıyorsa clg ile istediğimiz sonucu aldık. score >= 50
daha sonra else ile sağlamadığı seçeneğin çıktısını aldık. 
ek olarak da farklı opsiyonlar ekleyerek else if yapısını öğrendik.



    --- Ternary yapısı ---
tek satırda if else yazmamızı sağlar.
    2. örnek:

let score = 50;
score > 50 ? console.log(`tebrikler notunuz ${score}.`) : console.log(`üzgünüm notunuz ${score}`);

değişkeni atadık ve bir koşula bağladık.

score > 50 ? ile if yapısını kurduk. clg ile alacağımız cevabı verdik. daha sonra :'den sonra else yapısını kullandık

koşul ? if : else şeklindedir.

    3.örnek:

let username;
username ? console.log(`merhaba ${username}`) : console.log(`please login`);

username diye bir değişken atadık ve if else yapısı kurduk.
eğer username kullanıcı adı girerse clg:
merhaba ${username}
girmezse  alacağımız sonuç:
please login.

    4.örnek:
    
şimdi if, else if ve else kullanarak bir ternary yapısı kullanacağız.

score >= 80 ? console.log(`tebrikler notunuz ${score}`) : --- if conditionumuz.

(score >=50 ? console.log(`sınavdan geçtiniz ${score}`) :
console.log(`üzgünüm kaldınız. ${score}`)); --- else if ve else conditionumuz

iç içe ternary'den kaçınmak daha doğru çünkü kod okunabilirliği açısından sorun teşkil edebilir. 
fakat 3. örneği kullanmak (sadece if ve else) çok daha kullanışlı ve oldukça yaygındır.