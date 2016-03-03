var upper = 10000;
var randomNumber = getRandomNumber(upper);      //  generate random number #1 and store in randomNumber variable
var guess;
var attempts = 0;


//RANDOM NUMBER GENERATOR:
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}



while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );    //  generate random number #2 and compare with #1
  attempts += 1;
}


document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");