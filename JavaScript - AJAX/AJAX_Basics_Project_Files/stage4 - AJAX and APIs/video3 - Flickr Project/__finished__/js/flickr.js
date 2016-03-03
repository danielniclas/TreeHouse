$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";  // URL:  JSON P request -- ?jsoncallback=?

                                  //  DATA:
    var animal = $(this).text();  //  capture TEXT on the BUTTON

    var flickrOptions = {         //  DATA:  for .getJSON
      tags: animal,               //  Dog, Cat, Moose  --  based on button clicked  (API jQuery parameters)
      format: "json"              //  API jQuery API -- format "json"
    };

    function displayPhotos(data) {      //  CALLBACK Function  -- 'data' argument -- represents JSON data returned by jQuery
                                        //  "data" is a JS object
                                        //  jQuery parsed the return JSON string from the server
                                        //  so the data is actual JS at this point - and can access with JS functions

        var photoHTML = '<ul>';             //  will hold all the HTML for the photo

      $.each(data.items,function(i,photo) {      //  Build the photo elements -- loop through array - WRITE THE HTML for PAGE
                                                 //  each(array, callback function)
                                                 //  i = index value
                                                 //  photo = one item from the array -- we give the array item the name 'photo'

        photoHTML += '<li class="grid-25 tablet-grid-50">';             //  add class
        photoHTML += '<a href="' + photo.link + '" class="image">';     //  add href pointing to image -- Flikr page of image
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';      //  img src
      }); // end each

      photoHTML += '</ul>';                     //  Close the </ul> tag
      $('#photos').html(photoHTML);             //  Add the photo elements to HTML
    }


    $.getJSON(flickerAPI, flickrOptions, displayPhotos);  //  3 arguments:  URL, DATA to send with URL, CALLBACK function

  }); // end click

}); // end ready