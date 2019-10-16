console.log("test");
let log;
let icon;
const url = "https://api.openweathermap.org/data/2.5/weather?q=los angeles&APPID=ee37e5abb8ef2c3cf384075cf513d7e0";
fetch(url)
.then(response => {
    return response.json()
})
.then(
    json => {
        document.querySelector("img").src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
        json.main.temp, 
        json.wind.speed, 
        json.main.pressure
    }, 
)
.then(
    
)

