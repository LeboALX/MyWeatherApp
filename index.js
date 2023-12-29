var searchHistory = [];
var weatherDetails = [];

// const time = document.getElementById('time');
// const date = document.getElementById('date');
const closeBtn = document.getElementById('click');
const apiKey = "58a13910df54bde6c81acc3ac92cd0be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Polokwane";

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  popUp.style.display = 'none';
});

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  // console.log(data);

  document.querySelector(".location").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
  document.querySelector(".time").innerHTML = data.timezone;
  document.querySelector(".description").innerHTML = data.weather[0].description;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  // document.querySelector(".picture").innerHTML = data.weather[0].id;
}
checkWeather();








