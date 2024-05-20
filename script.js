
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = ;

const getCityCoordinates = () =>{
    const cityName = cityInput.value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = 'https://api.weatherapi.com/v1/forecast.json?key=&q='+ cityName +'&days=5&aqi=no&alerts=no';
   
    fetch (GEOCODING_API_URL) .then(data => {
        data.json().then(json => {
            console.log(json);

            const cityNameDom = document.querySelector('#cityName');
            cityNameDom.innerText = json.location.name;

            document.querySelector('#currentIcon').src = `https://${json.current.condition.icon}`;
            document.querySelector('#currentCondition').innerText = json.current.condition.text;
            document.querySelector('#currentTemp').innerText = json.current.temp_f;
            document.querySelector('#currentWind').innerText = json.current.gust_mph;
            document.querySelector('#currentHum').innerText = json.current.humidity;
        })
    }).catch(() =>{
        alert("An error has occurred while fetching the coordinates!")
    })
}

searchButton.addEventListener("click", getCityCoordinates);
