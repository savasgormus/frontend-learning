--- Alerts ---

bir div oluşturduk ve class = "alert alert-success" ile textin backgroundını, yerini ve diğer stil özelliklerini otomatik olarak ayarladık.
örneğin bir JS kodu yazdık ve bu uyarının görünmesini istedik.
bu elementin içerisine a tagi koyabiliriz. a class = "alert-link" ile link ekleyebiliriz.

ayrıca button ekleyebiliriz. class="btn-close" ile çarpı işareti verdik.
kapsayıcı div içerisine "alert-dismissible" classını eklediğimizde otomatik olarak sola yaslar ve stilize eder. yine class içerisine "fade" ekleyerek fade in fade out animasyonu ekleyebiliriz. ya da "show" classını ekleyerek direkt görünür yapabiliriz.
<div class="alert alert-info alert-dismissible fade show">


button içerisine data-bs-dismiss="alert" ile alertı kapatmak için kullanılır. böylece X işaretine bastığımızda alert otomatik olarak kapanır.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>


--- Forms ---

öncelikle kapsayıcı bir <div> oluşturuyoruz. 
<div class="input-group">
    label içerisine "input-group-text" classını ekliyoruz. ve bu label için bir input oluşturup class olarak "form-control" ekliyoruz.
    <label for="" class="input-group-text">Username</label>
    <input type="text" class="form-control">
</div>
label yerine bunu <span> ile de yapabiliriz. 

şimdi table'lar kullanarak bir form oluşturacağız:

<table class="table bt-warning"> tablomuzu oluşturduk ve backgroundunu verdik
<tr> içerisinde <td> oluşturduk ve içerisine bir <img> yükledik ve inline css ile genişliğini verdik.
ikinci bir <td> içerisine ise <h5> ve <p> ile gerekli yazıları yazdık.
</tr>

<tr> ikinci satırı oluşturduk. class ile backgroundını verdik.
    <td> içerisine div içerisinde yukarıda yaptığımız username input'unu yazdık. fakat <td colspan="2"> ile bu td'yi uzatmalıyız.

    aynı işlemleri email ve adres için de uyguluyoruz.

   <div class="input-group mt-3">
            <label for="email" class="input-group-text w-25">Email</label>
            <input type="email" id="email" class="form-control">
          </div>

   <div class="input-group mt-3">
            <label for="address" class="input-group-text w-25">Address</label>
            <input type="textarea" id="address" class="form-control">
          </div>
    bu 3 div'in classı içerisineki span/label'lara w-25 ekleyerek genişliğini ayarladık ve böylede responsive oldular.



  </td>
</tr>



</table>