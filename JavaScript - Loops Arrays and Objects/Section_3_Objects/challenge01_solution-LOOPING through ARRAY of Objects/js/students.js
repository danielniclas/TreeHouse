
var message;

function print (message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}



var students = [
  { 
    name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

var html = "<div id='poop'> ";

for (var i = 0; i < students.length; i+=1)  {         //  run block of code for each loop

    for (var key in students[i]) {

        if (key === 'name') {
            html += "<h2>Student: " + students[i][key] + "</h2>";

        }else {
            html += key + ": " + students[i][key] + '<br>';
        }
    }

}
html += '</div>';

print(html);