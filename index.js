const search = document.getElementById("search");
const weekday = document.getElementById("weekday");
const closeBtn = document.getElementById('click');
const searchBtn = document.getElementById('searchBtn');
let searcha = document.getElementById('searcha');
const popUp = document.getElementById('popUp');
const imgIcon = document.getElementById('imgIcon');
const dayTime = document.getElementById('dayTime');
// const cite = prompt()


const apiKey = "58a13910df54bde6c81acc3ac92cd0be";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

search.addEventListener('click', (event) =>{
  event.preventDefault();
  popUp.style.display = "block";
});


closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  popUp.style.display = 'none';
});

function dayTimes(){
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US',{weekday:'long'});
    const currentTime = currentDate.toLocaleTimeString('en-US');

    weekday.innerHTML = `${day} ${currentTime}`;
}

dayTimes()


searchBtn.addEventListener('click', event=>{
    event.preventDefault();

    fetch(apiUrl+searcha.value+`&appid=${apiKey}`)
    .then(promise => promise.json())
    .then(response =>{
        console.log(response)
        console.log(apiUrl+`&appid=${apiKey}`)
        document.querySelector(".locate").innerHTML = response.name;
        document.querySelector(".temp").innerHTML = Math.round(response.main.temp) + "&deg;C";
        const iconId = response.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
        document.getElementById('imgIconW').src = iconUrl;
        document.querySelector(".humidity").innerHTML = response.main.humidity + "%";
        document.querySelector(".wind").innerHTML = response.wind.speed +  "km/h";
        document.querySelector(".description").innerHTML= response.weather[0].description;
        console.log(response.visibility);

        // searcha.value=""

    })
    //  city.innerHTML = searcha.value;
    
})
















