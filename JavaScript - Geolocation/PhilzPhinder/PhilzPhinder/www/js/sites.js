/**
 * Created by Daniel on 5/20/2015.
 */


jsonpcallback(

    {
        "id": "123",
        "comments": "6",
        "name": "Koost",
        "food":  "Bones"
    }



);



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
var minnesota = new Philz("minnesota", "San Francisco", "San Francisco", "Dogpatch", "37.754471","-122.389898");
var missionbay = new Philz("missionbay", "San Francisco", "San Francisco", "Mission Bay", "37.775549","-122.393422");


var locations = [paseo, cupertino, gatos, alto, stanford, facebook, mission, minnesota, missionbay];
