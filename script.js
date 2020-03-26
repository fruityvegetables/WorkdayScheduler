moment().format();

//displays the current time & date.
var now = moment();
$(document).ready(function() {
    $("#currentDay").text(now);

});