const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then((response) => response.json())
.then((jsObject) => 
{
    console.log(jsObject);
    const towns = jsObject["towns"];
    for (let i = 0; i < towns.length; i++) 
    {
                if (towns[i].name == "Fish Haven") 
                {
                    let h2 = document.createElement('h2');
                    h2.textContent = towns[i].name + " Upcoming events";
                    document.querySelector('div.events').appendChild(h2);
                    let events = towns[i].events;
                    for (let j = 0; x < events.length; x++) 
                    {
                        let p = document.createElement('p');
                        p.textContent = events[x];
                        document.querySelector('div.events').appendChild(p);
                    }
                }
    }
});