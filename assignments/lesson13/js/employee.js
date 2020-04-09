const apiURL =
'https://ninjawriter222.github.io/assignments/lesson13/json/json.json';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');

        const name1 = document.getElementById('name1');
        name1.textContent = jsObject.employees[0].name;
        const age1 = document.getElementById('age1');
        age1.textContent = jsObject.employees[0].age;
        const phoneNumber1 = document.getElementById('phoneNumber1');
        phoneNumber1.textContent = jsObject.employees[0].phoneNumber;
        const email1 = document.getElementById('email1');
        email1.textContent = jsObject.employees[0].email;
        const certLv1 = document.getElementById('certLv1');
        certLv1.textContent = jsObject.employees[0].certLV;

        const name2 = document.getElementById('name2');
        name2.textContent = jsObject.employees[1].name;
        const age2 = document.getElementById('age2');
        age2.textContent = jsObject.employees[1].age;
        const phoneNumber2 = document.getElementById('phoneNumber2');
        phoneNumber2.textContent = jsObject.employees[1].phoneNumber;
        const email2 = document.getElementById('email2');
        email2.textContent = jsObject.employees[1].email;
        const certLv2 = document.getElementById('certLv2');
        certLv2.textContent = jsObject.employees[1].certLV;

        const name3 = document.getElementById('name3');
        name3.textContent = jsObject.employees[2].name;
        const age3 = document.getElementById('age3');
        age3.textContent = jsObject.employees[2].age;
        const phoneNumber3 = document.getElementById('phoneNumber3');
        phoneNumber3.textContent = jsObject.employees[2].phoneNumber;
        const email3 = document.getElementById('email3');
        email3.textContent = jsObject.employees[2].email;
        const certLv3 = document.getElementById('certLv3');
        certLv3.textContent = jsObject.employees[2].certLV;
    });