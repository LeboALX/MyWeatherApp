var searchHistory = [];
var weatherDetails = [];

function getWeather(lat, long){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=58a13910df54bde6c81acc3ac92cd0be`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        weatherDetails = data.weather[0];
        console.log(weatherDetails)
    })
    .catch(error => console.error('Error:', error));  
}

  function geocodeAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('locationInput').value;
    searchHistory.push(address)
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        getWeather(latitude, longitude)
        return
      } else {
        alert('Cannot get current location' + status);
      }
    });
   }

