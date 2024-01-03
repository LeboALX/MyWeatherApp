const search = document.getElementById("search");
const weekday = document.getElementById("weekday");
const closeBtn = document.getElementById('click');
const searchBtn = document.getElementById('searchBtn');
let searcha = document.getElementById('searcha');

const cite = prompt()
const apiKey = "58a13910df54bde6c81acc3ac92cd0be";


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

search.addEventListener('click', (event) =>{
  event.preventDefault();
  popUp.style.display = '';
});


closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  popUp.style.display = 'none';
});

const getStarted = document.getElementById('getStarted');
const popUp = document.getElementById('popUp');
const exit = document.getElementById('exit');
const weatherDetails = document.getElementById('weatherDetails');
const city = document.getElementById('city');
const searchCity = document.getElementById('searchCity');
const imgIcon = document.getElementById('imgIcon');
const prev = document.getElementById('prev');
const dayTime = document.getElementById('dayTime');
const description = document.getElementById('description');
const searchForm = document.getElementById("searchForm")
// const cite = searchCity;
const dataSet = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
// const iconId = data.weather[0].icon;
// const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;

// document.getElementById('weather-icon').src = iconUrl;



function dayTimes(){
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US',{weekday:'long'});
    const currentTime = currentDate.toLocaleTimeString('en-US');

    weekday.innerHTML = `${day} ${currentTime}`;
}

dayTimes()






searchBtn.addEventListener('click',btn=>{
    btn.preventDefault();

    fetch(apiUrl+cite+`&appid=${apiKey}`)
    .then(promise => promise.json())
    .then(response =>{
        // console.log(searcha.value)
        console.log(response)
        console.log(apiUrl+`&appid=${apiKey}`)
        // city.innerHTML = response.name;
        document.querySelector(".locate").innerHTML = response.name;
        document.querySelector(".temp").innerHTML = Math.round(response.main.temp) + deg;C;
        const iconId = response.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
        document.getElementById('imgIconW').src = iconUrl;
        document.querySelector('.humidity').innerHTML = response.main.humidity + "%";
        document.querySelector('.wind').innerHTML = response.wind.speed + "km/h";
        document.querySelector('.description').innerHTML= response.weather[0].description;
        console.log(response.visibility);

        // searcha.value=""

    })
    //  city.innerHTML = searcha.value;
    
})
















