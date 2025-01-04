// biến
const apikey = "f55e14587480d197af5d0c5975af8adc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// kiểm tra dữ liệu thành phố
async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);
        // Update data thời tiết
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        // Set icon dựa theo dữ liệu
        if(data.weather[0].main === "Clouds") { weatherIcon.src = "https://i.postimg.cc/FRncq0n9/clouds.png"; } 
        else if(data.weather[0].main === "Clear"){ weatherIcon.src = "https://i.postimg.cc/L4wL3B1D/clear.png"; } 
        else if(data.weather[0].main === "Rain"){ weatherIcon.src = "https://i.postimg.cc/28WvcbdD/rain.png"; } 
        else if(data.weather[0].main === "Drizzle"){ weatherIcon.src = "https://i.postimg.cc/Qdr7R8SW/drizzle.png"; } 
        else if(data.weather[0].main === "Mist"){ weatherIcon.src = "https://i.postimg.cc/qvXbNM78/mist.png"; } 
    }
        
// test button
 catch (error) {
        console.error(error);
        alert("Error fetching weather data: " + error.message);
    }
}
// button search
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


