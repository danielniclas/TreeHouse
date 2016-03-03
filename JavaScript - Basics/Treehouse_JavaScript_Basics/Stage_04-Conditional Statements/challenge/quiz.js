
var score = 0;
var award = ' ';


var q1 = prompt("1+1=");
var q2 = prompt("1+2=");
var q3 = prompt("1+3=");
var q4 = prompt("1+4=");
var q5 = prompt("1+5=");


if (parseInt(q1) === 2) {
    score += 1;
}

if (parseInt(q2) === 3) {
    score += 1;
}

if (parseInt(q3) === 4) {
    score += 1;
}

if (parseInt(q4) === 5) {
    score += 1;
}

if (parseInt(q5) === 6) {
    score += 1;
}


if (score === 5) {
    award = "Gold Crown";
} else if (score === 4) {
    award = "Silver Crown";
} else if (score === 3) {
    award = "Bronze Crown"
} else {
    award = "Hit on Head"
}


document.write("<p> Total score = " + score + "</p> <p> Your award is: " + award + "</p>" );


