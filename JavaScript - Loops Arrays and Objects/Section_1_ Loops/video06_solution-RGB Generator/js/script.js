var html = '';
var htmlx = '';
var red;
var green;
var blue;
var rgbColor;

for (var i=0; i < 10; i+=1) {
    gen();
    console.log(i);
}


function color() {
    return (Math.floor(Math.random() * 256)+1);
}


function gen()
{
    red = color();
    green = color();
    blue = color();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';

}


document.write(html);



function randomRGB() {
    return (Math.floor(Math.random() * 256)+1);
}


function randomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ');';
    return color;

}


//DRYer


for (var j=0; j < 10; j+=1) {
    htmlx += '<div style="background-color:' + randomColor() + '"></div>';
}


function print(stuff) {

    document.write(stuff);
}

document.write("<hr>");

print(htmlx);



//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';

//document.write(html);