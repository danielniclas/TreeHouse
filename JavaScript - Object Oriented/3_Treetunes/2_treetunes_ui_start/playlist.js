



function Playlist() {           //  CONSTRUCTOR FUNCTION
  this.songs = [];              //  ARRAY of songs
  this.nowPlayingIndex = 0;     //  Keep track of current song -- storing index value in the playlist
}

Playlist.prototype.add = function(song) {                 //  Add METHOD  --  add()
  this.songs.push(song);                                  //  Add items to the SONG ARRAY with the PUSH() METHOD
};

Playlist.prototype.play = function() {                    //  Add METHOD
  var currentSong = this.songs[this.nowPlayingIndex];     //  currentSong is REFERENCING a {song OBJECT} in the ARRAY!
  currentSong.play();                                     //  this play() METHOD is part of the {song OBJECT}
};

Playlist.prototype.stop = function(){                     //  Add METHOD
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {                    //  Add METHOD
  this.stop();
  this.nowPlayingIndex++;                                 //  Increment the Index

  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderIn = function() {                //  Add METHOD

};












