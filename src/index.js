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
if(los_angelesElement || berlinElement || doualaElement){ 
los_angelesDate.innerHTML = los_angelesTimezone.formatDate;
berlinDate.innerHTML = berlinTimezone.formatDate;
doualaDate.innerHTML = doualaTimezone.formatDate;
//displaying the time in html
los_angelesTime.innerHTML = los_angelesTimezone.formatTime;
berlinTime.innerHTML = berlinTimezone.formatTime;
doualaTime.innerHTML = doualaTimezone.formatTime;
}

}

function displayCity(event){
    let cityTime = event.target.value;
    let cityName = cityTime.replace("-"," ").split("/")[1];
    let city = moment().tz(cityTime);
    let citiesElement= document.querySelector("#cities");
    citiesElement.innerHTML =`<div class="city">
            <div>
                <h2>${cityTime}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>}</div>
        </div> `;

}


cityTimezone();
setInterval(cityTimezone, 1000);

let cityChoiceElement = document.querySelector("#city-List");
cityChoiceElement.addEventListener("change", displayCity);