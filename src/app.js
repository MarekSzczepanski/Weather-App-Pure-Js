let city;
let url;
const getWeather = () => {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => err)
}

const showWeather = () => {
    city = document.querySelector(".form-control").value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ee37e5abb8ef2c3cf384075cf513d7e0`;
    document.querySelector(".info").style.display = "block";
    document.querySelector(".info").scrollIntoView({ 
        behavior: 'smooth'
    });
    getWeather().then((data) => {
        document.querySelector("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.querySelector(".temperature-value").textContent = Math.floor(data.main.temp - 273.15) + "°C"
        document.querySelector(".humidity-value").textContent = data.main.humidity + "%"
        document.querySelector(".wind-value").textContent = data.wind.speed + " m/s" 
        console.log(data)
    })
}

document.querySelector(".btn").addEventListener("click", showWeather);
document.querySelector(".form-control").addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        showWeather();
    }
});


