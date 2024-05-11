const currentYear = new Date().getFullYear();//get the current year
//update the content of the span element with current year
document.getElementById('currentYear').textContent = currentYear;

function getLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent += lastModified;
}

document.addEventListener('DOMContentLoaded', getLastModifiedDate);

const temperatureCelsius = 10;
const windSpeedKph = 19;

function calculateWindChill (temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChillCelsius.toFixed(1);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const windChillElement = document.getElementById("wind-chill");

    const windChill = calculateWindChill(temperatureCelsius, windSpeedKph);
    windChillElement.textContent = windChill;
    });  

