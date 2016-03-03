/**
 * Created by Daniel on 5/19/2015.
 */


$("#infoBox").hide();

//$sitesArray = [];
//locations = [];

//      CALLBACK FUNCTION:

function jsonpcallback(data) {
    //do stuff with JSON
    console.log("The DATA:  ", data);

    var statusHTML ;

    $.each(data,function (index, object) {          //  Gather ALL SITE DATA and form an <li> for each one

        //statusHTML = "<li>";
        //statusHTML += "<span data-lat= ' " + object.lat + " ' data-lon= ' " + object.lon + "'data-distance='#'> ? miles </span>";
        //statusHTML += "<input type = 'button' id= ' " + object.id + " ' data-lat= ' " + object.lat + "' data-lon = '" + object.lon +  " ' value= ' " + object.city + "' data-streetAddress = '" + object.streetAddress + " 'data-phone = ' " + object.phone + " ' onclick='mappit(event)'>";
        //statusHTML += "</li>";



        statusHTML = "<li>";
        statusHTML += "<span data-lat= ' " + object.lat + " ' data-lon= ' " + object.lon + "'data-distance='#' class='span-class'> ? miles </span>";
        statusHTML += "<a href='#' class='ui-btn ui-mini ui-btn-inline ui-corner-all site-btn' id= ' " + object.id + " ' data-lat= ' " + object.lat + "' data-lon = '" + object.lon +  " ' value= ' " + object.city + "' data-streetAddress = '" + object.streetAddress + " 'data-phone = ' " + object.phone + "'data-hours1= '" + object.hours1 + "'data-hours2= '" + object.hours2 + "' onclick='mappit(event)'> <p class='p-city'>" + object.city + "</p></a>";
        statusHTML += "</li>";



        //locations.push(object);         //  ARRAY:  stores all location (site) OBJECTS  - ARRAY of OBJECTS
        //$sitesArray.push(statusHTML);    //  ARRAY:  stores all the <li> ITEMS

        $('#siteLocations').append(statusHTML);

        console.log (statusHTML);
        console.log("HOURS!: ", object.hours1);

    });

    getCurrentPosition();
}


//JSONP CALL TO REMOTE SERVER:

(function($) {


//        URL Options:

    var url = "http://philz.danielniclas.com/data/sites.js?callback=jsonpcallback";             //  Sites
    //var url = "http://philz.danielniclas.com/data/nosites.js?callback=jsonpcallback";         //  No Sites



    $.ajax({

        type: 'GET',
        url: url,
        async: false,
        jsonp: 'jsonpcallback',
        contentType: "application/json",
        dataType: 'jsonp',


        success: function (data) {
            console.log("success:", data);

        },
        error: function (e) {

            console.log("ERROR", e);
            console.log("ERROR: ", e.status);
            console.log("ERROR: ", e.statusText);


        }
    });

}) (jQuery);


function reload() {

    location.reload();
}



//  Constructor Function
//function Philz(id, region, city, location, lat, lon) {
//
//    this.id = id;
//    this.region = region;
//    this.city = city;
//    this.location = location;
//    this.latitude = lat;
//    this.longitude = lon;
//}
//
//// South Bay
//var paseo = new Philz ("paseo","South Bay","San Jose", "San Jose State", "37.333471", "-121.884977");
//var cupertino = new Philz ("cupertino","South Bay","Cupertino", "Stevens Creek","37.322551", "-122.034709");
//var gatos = new Philz ("gatos","South Bay", "Los Gatos", "Blossom Hill", "37.235974", "-121.963511");
//var alto = new Philz ("alto","South Bay", "Palo Alto", "Middlefield", "37.429579", "-122.122707");
//var stanford = new Philz ("stanford","South Bay","Palo Alto", "Stanford", "37.442163", "-122.161551");
//var facebook = new Philz ("facebook","South Bay","Menlo Park", "Willow Road", "37.483649", "-122.149505");
//
//// San Francisco
//var mission = new Philz("mission", "San Francisco", "San Francisco", "Mission District", "37.752338","-122.414313");
//var minnesota = new Philz("minnesota", "San Francisco", "San Francisco", "Dogpatch", "37.754471","-122.389898");
//var missionbay = new Philz("missionbay", "San Francisco", "San Francisco", "Mission Bay", "37.775549","-122.393422");
//
//
//var locations = [paseo, cupertino, gatos, alto, stanford, facebook, mission, minnesota, missionbay];



//var unList = document.getElementById('southbay');
//
//for (i=0;i<locations.length;i++) {
//
//    console.log("Number: ", i);
//
//
//    var newList = document.createElement('LI');
//    var newSpan = document.createElement('SPAN');
//    var newInput = document.createElement('INPUT');
//
//    newList.appendChild(newSpan);
//    newList.appendChild(newInput);
//    unList.appendChild(newList);
//
//    newInput.setAttribute("type", "button");
//    newInput.setAttribute("id", locations[i].id);
//    newInput.setAttribute("value", locations[i].city);
//    //$(newList).css("display", "none");
//
//}
//
//
//    var $restaurants = $("span");
//    var i = 0;
//
////Add the "data-lat" and "data-lon" attributes to the <span>
//    $restaurants.each(function () {
//
//        $(this).attr("data-lat", locations[i].latitude);
//        $(this).attr("data-lon", locations[i].longitude);
//        i++;
//
//    });


