
const api_key = "db52551f459e833c5367d41110d445bf";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search-box input");
const search_button = document.querySelector(".search-box button");
const weather_icon = document.querySelector(".weather-icon");
let weather_condition = document.querySelector(".condition");

async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
        weather_icon.src = "images/sweating.png";
        weather_condition.innerHTML = "Soligt";
    }

    else if (data.weather[0].main == "Clouds") {
        weather_icon.src = "images/tanning.png";
        weather_condition.innerHTML = "Molnigt";
    }

    else if (data.weather[0].main == "Rain") {
        weather_icon.src = "images/rainy-day.png";
        weather_condition.innerHTML = "Regnigt";
    }

    else if (data.weather[0].main == "Snow") {
        weather_icon.src = "images/winter-clothing.png";
        weather_condition.innerHTML = "";
    }

    else if (data.weather[0].main == "Mist") {
        weather_icon.src = "images/weakness.png";
        weather_condition.innerHTML = "Dimmigt";
    }

    document.querySelector(".weather-info").style.display = "block";
}

search_button.addEventListener("click", ()=> {
    checkWeather(search_box.value);
})
