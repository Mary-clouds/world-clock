function cityTimezone(){
//updating the city timezone when selected
// date time format
let formatDate = format("MMMM Do YYYY");
let formatTime = format("h:mm:ss [<small>]A[</small]");
//los angeles
let los_angelesElement = document.querySelector("#los-angeles");
if(los_angelesElement){ 
let los_angelesDate = los_angelesElement.querySelector(".laDate");
let los_angelesTime = los_angelesElement.querySelector(".laTime");
    //los angeles with moment
let los_angelesTimezone = moment().tz("America/Los_Angeles");
    //displaying the LA date in the html
    los_angelesDate.innerHTML = los_angelesTimezone.formatDate;
    //displaying the LA time in html
los_angelesTime.innerHTML = los_angelesTimezone.formatTime;
};
//berlin
let berlinElement = document.querySelector("#berlin");
if(berlinElement){ 
let berlinDate = parisElement.querySelector(".berlinDate");
let berlinTime = parisDate.querySelector(".berlinTime");
      //berlin with moment
let berlinTimezone = moment().tz("Europe/Berlin");
    //displaying the  berlin date in the html
 berlinDate.innerHTML = berlinTimezone.formatDate;
    //displaying the berlin time in html
 berlinTime.innerHTML = berlinTimezone.formatTime;
};
//douala
let doualaElement = document.querySelector("#douala");
if(doualaElement){ 
let doualaDate = parisElement.querySelector(".doualaDate");
let doualaTime = parisDate.querySelector(".doulaTime");
     //douala with moment
let doualaTimezone = moment().tz("Africa/douala");
    //displaying the douala date in the html
doualaDate.innerHTML = doualaTimezone.formatDate;
    //displaying the douala time in html
doualaTime.innerHTML = doualaTimezone.formatTime;
};

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