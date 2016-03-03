

//  6 sided:

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


//  10 sided:


function printNumber2(number) {
  var placeholder2 = document.getElementById("placeholder2");
  placeholder2.innerHTML = number;
}

var button2 = document.getElementById("button2");

button2.onclick = function() {
  var result = dice10.roll();
  printNumber2(result);
};