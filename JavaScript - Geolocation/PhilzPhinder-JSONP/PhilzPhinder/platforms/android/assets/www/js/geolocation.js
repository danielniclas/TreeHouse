/**
 * Created by Daniel on 5/18/2015.
 */


$("#error").hide();
$("#hud").show();
$('#restaurants').hide();


function getCurrentPosition() {

    if (navigator.geolocation) {
        console.log("In Nav.Geo");
        navigator.geolocation.getCurrentPosition(gotLocation, gotError);

    } else {
        console.log("In display Error");
        displayError("Your browser does not support geolocation.");
    }

};

function gotLocation(currentPosition) {

    var $distanceSpan = $("span");                              //  working with all the <span> elements already created

    console.log("In gotLocation");

    $("#hud").hide();            //  Hide the Progress Bar
    $('#restaurants').show();    //  Show the entire app div

    //var $restaurants = $("span");



    $distanceSpan.each(function(){

        var restaurantLatitude = $(this).data("lat");
        var restaurantLongitude = $(this).data("lon");

        var userPositionLat = currentPosition.coords.latitude;
        var userPositionLon = currentPosition.coords.longitude;

        var distanceInMiles = calculateDistance(userPositionLat, userPositionLon, restaurantLatitude, restaurantLongitude);

        console.log ("DISTANCE IN MILES: ", distanceInMiles);

        var num = Number(distanceInMiles);          //  String to Number (float)
        var distance = num.toFixed(1);              // to the 10

        $(this).text(distance + " miles");                         //  ADDING distance to the SPAN  TEXT
        $(this).attr("data-distance", distanceInMiles);            //  ADDING distance to the SPAN  Attribute


        //  HIDE all Philz farther than 20 miles away

        if (distanceInMiles > 20) {

            $(this).parent().css("display", "none");            //  HIDE <li> elements farther than 21 miles away.  Parent of <span>
        }

    });

    displayLi();

}



function displayLi() {

    var newLiArray = [];

    var data = {dataDistance: 0};

    var liArray = $("li");                              //  Working with all the <li> Elements already created
    console.log ("AAAAAAAA: ", liArray);

    $.each(liArray,function(index, object){

        console.log("THIS:  ", $(this));

        data.dataDistance = $(this).context.firstElementChild.attributes[2].value;

        console.log("Data-Distance: ", data.dataDistance);
        console.log ("OBJECT: ", object);
        console.log ("ORIGINAL INDEX: ", index);

        if (data.dataDistance <=20) {                    //  <= to 20 ADD to newLiArray

            var x = data.dataDistance * 10;              //  Distance sensitivity multiplier
            var newIndex = Math.ceil(x);                 //  create new Index value for object based on DISTANCE

            //var newIndex = parseInt(data.dataDistance);
            console.log("NEW INDEX: ", newIndex);

            newLiArray[newIndex] = object;                        //  combine NEW Index value with OBJECT
                                                                  //  CREATE newLiArray[]

        }

    });

    console.log("newLiArray:" , newLiArray);
    console.log("newLiArray.length:" , newLiArray.length);

    if (newLiArray.length == 0){                                //  RED info Box if NO PHILZ within 21 miles

        var infoBox = $("#infoBox");
        var li = $("li");

        infoBox.show();
        $("#infoBox").attr("class", "noSites");
        infoBox.html("Sorry no Philz within 21 miles");
        li.css("display", "none");
    }




    $.each(newLiArray, function(index, object){               //  SHOW array objects based on NEW INDEX VALUE

        $('#siteLocations').append(object);                   //  APPEND <li> OBJECTS to the <ul>

        console.log("newArray Objects: ", object);
        //console.log("NEW LENGTH ARRAY LENGTH:  ", newLiArray.length);

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
