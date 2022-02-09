1. örnek:

fibonacci sayıları 1'den başlayarak bir önceki sayının toplamıdır.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... şeklinde devam eder.

bir array oluşturduk ve 2 eleman tanımladık. a ve b'ye 0 ve 1. 
daha sonra res isimli boş bir array oluşturduk.

while döngüsü içerisinde b < n olduğu sürece push metoduyla her döngüde b'yi res'e ekledik.

bir alttaki satırda ise işlemimizi giriyoruz. [a, b] yi her seferinde [b, a+ b] olarak ekle.
while döngüsü bittikten sonra res'i return ediyoruz.


2. örnek:

prompt ile bir sayı alıyoruz. ve 3 tane değişken tanımlıyoruz.
num1, num2 ve result

for döngüsü içerisinde let i = 1; i <= promptdan aldığımız sayıya kadar; ve i'yi her seferinde bir arttır. döngü içerisinde fibonacci işlemini tanımlıyoruz: 
result = num1 + num2;
num1 = num2;
num2 = result;

result = 1 + 2
(num1) 1 = 2
(num2) 2 = 3 (result) böylece bir sonraki sayıyı buluyoruz.
result = 2 + 3 .....