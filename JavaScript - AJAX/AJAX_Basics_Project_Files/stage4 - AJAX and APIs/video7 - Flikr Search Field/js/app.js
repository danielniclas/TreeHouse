$(document).ready(function() {


 $('form').submit(function (evt) {          //  all event handler functions receive event argument

     evt.preventDefault();                  //  STAY ON PAGE -- using AJAX  don't want to leave the page


     //var searchTerm = $('#search').val();

     var $searchField = $('#search');

     var $submitButton = $('#submit');

     $searchField.prop("disabled",true);
     $submitButton.attr("disabled", true).val("searching....");




    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //var animal = $(this).text();

     var searchTerm = $searchField.val();        //   capture value of search Field .val()


     var flickrOptions = {
      tags: searchTerm,         //  take Search VALUE and add it into AJAX data argument
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
        $searchField.prop("disabled",false);
        $submitButton.attr("disabled", false).val("Search");


    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end form submit

}); // end ready