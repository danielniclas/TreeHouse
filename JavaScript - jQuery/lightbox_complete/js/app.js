
//Problem: User when clicking on image goes to a dead end -- poor user experience
//Solution: Create an overlay with the large image - Lightbox


//Plan:
//1.  Capture the click event on the entire list item - link to an image
//  1.1.  Show the overlay
//  1.2   Update the overlay with the image linked in the link
//  1.3.  Get child's alt attribute and set caption
//2.  Add overlay
//  2.1  An image
//  2.2  A caption
//3.  When overlay is clicked
//  3.1.  Hide the overlay

//  jQuery METHODS:  *****************

//  .attr()
//  .preventDefault()
//  .append()
//  .text()
//  .children()

//  jQuery METHODS:  *****************

    //  CREATE the OVERLAY ELEMENT with IMAGE and CAPTION and APPENDING to BODY:
    //  CREATE DOM ELEMENT and NOT USE IT YET  --  $('<div id="overlay"></div>') -- String
    //  CREATE Disembodied Elements:

    var $overlay = $('<div id="overlay"></div>');       // '$overlay' --  jQuery representation of object
    var $image = $("<img>");
    var $caption = $("<p></p>");

    //  APPEND:
    $overlay.append($image);            // APPEND image to $overlay
    $overlay.append($caption);          // APPEND caption to $overlay
    $("body").append($overlay);         // APPEND $overlay to <body>

//Capture the click event on a link to an image  --  CLICK EVENT  ********************
    $("#imageGallery a").click(function(event){     // ul id:  #imageGallery + a (a for anchor)


      // Build a CUSTOM CLICK EVENT:
      //  Clicking on something is an 'event' -- .preventDefault() is from Events Documentation
      event.preventDefault();                       // need to prevent default browser behavior
                                                    // Pass in an 'event'
                                                    // AND prevent default behavior
                                                    //  default behavior is some ~weird thing~ the browser does

      // .this is the attribute (href) of the anchor (a) we clicked on:
      // stored as a variable --  STRING OF THE href
      var imageLocation = $(this).attr("href");     // Pass in a particular attribute -- href
                                                    // Want anchors (a) href attribute
                                                    // $(this) - particular anchor clicked on

      console.log("'this' href IMAGE LOCATION is: ", imageLocation );

      $image.attr("src", imageLocation);            //ADD ATTRIBUTE:  Set overlay with the image src
  
      // SHOW THE OVERLAY  **********************
      $overlay.show();
  
      // SET CAPTION:  Get child's alt attribute and set caption
      var captionText = $(this).children("img").attr("alt");
      $caption.text(captionText);                   // ADDING TEXT TO HTTP ELEMENT: to $caption  !!!

});                                                 // END FUNCTION  **********************

    $overlay.click(function(){                      //HIDE overlay when it is clicked on:
    $overlay.hide();
});









