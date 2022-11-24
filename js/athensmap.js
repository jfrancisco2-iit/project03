function init(){

  var el = document.getElementById('canvas');
  var athensLocation = new google.maps.LatLng(39.327392,-82.101204)
  var mapOptions = {
    center:myLocation,
	zoom:12,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
	  postion: google.maps.ControlPosition.BOTTOM_Center
	}
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: athensLocation,
	map: myMap,
	animation: google.maps.Animation.BOUNCE,
	icon: 'paw.jpg;
  
}

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), 
    {center: {lat: 39.327, lng: -82.101}, 
	zoom: 10});
}

google.maps.event.addDomListener(window, 'load', init);