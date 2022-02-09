1. öncelikle kapsayıcı bir container oluşturduk.

div.content.content${content$}*10 ile 10 tane content oluşturdum.

2. display: grid ile başlıyoruz. 
grid-template-columns ve grid-template-rows kapsayıcı div'i ilgilendiriyor. buraya verdiğimiz değerler grid'in kaç satır ve sütun olacağını belirtiyor.

klavuz çizgilerimizi oluşturduk.

column-gap ve row-gap ile sütunlar ve satırlar arasındaki boşlukları ayarlıyoruz. shorthand ile (gap: 10px 20px) de yapabiliriz. 

min-content ile bölemeyeceği en küçük yapıya göre şekilleniyor.
max-content ile içerik bitene kadar devam ediyor. hiçbir şekilde alt satıra inmez.
min-max(100px,240px) ile en küçük yapıya göre şekilleniyor. en büyük yapıya göre şekilleniyor.

auto ile içerik bitene kadar devam ediyor. responsive için kullanılır. örneğin kenarları yüzde 10 verdik ve ortadaki contenti otomatik olarak ayarladık.

fraction özelliği:
grid-template-column: 1 fr 1fr 1fr 2fr; ile parçalara böldük. repeat(3,1fr) ile 3 tane 1fr olarak bölüyoruz.

area tanımlama işlemini yapacağız. grid-column-start ile başlayacağımız çizgiyi end ile de biteceği çizgiyi belirtiyoruz.