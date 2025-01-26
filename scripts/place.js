function calculateWindChill(tempC, windSpeedKmH) {
    if (tempC <= 10 && windSpeedKmH > 4.8) {
        return Math.round(13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmH, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmH, 0.16));
    } else {
        return 'N/A'; 
    }
}

let temperature = 27;  // in Celsius
let windSpeed = 14;  // in km/h

let windChill = calculateWindChill(temperature, windSpeed);

const weatherBox = document.querySelector('.weather-box');

const windSpeedParagraph = weatherBox.querySelector('p:last-of-type');

windSpeedParagraph.insertAdjacentHTML('afterend', `<p><strong>Wind Chill:</strong> ${windChill === 'N/A' ? windChill : windChill + ' °C'}</p>`);

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;
