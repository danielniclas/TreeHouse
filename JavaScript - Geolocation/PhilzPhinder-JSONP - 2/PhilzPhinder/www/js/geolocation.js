/**
 * Created by Daniel on 5/18/2015.
 */


$("#error").hide();
$("#hud").show();
$('#restaurants').hide();
$('#content').hide();
$('#siteLocations').hide();


function getCurrentPosition() {                                //  NAVIGATOR.GEOLOCATION.getCurrentPosition()

    if (navigator.geolocation) {
        console.log("In Nav.Geo");
        navigator.geolocation.getCurrentPosition(gotLocation, gotError);

    } else {
        console.log("In display Error");
        displayError("Your browser does not support geolocation.");
    }

};

function gotLocation(currentPosition) {

    var $distanceSpan = $("span");                              //  ALL <span> elements created

    console.log("In gotLocation");



    //var $restaurants = $("span");



    //  LOOP through each <span> ($distanceSpan) and CALCULATE the DISTANCE to the site:  distanceInMiles


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



        if (distanceInMiles > 20) {                             //  HIDE/REMOVE all Philz farther than 20 miles away

            //$(this).parent().css("display", "none");          //  HIDE <li> elements farther than 20 miles away.  Parent of <span>
            $(this).parent().remove();                          //  REMOVE <li> elements farther than 20 miles away.  Parent of <span>
        }

    });



    displayLi();

}



function displayLi() {



    $("#hud").hide();            //  Hide the Progress Bar
    $('#restaurants').show();    //  Show the entire app div
    $('#content').show();        //  Show the content div
    $('#siteLocations').show();


    var newLiArray = [];                     //  ARRAY

    var data = {dataDistance: 0};            //  OBJECT

    var liArray = $("li");                   //  Working with all the <li> Elements already created

    console.log("ARRAY LIST of all <li>:  liArray : ", liArray);

    $.each(liArray, function (index, object) {    //  LOOP through all <li> elements and then create [newLiArray] for each <li> and index of distance

        console.log("THIS:  ", $(this));

        data.dataDistance = $(this).context.firstElementChild.attributes[2].value;      //  DIG OUT 'data-distance' value from <span>


        console.log("ORIGINAL INDEX: ", index);
        console.log("OBJECT: ", object);
        console.log("Data-Distance: ", data.dataDistance);



            var x = data.dataDistance * 10;                        //  Distance sensitivity multiplier
            var newIndex = Math.ceil(x);                           //  create new Index value for object based on DISTANCE

            //var newIndex = parseInt(data.dataDistance);
            console.log("NEW INDEX: ", newIndex);

            newLiArray[newIndex] = object;                        //  combine NEW Index value with OBJECT
                                                                  //  CREATE newLiArray[]


    });

    console.log("newLiArray:", newLiArray);
    console.log("newLiArray.length:", newLiArray.length);


    if (newLiArray.length == 0) {                                //  RED info Box if NO PHILZ within 21 miles

        var infoBox = $("#infoBox");

        infoBox.show();
        $("#infoBox").attr("class", "noSites");
        infoBox.html("Sorry no Philz within 20 miles");

    }




    $.each(newLiArray, function (index, object) {               //  SHOW array objects based on NEW INDEX VALUE

        $('#siteLocations').append(object);                     //  APPEND <li> OBJECTS to the <ul>

        console.log("newArray Objects: ", object);
        //console.log("NEW LENGTH ARRAY LENGTH:  ", newLiArray.length);

    });






    $finalLiArray = $('li');                            //  ONLY DISPLAY 5 SITES - DISPLAY NONE to the rest

    console.log("finalLiArray:  ", $finalLiArray);

    $.each($finalLiArray, function (index, object) {


        if (index > 4) {                                //  ONLY DISPLAY 5 SITES - DISPLAY NONE to the rest

            $(this).css("display", "none");
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
