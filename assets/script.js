//psudo
//1 display time
//2 adjust color of div relative to time
//2a chaeck to see if the current time is equal to the hour in the callander
//3 store text entry to local storage


//display time

$("#currentDay").text(moment().format("MMMM Do YYYY"));

var currentTime = moment().format("HH");  //set variable for military time
for (var i = 9; i < 18; i++) {      // i will run a loop for numbers 9-18 
    if (i === parseInt(currentTime)) {   //this line compares the number generated above to the current hour in military time
        $("#" + i).addClass("present");         // using jq i added a class to the div with the id whos number matches the correct time above
    }
}


//this is the same code from above with a frew minor changes to add the class for the future divs. I dont need one for past since they are auto set to past.
for (var i = 9; i < 18; i++) {
    if (i > parseInt(currentTime)) {
        $("#" + i).addClass("future");
    }
}

$(".saveBtn").on("click", function() {
    for (var i = 9; i < 17; i++) {
        var value = [i]
        var text = $("#" + value).val();
        if (!text) {
            console.log(value + " none")
        }
    else {
        console.log(value + " " + text)
    }
        
        
    }
})