


function Song(title, artist, duration) {          //  Constructor Function
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {                //  Adding a METHOD -- play()
  this.isPlaying = true;
};

Song.prototype.stop = function() {                //  Adding a METHOD -- stop()
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {              //  Adding a METHOD -- toHTML()

};

//  this --  whatever song OBJECT is created