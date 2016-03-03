
var answer;
var html;
var x = 0;


//function print(message) {
//  document.write(message);           so 1990!
//
//}


function print(message) {

    var outputDiv = document.getElementById('output');    // variable for a node -- a tag in the page
    outputDiv.innerHTML = message;
}


var questions = [['Color?', 'red'], ['Car?', 'ded'], ['Food?', 'banana']];

var correct = "<h2> You got these questions correct: </h2><br><ol>"
var incorrect = "<h2> You got these questions wrong: </h2><br><ol>"

for (var i= 0; i < questions.length; i+=1) {

    answer =   prompt("Here is the question: " + questions[i][0]);

    if (answer.toLowerCase() === questions [i][1] ) {

        correct += '<li> Question:' + ' ' + questions [i][0] + '</li>';
        x += 1;            //  correct answer counter
        } else {

        incorrect += '<li> Question:' + ' ' + questions [i][0] + '</li>';
    }
}


correct += '</ol>';
incorrect += '</ol>';

html = "<p> You got "+ x + " question(s) correct <p>";

//print(html);
//print(correct);
//print(incorrect);

var content = html + correct + incorrect;

print(content);
