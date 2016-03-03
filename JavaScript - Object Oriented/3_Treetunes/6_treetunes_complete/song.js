



function Song(title, artist, duration) {              //  Constructor Function
  Media.call(this, title, duration);                  //  call() METHOD allows us to execute a function while we specify what the function should use as 'this'
                                                      //  the Media CONSTRUCTOR takes two PARAMETERS (ARGUMENTS) -- title and duration
                                                      //  'this' is a song
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);      //  Setup the PROTOTYPE CHAIN
                                                      //  Copies the references to the MEDIA's PROTOTYPE PROPERTIES and METHODS to the Song PROTOTYPE



Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
















