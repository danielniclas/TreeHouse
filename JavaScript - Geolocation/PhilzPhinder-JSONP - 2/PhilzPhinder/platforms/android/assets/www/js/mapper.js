/**
 * Created by Daniel on 5/18/2015.
 */


var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;
var infoBoxText;



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




function initializeX(userLatitude, userLongitude) {                         //  USER LOCATION

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


    myMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    var marker = new google.maps.Marker({                               //  MAP MARKER
        position: latlng,
        map: myMap,
        title: 'You are Here'
    });

    infowindow.setContent("You!");
    infowindow.open(myMap, marker);

}



function mappit(event) {                                            //  MAPPIT FUNCTION for finding sites - OnCLICK EVENT

    console.log("Event: ", event);
    //console.log("Event id: ", event.target.id);
    console.log("Event id: ", event.path[1].id);


    //var siteLat = event.target.getAttribute("data-lat");
    //var siteLon = event.target.getAttribute("data-lon");


    var siteLat = event.path[1].getAttribute("data-lat");
    var siteLon = event.path[1].getAttribute("data-lon");

    console.log("siteLat: ", siteLat);
    console.log("siteLon: ", siteLon);

    codeLatLng(siteLat, siteLon);

    infoBox(event);

}

function infoBox(event) {                                               //  INFO BOX -- Address and Phone Number

    var infoBox = $("#infoBox");

    infoBox.show();

    //var streetAddress = event.target.getAttribute("data-streetAddress");
    //var phone = event.target.getAttribute("data-phone");

    var streetAddress = event.path[1].getAttribute("data-streetAddress");
    var phone = event.path[1].getAttribute("data-phone");
    var hours1 = event.path[1].getAttribute("data-hours1");
    var hours2 = event.path[1].getAttribute("data-hours2");

    infoBoxText = streetAddress + "&nbsp;" + phone + "<br>";

    if (hours1) {
        infoBoxText += hours1 + "<br>";
    }

    if (hours2) {
        infoBoxText += hours2;
    }

    //infoBox.html(streetAddress + " &nbsp" + phone + "<br>" + hours1);
    infoBox.html(infoBoxText);

}



function codeLatLng(lat, lng) {                                                 //  Philz SITE MAP
//            var input = document.getElementById('latlng').value;
//            var latlngStr = input.split(',', 2);

//            var lat = parseFloat(latlngStr[0]);
//            var lng = parseFloat(latlngStr[1]);


    var latlng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            if (results[1]) {                                                           //  results[1] means object returned data
                myMap.setZoom(14);
                marker = new google.maps.Marker({
                    position: latlng,
                    map: myMap
                });


                var stNum = results[0].address_components[0].short_name;                //  Drill down into results object
                var streetName = results[0].address_components[1].short_name;


                console.log("Geo-Code RESULTS: ", results);

                //infowindow.setContent(results[1].formatted_address);
                infowindow.setContent(stNum + " " + streetName);
                infowindow.open(myMap, marker);

            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder stumbled due to: ' + status + ' please try again!');
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);