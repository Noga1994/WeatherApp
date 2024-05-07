const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");


const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();// Get user entered city name and remove extra spaces
    if(!cityName) return; //Return if cityName is empty
    const GEOCODING_API_URL = http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={937ec78d884dbc433a7dc76ecccdb4603}

    console.log
}
searchButton.addEventListener("click", getCityCoordinates);