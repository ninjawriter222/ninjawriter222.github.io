const apiURL =
    'https://api.openweathermap.org/data/2.5/weather?lat=33.9&lon=-88.13&units=imperial&APPID=935cd4f7c41172a9c16edf60efa6bcfc';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');

        const high = document.getElementById('high');
        high.textContent = jsObject.main.temp_max;
        var high1 = jsObject.main.temp_max;
        const low = document.getElementById('low');
        low.textContent = jsObject.main.temp_min;
        var low1 = jsObject.main.temp_min;
        const humidity = document.getElementById('humidity');
        humidity.textContent = jsObject.main.humidity;
        const wSpeed = document.getElementById('wSpeed');
        wSpeed.textContent = jsObject.wind.speed;
        var wSpeed1 = jsObject.wind.speed;
        const element = document.getElementById('element');
        element.textContent = jsObject.weather["0"].main;

        var tempaverage = ((high1 + low1) / 2);

        
            windChill = 35.74 + 0.6215 * tempaverage - 35.75 * Math.pow(wSpeed1, 0.16) + 0.4275 * tempaverage * Math.pow(wSpeed1, 0.16);
            windChill = Math.round(windChill) + "&deg;F";
        
        document.getElementById("windChill").innerHTML = windChill;

    });