/**
 * Created by Daniel on 5/19/2015.
 */



//  Constructor Function
function Philz(id, region, city, location, lat, lon) {

    this.id = id;
    this.region = region;
    this.city = city;
    this.location = location;
    this.latitude = lat;
    this.longitude = lon;
}

// South Bay
var paseo = new Philz ("paseo","South Bay","San Jose", "San Jose State", "37.333471", "-121.884977");
var cupertino = new Philz ("cupertino","South Bay","Cupertino", "Stevens Creek","37.322551", "-122.034709");
var gatos = new Philz ("gatos","South Bay", "Los Gatos", "Blossom Hill", "37.235974", "-121.963511");
var alto = new Philz ("alto","South Bay", "Palo Alto", "Middlefield", "37.429579", "-122.122707");
var stanford = new Philz ("stanford","South Bay","Palo Alto", "Stanford", "37.442163", "-122.161551");
var facebook = new Philz ("facebook","South Bay","Menlo Park", "Willow Road", "37.483649", "-122.149505");

// San Francisco
var mission = new Philz("mission", "San Francisco", "San Francisco", "Mission District", "37.752338","-122.414313");




var locations = [paseo, cupertino, gatos, alto, stanford, facebook, mission];



var unList = document.getElementById('southbay');

for (i=0;i<locations.length;i++) {

    console.log("Number: ", i);


    var newList = document.createElement('LI');
    var newSpan = document.createElement('SPAN');
    var newInput = document.createElement('INPUT');

    newList.appendChild(newSpan);
    newList.appendChild(newInput);
    unList.appendChild(newList);

    newInput.setAttribute("type", "button");
    newInput.setAttribute("id", locations[i].id);
    newInput.setAttribute("value", locations[i].city);
    //$(newList).css("display", "none");

}


    var $restaurants = $("span");
    var i = 0;

//Add the "data-lat" and "data-lon" attributes to the <span>
    $restaurants.each(function () {

        $(this).attr("data-lat", locations[i].latitude);
        $(this).attr("data-lon", locations[i].longitude);
        i++;

    });


