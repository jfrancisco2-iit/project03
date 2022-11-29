function init(){

  var map = new google.maps.Map(document.getElementById("canvas"), {
    zoom: 10,
    center: {lat: 39.327392, lng: -82.101204},
  });

  var alumniGate = new google.maps.Circle({
    center:{lat: 39.327392, lng: -82.101204},
    radius:100,
    strokeColor:"#354A21",
    fillColor:"#728C69",
    map: map
  });  

  var marker = new google.maps.Marker({
    position: {lat: 39.327392, lng: -82.101204},
    map: map,
  });

  var contentString = "<p>This is where the Ohio University Alumni Gate is.</p>";
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;