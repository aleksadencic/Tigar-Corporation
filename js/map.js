function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(43.1669068, 22.591444499999966), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}