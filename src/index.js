function cityTimezone(){


//los angeles
let los_angelesElement = document.querySelector("los-angeles");
let los_angelesDate = los_angelesElement.querySelector("laDate");
let los_angelesTime = los_angelesElement.querySelector("laTime");
    //los angeles with moment
let los_angelesTimezone = moment().tz("America/Los_Angeles");
//berlin
let berlinElement = document.querySelector("berlin");
let berlinDate = parisElement.querySelector("berlinDate");
let berlinTime = parisDate.querySelector("berlinTime");
      //berlin with moment
let berlinTimezone = moment().tz("Europe/Berlin");
//douala
let doualaElement = document.querySelector("douala");
let doualaDate = parisElement.querySelector("bdouala");
let doualaTime = parisDate.querySelector("doualaTime");
     //douala with moment
let doualaTimezone = moment().tz("Africa/douala");
// date time format
let formatDate = format("MMMM Do YYYY");
let formatTime = format("h:mm:ss [<small>]A[</small]");
//displaying the date in the html
los_angelesDate.innerHTML = los_angelesTimezone.formatDate;
berlinDate.innerHTML = berlinTimezone.formatDate;
doualaDate.innerHTML = doualaTimezone.formatDate;
//displaying the time in html
los_angelesTime.innerHTML = los_angelesTimezone.formatTime;
berlinTime.innerHTML = berlinTimezone.formatTime;
doualaTime.innerHTML = doualaTimezone.formatTime;

}
cityTimezone();
setInterval(cityTimezone, 1000);