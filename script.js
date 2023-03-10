var searchBtn = document.querySelector('.btn');
var APIKey = 'cd569bb6e6a6be5c34f883a9f31c95e9';
var citySearch = document.getElementById('cityInput');
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')
var cityName = document.getElementById('cityName')
var humidity = document.getElementById('humidity')
var cityWeather = document.getElementById('cityWeather')
var historyList = document.getElementById("historyList");
var currentDate = (new Date()).toLocaleDateString('en-US');



function setCurrentWewather(Data){
    var city = citySearch.value;
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey + '&units=imperial';
    
    fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);

        cityName.textContent = data.city.name + " " + currentDate;
        temp.textContent = "Temp: " + data.list[0].main.temp + " F°";
        wind.textContent = "Wind: " + data.list[0].wind.speed + " Mph";
        humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";

        for (let i = 0; i < data.list.length; i++) {
            const element = data.list[i];
            console.log(element);
            if (element.dt_txt.includes("12:00:00")) {
                var date = document.createElement("h2")
                date.textContent = element.dt_txt;

                var temp2 = document.createElement("p")
                temp2.textContent = "Temp: " + element.main.temp + " F°";

                var wind2 = document.createElement("p")
                wind2="Wind: " + element.wind.speed + " Mph";

                var hum = document.createElement("p")
                hum.textContent = "Humidity: " + element.main.humidity + "%";

                document.getElementById("weatherCards").append(date,temp2,wind2,hum)
            }
        }
    });
} 


searchBtn.addEventListener("click",setCurrentWewather )