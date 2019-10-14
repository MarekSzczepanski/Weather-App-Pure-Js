console.log("test");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Oslo&APPID=ee37e5abb8ef2c3cf384075cf513d7e0";
fetch(url)
.then(response => {
    return response.json()
})
.then(json => console.log(json))