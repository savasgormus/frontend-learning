const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
// console.log(countdown);

const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);
  // --- birinci yöntem
  // years.innerHTML = "00";
  // months.innerHTML = "00";
  // days.innerHTML = "00";
  // hours.innerHTML = "00";
  // minutes.innerHTML = "00";
  // seconds.innerHTML = "00";

  // --- ikinci yöntem
  // let h2Elements = document.getElementsByTagName("h2");
  // console.log(h2Elements);
  // for (let index = 0; index < h2Elements.length; index++) {
  //     h2Elements[index].innerHTML = "00"};

  //  --- üçüncü yöntem
  // let h2Elements2 = countdown.querySelectorAll("h2");
  // console.log("h2Elements2",h2Elements2);
  // h2Elements2.forEach((element) => {
  //     console.log(element);
  //     element.innerHTML = "00";
  // })

  let h2Elements = document.getElementsByTagName("h2");
  Array.from(h2Elements).forEach((element) => {
    element.innerHTML = "00";
  });
});

let selectedBirthday = new Date();

let birthdayInput = document.querySelector("input[name='birthday']");
birthdayInput.addEventListener("change", (event) => {
    console.log("dateString", event.target.value);
    // event.target == birthdayInput
    selectedBirthday = new Date(event.target.value);
    console.log("dateObject", selectedBirthday);
    if (selectedBirthday > new Date()) {
        alert("doğum tarihiniz bugünden büyük olamaz");
        return;
    }
    document.body.style.backgroundImage =
    "url('data:image/jpeg;base64,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')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);

});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    // console.log(dobYear);
    let dobMonth = selectedBirthday.getMonth();
    // console.log(dobMonth);
    let dobDay = selectedBirthday.getDate();
    // console.log(dobDay);
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay =   now.getDate();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();

    // bu durumda eğer değerler pozitifse doğru hesaplanıyor.
    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHours - dobHours;
    let minuteOfAge = currentMinutes - dobMinutes;
    let secondOfAge = currentSeconds - dobSeconds;
    // ay kontrolü
    if (monthOfAge < 0) {
        yearOfAge--;
        monthOfAge = 12 + monthOfAge;  // monthOfAge+= 12;
    }
    // gün kontrolü
    if (dayOfAge < 0) {
        monthOfAge--;
        dayOfAge = 30 + dayOfAge;   // dayOfAge+= 30;
    }
    // saat kontrolü
    if (hourOfAge < 0) {
        dayOfAge--;
        hourOfAge = 24 + hourOfAge;   // hourOfAge+= 24;
    };
    // dakika kontrolü
    if (minuteOfAge < 0) {
        hourOfAge--;
        minuteOfAge = 60 + minuteOfAge;   // minuteOfAge+= 60;
    };

    // add values to DOM

    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");

}