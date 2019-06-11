function fetchLocation() {
  return fetch("http://api.open-notify.org/iss-now.json").then(response =>
    response.json()
  );
}

var markers = [];

function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
}

var map;
function initMap() {
  fetchLocation().then(location => {
    var position = {
      lat: parseFloat(location.iss_position.latitude),
      lng: parseFloat(location.iss_position.longitude)
    };

    map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 3
    });

    setInterval(() => {
      fetchLocation().then(location => {
        clearMarkers();
        var position = {
          lat: parseFloat(location.iss_position.latitude),
          lng: parseFloat(location.iss_position.longitude)
        };
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
        markers.push(marker);
      });
    }, 1000);
  });
}
