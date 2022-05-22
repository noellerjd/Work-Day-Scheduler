// Today is ...
setInterval(function() {
    var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
    $('#currentDay').text('Today is ' + timeDate);
}, 1000);

// Hour Tracker
setInterval(function () {
    var trackTime = moment().format("HH");
    // var trackTime = 13;
//tracks from 9am to 5pm (per second) and changes class based on the Hour
    if (trackTime == 09) {
        $("#nineam").addClass("present");
    } else if (trackTime > 09) {
        $("#nineam").addClass("past");
    }
    if (trackTime == 10) {
        $("#tenam").addClass("present");
    } else if (trackTime > 10) {
        $("#tenam").addClass("past")
    } else {
        $("#tenam").addClass("future")
    }
    if (trackTime == 11) {
        $("#elevenam").addClass("present");
    } else if (trackTime > 11) {
        $("#elevenam").addClass("past")
    } else {
        $("#elevenam").addClass("future")
    }
    if (trackTime == 12) {
        $("#twelvepm").addClass("present");
    } else if (trackTime > 12) {
        $("#twelvepm").addClass("past")
    } else {
        $("#twelvepm").addClass("future")
    }
    if (trackTime == 13) {
        $("#onepm").addClass("present");
    } else if (trackTime > 13) {
        $("#onepm").addClass("past")
    } else {
        $("#onepm").addClass("future")
    }
    if (trackTime == 14) {
        $("#twopm").addClass("present");
    } else if (trackTime > 14) {
        $("#twopm").addClass("past")
    } else {
        $("#twopm").addClass("future")
    }
    if (trackTime == 15) {
        $("#threepm").addClass("present");
    } else if (trackTime > 15) {
        $("#threepm").addClass("past")
    } else {
        $("#threepm").addClass("future")
    }
    if (trackTime == 16) {
        $("#fourpm").addClass("present");
    } else if (trackTime > 16) {
        $("#fourpm").addClass("past")
    } else {
        $("#fourpm").addClass("future")
    }
    if (trackTime == 17) {
        $("#fivepm").addClass("present");
    } else if (trackTime > 17) {
        $("#fivepm").addClass("past")
    } else {
        $("#fivepm").addClass("future")
    }
}, 1000);

//Save to local storage
// $("#ninesave").click(function(){
//     localStorage.setItem('#nineam', $('#nineam').value)
// })