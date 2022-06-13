// Oefening 1.1
/*
const weatherURL = 'https://fcc-weather-api.glitch.me/api/current?lat=51.16&lon=5.73';

fetch(weatherURL).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    document.querySelector("h2#locatie").innerHTML = `Locatie: ${data.name}`;
    document.querySelector("p#temp").innerHTML = `Temperatuur: ${data.main.temp}`;
    document.querySelector("p#vocht").innerHTML = `Vochtigheid: ${data.main.humidity}`;
    document.querySelector("p#wind").innerHTML = `Wind: ${data.wind.speed}`;
}).catch(error => {
    console.log(error);
});
*/


// Oefening 1.2
/*
// Code van W3Schools
navigator.geolocation.getCurrentPosition(getPosition);

function getPosition(position) {
    const lat =  position.coords.latitude.toFixed(2);
    const long = position.coords.longitude.toFixed(2);
    showWeather(lat, long);
}

function showWeather(lat, long) {
    const weatherURL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    fetch(weatherURL).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        document.querySelector("h2#locatie").innerHTML = `Locatie: ${data.name}`;
        document.querySelector("p#temp").innerHTML = `Temperatuur: ${data.main.temp}`;
        document.querySelector("p#vocht").innerHTML = `Vochtigheid: ${data.main.humidity}`;
        document.querySelector("p#wind").innerHTML = `Wind: ${data.wind.speed}`;
    }).catch(error => {
        console.log(error);
    });
}
*/


// Oefening 1.3
/*
let lat;
let long;
document.querySelector("button#currentLoc").addEventListener('click', getLocation);
document.querySelector("button#NY").addEventListener('click', getLocation);
document.querySelector("button#Madrid").addEventListener('click', getLocation);

// Code van W3Schools
navigator.geolocation.getCurrentPosition(getPosition);

function getPosition(position) {
    lat =  position.coords.latitude;
    long = position.coords.longitude;
}

function getLocation(event) {
    switch(event.target.id) {
        case 'currentLoc':
            showWeather(lat, long);
            break;
        case 'NY':
            showWeather(40.71, -74.00);
            break;
        case 'Madrid':
            showWeather(40.41, -3.70);
            break;
    }
};

function showWeather(lat, long) {
    const weatherURL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    fetch(weatherURL).then(response => {
        return response.json();
    }).then(data => {
        document.querySelector("h2#locatie2").innerHTML = `Locatie: ${data.name}`;
        document.querySelector("p#temp2").innerHTML = `Temperatuur: ${data.main.temp}`;
        document.querySelector("p#vocht2").innerHTML = `Vochtigheid: ${data.main.humidity}`;
        document.querySelector("p#wind2").innerHTML = `Wind: ${data.wind.speed}`;
    }).catch(error => {
        console.log(error);
    });
}
*/


// Oefening 1.4

const url = 'https://molecular-data.p.rapidapi.com/';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'molecular-data.p.rapidapi.com',
        'X-RapidAPI-Key': 'b3002688a6msh653e297af330e8ep1828b2jsndfb6c97cfba3'
    },
    body: '{"moleculeId":"all"}'
};

let teller = 0;
document.querySelector('button#toonMolecule').addEventListener('click', toonMolecule);

function toonMolecule() {
    if (teller === 5) {
        alert('Maximum aantal moleculen bereikt!')
    } else {
        fetch(url, options).then(response => {
            return response.json();
        }).then(data => {
            const number = Math.floor(Math.random() * 10);
            console.log(number);
            document.querySelector("p#molecule").innerHTML = `Molecule: ${data[number].name}`;
        }).catch(error => {
            console.log(error);
        });
        teller++;
    }
}
