'use strict';

const API_KEY = '91c48c77162abbfc79f78f194a056dff';
let city = 'Helsinki';
let city2 = 'Prague';
let city3 = 'Cairo';
let city4 = 'Bangalore';
let city5 = 'Seoul';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(data => {

        const weatherConditions = data.weather[0].description;
        const popupContent = `
      <h2>${data.name}</h2>
      <p>${weatherConditions}</p>
    `;
        EFHK.bindPopup(popupContent);
    });

const map = L.map('map').setView([60.316998732, 24.957996168], 5)
L.tileLayer('https://api.maptiler.com/maps/voyager-v2/{z}/{x}/{y}.png?key=CM8RQD53fPqBa46Rjo28', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);


let EFHK = L.marker([60.316998732, 24.957996168]).addTo(map);
let LKPR = L.marker([50.100499598, 14.255998976]).addTo(map);
let HECA = L.marker([30.119832854, 31.40333172]).addTo(map);
let VOBL = L.marker([13.192665896, 77.70333052]).addTo(map);
let RKSI = L.marker([37.4582357, 126.4763689]).addTo(map);


EFHK.bindPopup("<b>Helsinki</b>");
LKPR.bindPopup("<b>Praha</b>");
HECA.bindPopup("<b>Kairo</b>");
VOBL.bindPopup("<b>Bangalore</b>");
RKSI.bindPopup("<b>Seoul</b>");

const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${API_KEY}`;
fetch(url2)
    .then(response => response.json())
    .then(data => {

        const weatherConditions = data.weather[0].description;
        const popupContent = `
      <h2>${data.name}</h2>
      <p>${weatherConditions}</p>
    `;
        LKPR.bindPopup(popupContent);
    });

const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${API_KEY}`;
fetch(url3)
    .then(response => response.json())
    .then(data => {

        const weatherConditions = data.weather[0].description;
        const popupContent = `
      <h2>${data.name}</h2>
      <p>${weatherConditions}</p>
    `;
        HECA.bindPopup(popupContent);
    });

const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${API_KEY}`;
fetch(url4)
    .then(response => response.json())
    .then(data => {

        const weatherConditions = data.weather[0].description;
        const popupContent = `
      <h2>${data.name}</h2>
      <p>${weatherConditions}</p>
    `;
        VOBL.bindPopup(popupContent);
    });

const url5 = `https://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=${API_KEY}`;
fetch(url5)
    .then(response => response.json())
    .then(data => {

        const weatherConditions = data.weather[0].description;
        const popupContent = `
      <h2>${data.name}</h2>
      <p>${weatherConditions}</p>
    `;
        RKSI.bindPopup(popupContent);
    });



let koordit = JSON.parse(json_koordit);
console.log(koordit.x)
document.querySelector('.goal').addEventListener('click', function (evt) {
    evt.currentTarget.classList.add('hide');
});



