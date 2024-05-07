const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "937ec78d884dbc433a7dc76eccdb4603"

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();// Get user entered city name and remove extra spaces
    if(!cityName) return; //Return if cityName is empty
    const GEOCODING_API_URL = 'http://api.openweathermap.org/data/2.5/direct?q=${cityName}&limit=1&appid=${API_KEY}'

    
}
searchButton.addEventListener("click", getCityCoordinates);