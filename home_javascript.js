var forwardButton = document.getElementById("forwardButton");
var backButton = document.getElementById("backButton");
var imageDiv = document.getElementById("imageC");
var duckPic = document.getElementById("duckpic");

image_count = 1

// nextImage function will let the user go to the next picture in the carousel but if they are already
// at the last picture (picture 4) it will not do anything.
var nextImage = function(){
    if (image_count != 4) {
        image_count = image_count + 1;
        duckPic.src = "duck" + image_count + ".jpg";
    };
};

// prevImage function will let user go back to the previous picture in the carousel unless they are already
// at the first image (pic 1)
var prevImage = function(){
    if (image_count != 1) {
        image_count = image_count - 1;
        duckPic.src = "duck" + image_count + ".jpg";
    };
};

// this function uses nextimage and prev image to autoscroll every 3 seconds (by using setTimeout)
var automaticSlide = function(){
    if (image_count < 4) {
        nextImage();
    } else {
        image_count = 0;
        nextImage();
    };
    // calls automaticSlide every 3 seconds while updating image count
    setTimeout(automaticSlide, 3000);
};

// need to call automaticSlide for it to autoscroll
automaticSlide();

//add event listeners to the front/back buttons so a user can go through the photos faster if they want to.
document.getElementById("backButton").addEventListener("click", prevImage);
document.getElementById("forwardButton").addEventListener("click", nextImage);