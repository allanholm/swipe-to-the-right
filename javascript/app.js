var xStart;
var xEnd;
var yStart;
var yEnd;
var tolerance = 75;
var limit = 50;

var moveMe = document.querySelector(".moveMe");
var wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("touchstart", function (event) {
    xStart = event.changedTouches[0].pageX;
    yStart = event.changedTouches[0].pageY;
    moveMe.classList.add("moved");
});

wrapper.addEventListener("touchend", function (event) {
    xEnd = event.changedTouches[0].pageX;
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd + tolerance) < xStart &&
        yEnd < (yStart + limit) &&
        yEnd > (yStart - limit)) {
        moveMe.classList.remove("moved");
    }

    if ((xEnd - tolerance) > xStart &&
        yEnd < (yStart + limit) &&
        yEnd > (yStart - limit)) {
        moveMe.classList.add("moved");
        alert("Godkendt");
    } else {
        moveMe.classList.remove("moved");
    }

});