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
                let h3 = document.createElement('h3');
                let div = document.createElement('div')
                let div2 = document.createElement('div')
                let yearfounded = document.createElement('p');
                let population = document.createElement('p');
                let averagerain = document.createElement('p')
                let image = document.createElement('img');
                let sections = document.createElement('sections');
                let h2 = document.createElement('h2');

               

                div.classList.add("words");
                h2.textContent = towns[i].name;
               
                h3.textContent = towns[i].motto;
                
                yearfounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                yearfounded.setAttribute('class', 'yearfounded');
                
                population.textContent = 'Current Population: ' + towns[i].currentPopulation;
                population.setAttribute('class', 'population');
                
                averagerain.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;
                averagerain.setAttribute('class', 'averagerain');
                
                div2.classList.add("img");
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                image.setAttribute('class', 'townimage');
                document.querySelector('div.city').appendChild(sections);
                
                
                sections.appendChild(div);
                sections.appendChild(div2);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(yearfounded);
                div.appendChild(population);
                div.appendChild(averagerain);
                div2.appendChild(image);}
        }

    });