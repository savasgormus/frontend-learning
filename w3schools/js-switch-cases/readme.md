switch(expression) {
  case value1:
    code block 1;
    break;
  case value2:
    code block 2;
    break;
  default:
    code block 3;
}

Switch ifadesi bir kez değerlendirilir. İfadenin değeri, her bir durumun değeri ile karşılaştırılır.
Eğer eşleştirme sağlanırsa ilgili kod bloğu yürütülür ve break ile operasyon sona erer.

case'e atadığımız durum case sensitive'dir. switch("savaş") ile case "Savaş" aynı değildir. doğal olarak eşleşme sağlanmadığı için default sonucunu çıktı olarak verir.


