const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
            console.table(jsonObject);
            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                    const events = document.getElementById('events');
                    events.textContent = jsonObject.towns.events;
                }
            }
        });