let windSpeed;
let temperature;

windSpeed = 50;
temperature = 3.5;

let f = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed ^ 0.16) + (0.4275 * temperature * windSpeed ^ 0.16);

let temperatureText = "Temperature:" + f;
let actuatlTemperatureText = "Wind Speed:" + windSpeed + "  Temperature:" + temperature;

document.querySelector('#weatherTxt').innerHTML = temperatureText;

document.querySelector('#weatherTxt2').innerHTML = actuatlTemperatureText