//set the date u want to count down from below
var sampleDate = new Date("September 3, 2017 24:00:00");

var final_countdown = function(myDate){
  let days  = Math.round((myDate - Date.now())/(24 * 60 * 60 * 1000));
  let hours = Math.round((((myDate - Date.now())%(24 * 60 * 60 * 1000))/(60*60*1000)));
  let minutes = Math.round(((((myDate - Date.now())%(24*60*60*1000)))%(60*60*1000)/(60*1000)));
  let seconds =  Math.round((((((myDate - Date.now())%(24*60*60*1000)))%(60*60*1000))%(60*1000)/(1000)));

  return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

}
setInterval(function(){
  document.getElementById("timer").innerHTML = final_countdown(sampleDate);
}, 1000);
