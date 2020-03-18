const apiURL =
    'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=935cd4f7c41172a9c16edf60efa6bcfc';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description;
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

        const high = document.getElementById('high');
        high.textContent = jsObject.main.temp_max;
        const low = document.getElementById('low');
        low.textContent = jsObject.main.temp_min;
        const humidity = document.getElementById('humidity');
        humidity.textContent = jsObject.main.humidity;
        const wSpeed = document.getElementById('wSpeed');
        wSpeed.textContent = jsObject.wind.speed;

        
        var tempaverage = ((high + low) / 2);

            var windChill = 35.74 + 0.6215 * tempaverage - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * tempaverage * Math.pow(wSpeed, 0.16);
            windChill = Math.round(windChill);

        document.getElementById("windChill").innerHTML = windChill;
    });