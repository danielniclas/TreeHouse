
//Random numbers between 1 and the number you enter



function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


var counter = 0;

while ( counter < 100 ) {

    var randNum  = randomNumber(6);
    document.write(randNum + ' ');
    counter += 1;
}