function init(){

  var el = document.getElementById('canvas');
  var athensLocation = new google.maps.LatLng(39.327392,-82.101204)
  var mapOptions = {
    center:myLocation,
	zoom:12,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
	  postion: google.maps.ControlPosition.BOTTOM_CENTER
	}
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: athensLocation,
	map: myMap,
	animation: google.maps.Animation.BOUNCE,
	icon: 'paw.jpg;
  }

  google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
	
}
	
google.maps.event.addDomListener(window, 'load', init);