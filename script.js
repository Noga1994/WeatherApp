const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");


const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();// Get user entered city name and remove extra spaces
    if(!cityName) return; //Return if cityName is empty
    const GEOCODING_API_URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + &appid={937ec78d884dbc433a7dc76ecccdb4603};
 
    fetch(GEOCODING_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Print the data received from the API to the console
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
searchButton.addEventListener("click", getCityCoordinates);
