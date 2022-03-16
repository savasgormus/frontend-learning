const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => temp *1.8 + 32;

const calculateTotal = (price, vat = 0.18) => price * (1 + vat);