//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");         //  background-color of selected element $(".selected") store in variable "color"

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


//When clicking on control list items
$(".controls").on("click", "li", function(){       //  on()  specify the element child:  "li"
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");  //  $(this) - selected element {OBJECT}  .siblings() -- siblings of $(this) [all the other ones]  removeClass()
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//When "New Color" is pressed
$("#revealColorSelect").click(function(){         //  <button>  .click() event
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();   //  The toggle() method toggles between hide() and show() for the selected elements.
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");   //  add css property:  background-color
                                                                                  //  #newcolor is the <span>  -- color box next to the sliders
}

//When color sliders change
$("input[type=range]").change(changeColor);     // EVENT:  when slider value changes triggers METHOD:  changeColor to capture the RGB values

//When "Add Color" is pressed
$("#addNewColor").click(function(){             //  click() on "Add Color"
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));    //  Alter CSS background color
  $(".controls ul").append($newColor);                                          //  add the $newColor element to the list
  //Select the new color
  $newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(function(e){          // e is the eventObject  PASSED into the Handler
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {

    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){        // on mouseleave() it CALLS mouseup()   (the same one right above it)
  $canvas.mouseup();
});



  







