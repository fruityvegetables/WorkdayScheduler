// the jQuery WAY is to put everything after the document.ready
$(document).ready(function () {

    //displays the current time & date at the top.
    var now = moment();
    //sends the moment to the element with currentDay ID
    $("#currentDay").text(now);
    //hooks the values in each element to the local storage
    $("#9AM").val(localStorage.getItem("9AM"));
    $("#10AM").val(localStorage.getItem("10AM"));
    $("#11AM").val(localStorage.getItem("11AM"));
    $("#12PM").val(localStorage.getItem("12PM"));
    $("#1PM").val(localStorage.getItem("1PM"));
    $("#2PM").val(localStorage.getItem("2PM"));
    $("#3PM").val(localStorage.getItem("3PM"));
    $("#4PM").val(localStorage.getItem("4PM"));
    $("#5PM").val(localStorage.getItem("5PM"));

    // allows user to enter text into each "time block"
    $(".saveBtn").on("click", function (event) {

        // check event.target FIRST on events like this ^^
       // console.log(event);
       // LUCKILY a tutor explained to me why I would have to add 
       // the replace method below...
       // to remove all whitespace! 
       // because ID'S can't have white space in them (o:

        var task = event.target.previousElementSibling.value;
        var time = event.target.parentNode.innerText.trim().replace(" ", "");
        //sets the local storage with time and task arguments.
        localStorage.setItem(time, task);
    });

    //function to check the current time and change the color of the appropriate text areas
    // NOT WORKING
    // IF you do not want the annoying gray perma background color, just comment all this out.
    function currentTimeCheck() {

        $(".time-block").each(function () {

            // COULD NOT parse this part correctly vv
            // would REALLY LOVE if a TA could explain this to me (o:
            var time = $(this).attr("data-time");

            // added .hour(16) because I was working on this around 8 pm; 
            //if it just so happened that I got the logic down correctly...
            // it would have displayed them all as either past or future! So I set it for 4 pm.
            var now = moment().hour(16);

            // I REALLY think this logic vv is correct.
            // but the issue is just parsing that damn data-time into something moment.js can read!
            if (now !== time) {
                if (now < time) {
                    $(".description").addClass("future");
                    //then the textarea should be displayed .future
                } else if (now > time) {
                    $(".description").addClass("past");
                    //then the textarea should be displayed .past
                }
            } else {
                $(".description").addClass("present");
                //then the textarea should be displayed .present
            }
        });


    }

    // runs function to check the current time and display colors.
    currentTimeCheck();
});

