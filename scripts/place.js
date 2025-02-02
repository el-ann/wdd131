document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent += document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    // Check if the conditions for windchill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) { // Conditions in metric units (Celsius, km/h)
        // Windchill formula for Celsius
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else if (temperature <= 50 && windSpeed > 3) { // Conditions for imperial units (Fahrenheit, mph)
        // Windchill formula for Fahrenheit
        return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        // If the conditions are not met, return "N/A"
        return "N/A";
    }
}

// Static temperature and wind speed values for this example
const temperature = 27; // in Celsius
const windSpeed = 14; // in km/h

// Call the function and display the windchill factor in the Weather section
const windChill = calculateWindChill(temperature, windSpeed);

// Update the windchill value on the page
document.getElementById('windChill').textContent = windChill;
