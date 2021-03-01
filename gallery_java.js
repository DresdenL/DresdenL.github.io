// I learned how to use audio files from https://www.w3schools.com/html/html5_audio.asp and https://www.w3schools.com/jsref/met_audio_play.asp


var duckPicArray = document.getElementsByClassName("duckpic");
// get the audio from html file (theres only one audio file so it will be the first index)
var catMeow = document.getElementsByTagName("audio")[0]

//plays mp3 file
var playMeow = function() {
    catMeow.play();
}

//iterate through each duck pic and add the eventlistener to each one. Now, if you click on any cat image it will meow.
for (var i=0; i < duckPicArray.length; i++) {
    duckPicArray[i].addEventListener("click", playMeow);
}
