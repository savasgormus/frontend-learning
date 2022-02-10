-- Window --
Browser üzerindeki web sayfamızı ifade eder. Global objemizdir. örneğin: console.log yazdığımız özellik aslında window'a aittir. window.console.log
Window > Document > HTML Element > Node > Event

--- Document Object Model ---

html ile js'i ilişkilendiren bir yapıdır. sayfa render edildiğinde dom sayesinde html elementleri objeler haline döndürüyor. Böylece html elementlerimize js ile özel özellikler ekleyebiliriz, manupile edebiliriz ve bir çok değişiklik yapabiliriz.


document.getElementById("first_name"); => "first_name" id'li input alanını yakaladık. firstNameByID isimli bir değişkene atayarak bir obje oluşturduk. ID'ler unique olduğu için tek bir obje getirir.

document.getElementsByClassName("input--style-4") => ile class ismiyle yakaladım. fakat clg yaptığımızda bir collection geldi. class ile yakaladığımızda bu class ismine sahip bütün elementleri yakalar. eğer tek bir tane olsaydı tek elemanlı bir html collection getirirdi. bize 5 elemanlı bir collection getirdiği için [0] index ile istediğimiz eleman olan First Name'e ulaşıyoruz.
çok fazla tercih edilen bir yöntem değildir.

id ile yakalamak her zaman daha hızlıdır.

document.getElementsByName("first_name")[0] => isim ile yakalamaya çalışıyoruz. bu sefer bize bir Nodelist geldi. 0. index ile istediğimiz elemana ulaştık.
Nodelist ile foreach yapabiliriz. HTML collectionda foreach çalıştıramayız. bu yöntemi foreach kullanmak için uygulayabiliriz. 

document.querySelector("#first_name") => id ya da class ile yakalamaya çalışıyoruz. bu sefer bize bir HTML element geldi. querySelector css selectorleri gibi çalışır. örneğin #first_name bir id ismi. ikinci örnekte class ismi vererek aldık. document.querySelector(".input--style-4");