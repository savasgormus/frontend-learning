function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let temp = prompt("Enter temperature in Fahrenheit");

while (true){
    if (temp === null) {
        console.log("enter temperature in Fahrenheit or Celsius");
        break;
    } else if (temp === NaN) {
        console.log("enter temperature in Fahrenheit or Celsius");
        break;
    } else if (temp === "") {
        console.log("enter temperature in Fahrenheit or Celsius");
        break;
    } else {    
        let result = fahrenheitToCelsius(temp);
        console.log(`${temp}°F = ${result}°C`);
        break;
    }
}