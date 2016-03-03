/**
 * Created by Daniel on 5/18/2015.
 */


$("#error").hide();
$("#hud").show();

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(gotLocation, gotError);
}else{
    displayError("Your browser does not support geolocation.");
}

function gotLocation(currentPosition) {
    $("#hud").hide();

    var $restaurants = $("span");

    $restaurants.each(function(){
        var restaurantLatitude = $(this).data("lat");
        var restaurantLongitude = $(this).data("lon");

        var distanceInMiles = calculateDistance(currentPosition.coords.latitude, currentPosition.coords.longitude, restaurantLatitude, restaurantLongitude);

        $(this).text(distanceInMiles + " miles");
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
