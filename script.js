const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "38314d28f3134ec48b705538241005";

const getCityCoordinates = () =>{
    const cityName = cityInput.value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = 'http://api.weatherapi.com/v1/forecast.xml?key=38314d28f3134ec48b705538241005&q='+ cityName +'&days=5&aqi=no&alerts=no';
   
    fetch (GEOCODING_API_URL) .then(data => {
        console.log(data);
    }).catch(() =>{
        alert("An error has occurred while fetching the coordinates!");
    });
}

searchButton.addEventListener("click", getCityCoordinates);
