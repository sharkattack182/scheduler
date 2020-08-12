//psudo
//1 display time
//2 adjust color of div relative to time
//2a chaeck to see if the current time is equal to the hour in the callander
//3 store text entry to local storage


//display time

$("#currentDay").text(moment().format("MMMM Do YYYY"));


// this compares current time to the divs and styles it by adding a class to that div

var currentTime = moment().format("HH");
for (var i = 9; i < 18; i++) {
    if (i === parseInt(currentTime)) {
        $("#" + i).addClass("present");
    }
}


//this does the same as above but gives all future timeblocks a seperate class

for (var i = 9; i < 18; i++) {
    if (i > parseInt(currentTime)) {
        $("#" + i).addClass("future");
    }
}


//this runs an on click function so whenever i press a save button it checks all of my texts inputs and stores their values along with the hour they correspond 

$(".saveBtn").on("click", function () {
    for (var i = 9; i < 17; i++) {
        var value = [i]
        var text = $("#" + value).val();
        if (!text) {
            localStorage.setItem(value + ":00", "");
        }
        else {
            localStorage.setItem(value + ":00", text);
        }
    }
})

for (var i = 0; i < localStorage.length; i++) {
    $("." + i).text((localStorage.getItem(localStorage.key(i))));
    
}