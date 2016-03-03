//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select (drop down menu) and append to #menu
var $select = $("<select></select>");   // create detached element from DOM (created a <select>)
$("#menu").append($select);   //  Select #Menu element: $("#menu") + append to #Menu



//Cycle over menu links
$("#menu a").each(function(){     //  Select #menu a":  $("#menu a") -- .each() cycle/traverse each item
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");



  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);     //  change selected to TRUE
  }


  //option's value is the href
  $option.val($anchor.attr("href"));   //  Assign value -- anchor's href ATTRIBUTE

  //option's text is the text of link
  $option.text($anchor.text());     //  set option.text to be anchor.text

  //append option to select
  $select.append($option);
});

var $button = $("<button>Go</button>");     //  Create <button> element with "Go"
$("#menu").append($button);

$button.click(function(){
  window.location = $select.val();
});


//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();  //  In JavaSript you can change location of browser by accessing window.location
});








