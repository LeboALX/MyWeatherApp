let searchHistory = []

const apiUrl = '';
fetchData(apiUrl)
  .then(data => {
    
    console.log('Fetched data:', data);
  });

  function geocodeAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('locationInput').value;

    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        var output = document.getElementById('output');
        output.innerHTML = '<strong>Latitude:</strong> ' + latitude + '<br><strong>Longitude:</strong> ' + longitude;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
   }

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
