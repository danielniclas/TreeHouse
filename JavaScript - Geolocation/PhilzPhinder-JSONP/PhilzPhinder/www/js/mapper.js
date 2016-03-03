/**
 * Created by Daniel on 5/18/2015.
 */


var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;



function initialize () {

    navigator.geolocation.getCurrentPosition(userLocation);

    function userLocation(position) {

        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;

        console.log("userLatitude: ", userLatitude);
        console.log("userLongitude: ", userLongitude);

        initializeX(userLatitude, userLongitude);
    }
}




function initializeX(userLatitude, userLongitude) {

    geocoder = new google.maps.Geocoder();

    console.log ("User Latitude coord: ", userLatitude);
    console.log ("User Longitude coord: ", userLongitude);

//          var latlng = new google.maps.LatLng(40.730885,-73.997383);

    var latlng = new google.maps.LatLng(userLatitude,userLongitude);

    var mapOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: 'roadmap'
    };

    console.log("In Initialize");

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}


//MAPPIT FUNCTION for finding sites

function mappit(event) {

    console.log("Event: ", event);
    console.log("Event id: ", event.target.id);

    var siteLat = event.target.getAttribute("data-lat");
    var siteLon = event.target.getAttribute("data-lon");
    console.log("siteLat: ", siteLat);
    console.log("siteLon: ", siteLon);

    codeLatLng(siteLat, siteLon);

    infoBox(event);

}

function infoBox(event) {

    var infoBox = $("#infoBox");

    infoBox.show();

    var streetAddress = event.target.getAttribute("data-streetAddress");
    var phone = event.target.getAttribute("data-phone");
    infoBox.html(streetAddress + " &nbsp" + phone);


}



function codeLatLng(lat, lng) {
//            var input = document.getElementById('latlng').value;
//            var latlngStr = input.split(',', 2);

//            var lat = parseFloat(latlngStr[0]);
//            var lng = parseFloat(latlngStr[1]);


    var latlng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                map.setZoom(14);
                marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });

                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);