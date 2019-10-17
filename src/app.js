console.log("test");
let log;
let icon;
const url = "https://api.openweathermap.org/data/2.5/weather?q=new york&APPID=ee37e5abb8ef2c3cf384075cf513d7e0";
fetch(url)
.then(response => {
    return response.json()
})
.then(
    json => {
        document.querySelector("img").src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
        document.querySelector(".temperature-value").textContent = Math.floor(json.main.temp - 273.15) + "°C", 
        document.querySelector(".humidity-value").textContent = json.main.humidity + "%"
        document.querySelector(".wind-value").textContent = json.wind.speed + "m/s", 
        console.log(json)
    }, 
)
