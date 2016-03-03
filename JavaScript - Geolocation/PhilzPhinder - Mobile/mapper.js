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



google.maps.event.addDomListener(window, 'load', initialize);




function mappit(event) {

    console.log("Event: ", event);
    console.log("Event id: ", event.target.id);

    var target = event.target.id;

    switch (target) {
        case "paseo":

            console.log("ID:", target);
            var x = paseo.latitude;
            var y = paseo.longitude;
            codeLatLng(x, y);
            break;

        case "cupertino":

            console.log("ID:", target);
            var x = cupertino.latitude;
            var y = cupertino.longitude;
            codeLatLng(x, y);
            break;

        case "gatos":

            console.log("ID:", target);
            var x = gatos.latitude;
            var y = gatos.longitude;
            codeLatLng(x, y);
            break;

        case "alto":

            console.log("ID:", target);
            var x = alto.latitude;
            var y = alto.longitude;
            codeLatLng(x, y);
            break;


        case "stanford":

            console.log("ID:", target);
            var x = stanford.latitude;
            var y = stanford.longitude;
            codeLatLng(x, y);
            break;


        case "facebook":

            console.log("ID:", target);
            var x = facebook.latitude;
            var y = facebook.longitude;
            codeLatLng(x, y);
            break;


        case "mission":

            console.log("ID:", target);
            var x = mission.latitude;
            var y = mission.longitude;
            codeLatLng(x, y);
            break;












    }
}


var buttons = document.getElementsByTagName('input');
for (i=0; i<locations.length; i++) {
       buttons[i].onclick = mappit;
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

