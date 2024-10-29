let Celsius = 30; 
let Fahrenheit = 80;

const tempFahrenheit = (Celsius * 9/5) + 32;

console.log(`${Celsius}°C é igual a ${tempFahrenheit}°F`);

const tempCelsius = (Fahrenheit - 32) * 5/9;

console.log(`${Fahrenheit}°F é igual a ${tempCelsius}°C`);
