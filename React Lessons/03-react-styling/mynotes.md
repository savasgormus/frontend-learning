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


 - regular

öncelikle styleSheet.css dosyamızı import ediyoruz. böylece css dosyasında yaptığımız her değişiklik componentimizde görüntülenecek. yine aynı şekilde app.js içerisine şu an çalışacağımız StyleSheet.jsx dosyasını import ettik.