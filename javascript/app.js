var xStart;
var xEnd;
var yStart;
var yEnd;
var tolerance = 125;
var limit = 50;

var deleteMe = document.querySelector(".deleteMe");
var wrapper = document.querySelector(".wrapper");



wrapper.addEventListener("touchstart", function (event) {
    xStart = event.changedTouches[0].pageX;
    yStart = event.changedTouches[0].pageY;
    deleteMe.classList.add("moved");
});

wrapper.addEventListener("touchend", function (event) {
    xEnd = event.changedTouches[0].pageX;
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd + tolerance) < xStart &&
        yEnd < (yStart + limit) &&
        yEnd > (yStart - limit)) {
        deleteMe.classList.remove("moved");
    }

    if ((xEnd - tolerance) > xStart &&
        yEnd < (yStart + limit) &&
        yEnd > (yStart - limit)) {
        deleteMe.classList.add("moved");
        setTimeout(function() {
            deleteMe.classList.add("deleted");
        }, 1000);
    } else {
        deleteMe.classList.remove("moved");
    }
});