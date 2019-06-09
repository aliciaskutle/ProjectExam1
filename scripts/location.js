var map;
function initMap() {
  fetch("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(location => {
      console.log(location);
      var position = {
        lat: parseFloat(location.iss_position.latitude),
        lng: parseFloat(location.iss_position.longitude)
      };
      map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 3
      });
      var marker = new google.maps.Marker({
        position: position,
        map: map
      });
    });
}
