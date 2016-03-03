/**
 * Created by Daniel on 5/18/2015.
 */



$("#error").hide();
$("#hud").show();

if(navigator.geolocation) {

    console.log("In Nav.Geo");
    navigator.geolocation.getCurrentPosition(gotLocation, gotError);
}else{
    console.log("In display Error");
    displayError("Your browser does not support geolocation.");
}



function gotLocation(currentPosition) {



    console.log("In gotLocation");

    $("#hud").hide();

    //var $restaurants = $("span");

    var w = 0;
    $restaurants.each(function(){

        var restaurantLatitude = $(this).data("lat");
        var restaurantLongitude = $(this).data("lon");

        var userPositionLat = currentPosition.coords.latitude;
        var userPositionLon = currentPosition.coords.longitude;

        var distanceInMiles = calculateDistance(userPositionLat, userPositionLon, restaurantLatitude, restaurantLongitude);


        distancesArray = [];
        distancesArray[w] = distanceInMiles;
        w++;

        $(this).text(distanceInMiles + " miles");


        //  HIDE all Philz farther than 20 miles away
        console.log("XXXXX: ",$(this).parent() );

        if (distanceInMiles > 25) {

            $(this).parent().css("display", "none");
        }

    });
}




function gotError(error)  {

    var message;

    switch (error.code) {

        case error.PERMISSION_DENIED:
            message = "You need to give permission to use your location to calculate distances.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "There was an issue getting your position from your device. Please refresh the page";
            break;
        case error.TIMEOUT:
            message = "Took too long getting your position";
            break;
        default:
            message = "An unknown error has occurred.  please refresh the page.";
            break;
        }
        displayError(message);

}



function displayError(message) {
    $('#hud').hide();
    $("#error").text(message).slideDown("slow");
}
