/*
switch(expression){
    case x:
        //code block
        break;
    case y:
        //code block
        break;
    default:
        //code block
}
*/

// örnek 1:
// getDay() metodu ile bu günü içinde bulunduğumuz günü kontrol ediyoruz.

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Pazartesi";
        break;
    case 1:
        day = "Salı";
        break;
    case 2:
        day = "Çarşamba";
        break;
    case 3:
        day = "Perşembe";
        break;
    case 4: 
        day = "Cuma";
        break;
    case 5:
        day = "Cumartesi";
        break;
    case 6:
        day = "Pazar"
        break
}

document.getElementById(example-1).innerHTML = day;