const forcastapiURL =
    'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=935cd4f7c41172a9c16edf60efa6bcfc';

fetch(forcastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc = jsObject.list[0].weather[0].description;
        document.getElementById('icon1').setAttribute('src', imagesrc);
        document.getElementById('icon1').setAttribute('alt', desc);
        const temp = jsObject.list.filter(x=>x.dt_txt.includes('18:00:00'));
        console.log(temp);

        for(let i=0; i<5; i++){
        document.getElementById(`temp${i}`).textContent = jsObject.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc = jsObject.list[0].weather[0].description;
        document.getElementById(`icon${i}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${i}`).setAttribute('alt', desc);
    }
    })