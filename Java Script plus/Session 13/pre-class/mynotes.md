MAP nesnesi, key: value çiftlerini tutar ve key'in orjinal ekleme sırasını hatırlar. objeler ya da primitive'ler key/value olabilir.


clg(map1.get("a")) ile map1'in key'i "a" olan değeri alır.

clg(map1.size) ile map1'in boyutunu kaç elemanlı olduğunu gördük.


16:
bir array içerisindeki numaralar 2 ile çarpacağız:
foreach methodu ile: number,index =>
    numbers[index] = number * 2;

burada orjinal dizimizi değiştirmiş olduk.

şimdi MAP ile yapacağız:

numbers.map(function(number){
    return number * 2;
});










12:
bir array oluşturdum (arr)
FUNCTION cleanArr(arr) {
    bir MAP oluşturduk:
    FOR döngüsü içerisinde array'in valuelarını alıp
    {
        key = value.lowercase, split, sort ve join
        map.set(key, value) keyleri value'lara atadım
    }
    array içerisindeki map value'larını return et.
}