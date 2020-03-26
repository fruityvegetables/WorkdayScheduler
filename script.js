// the jQuery WAY is to put everything after the document.ready
$(document).ready(function() {
    moment().format();
    //displays the current time & date at the top.
    var now = moment();
    
    $("#currentDay").text(now);

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
        var task = event.target.previousElementSibling.value;
        var time = event.target.parentNode.innerText.trim().replace(" ", "");

        localStorage.setItem(time, task);
    });
    
    //function to check the current time and change the color of the appropriate text areas
    function currentTimeCheck(){
        
    $(".time-block").each(function(){
        var time = $(this).attr("data-time");
        
        if (now != time){
            if (now < time){
                $(this).attr("class", "future");
                //then the textarea should be displayed .future
            } else if (now > time) {
                $(this).attr("class", "past");
                //then the textarea should be displayed .past
            }
        } else {
            $(this).attr("class", "present");
            //then the textarea should be displayed .present
        }
    });


     };


    currentTimeCheck();
});

