


var visitorName = prompt('What is your name?');
console.log(visitorName);


var element = '<h1> The name is:  ' +  visitorName + '</h1>';

function print (message) {
    document.write(message);
}

print(element);