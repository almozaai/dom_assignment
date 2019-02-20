/*
    Utilize the date class and also the css property rotate, float or flex

*/
// Clock with radio buttons:
function UpdateClock() {
    var currentTime = new Date();
    // Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is Less than 10
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes: currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds: currentSeconds;
    // "AM" or "PM" for 12h clock
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // 12h version
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    
    var currentTimeString
    // radio button 12clock and 24clock
    if (document.querySelector('input[name="digitClock"]:checked').value == '12'){
        currentTimeString = currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    } else{
        currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    }

    
    // print clock in div .digi_clock
    $(".digi_clock").html(currentTimeString)};
    $(document).ready(function () {
    setInterval(UpdateClock, 1000);
});

//
//
// Use click button to convert clock from 12clock to 24 clcok
// 12clok code
function ClockTime() {
    var currentTime = new Date();
    // Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is Less than 10
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes: currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds: currentSeconds;
    // "AM" or "PM" for 12h clock
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // 12h version
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;

    
    var currentTimeString
    currentTimeString = currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
      
    // print clock in div .btn12.
    $(".btn12").html(currentTimeString)};
    $(document).ready(function () {
        setInterval(ClockTime, 1000);
    });
    //clock 
function ClockTime2() {
    var currentTime = new Date();
    // Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is Less than 10
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes: currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds: currentSeconds;
    // "AM" or "PM" for 12h clock
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // 12h version
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    
    var currentTimeString
    currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    //if press the btn will change dispaly for <p> class .btn12 on ClockTime()
    $('.btn12').css('display','none');
    // print clock in div .btn23.
    $(".btn24").html(currentTimeString)};

    $("button").click(function() {
        
        $(document).ready(function () {
            setInterval(ClockTime2, 1000);
        });
    });




