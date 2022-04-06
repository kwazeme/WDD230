// PRIMARY NAVIGATION BURGER MENU
function toggleNav() {
    document.querySelector("#pNav").classList.toggle("open");
    document.querySelector("#burgerBtn").classList.toggle("open"); 
};
//PRIMARY NAV ONCLICK ACTION
const btnClick = document.querySelector("#burgerBtn");
btnClick.onclick = toggleNav

// code for active menu
const navBar = document.querySelector("#pNav");

// get all links in navbar
const navLinks = navBar.getElementsByTagName("li")

// loop through and move the active class to current link onClick
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        const actvLink = document.getElementsByClassName("active");
        actvLink[0].className = actvLink[0].className.replace("active", "");
        this.className += "active";
        
    });
    
}
// Last modified date and time.
let lastModified = new Date(document.lastModified);
lastMod = {day: "numeric", weekday: "long", month: "long", year: "numeric", hour: "numeric", hour24: true, minute:"numeric"};
document.querySelector(".lastModified").textContent = lastModified.toLocaleDateString("en-ZA",lastMod);



// 738cfd76548e863c2aa9ed6816672068 weather api key

// WEATHER ALERT STARTS HERE

// create an "apiURL" variable
const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&appid=738cfd76548e863c2aa9ed6816672068"
// "https://api.openweathermap.org/data/2.5/onecall?q=Durban&units=metric&appid=738cfd76548e863c2aa9ed6816672068"
// [38.9807, -77.1003] Bethesda, US geocode
// Use fetch() to request the given apiURL. 
fetch(alertURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        // console.log(jsonObject);

        // check for if weather "Alerts" exists and to run code if it does
        // test code
    //    if ("hourly" in jsonObject) {
    //     console.log(jsonObject.hourly)   
    //    }

        if ("alerts" in jsonObject) {
        // console.log(jsonObject.alerts)
            const alertDescription = jsonObject.alerts.description;
            const alertHeading = jsonObject.alerts.event
            document.querySelector(".wAlert").innerHTML = `<h2><center>${alertHeading}</center></h2><br>
            <p>${alertDescription}</p>
            `           
       }



        // write the temperature value to the HTML document using id value  'current-temp'.
        // document.querySelector("#currentTemp").innerHTML = `${jsonObject.main.temp.toFixed(0)}`;
        // add weather icon
        // const iconSRC = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        // const desc = jsonObject.weather[0].description;
        // document.querySelector(".city").innerHTML = `<p><b>${jsonObject.name}, ${jsonObject.sys.country}</b> ${desc}</p>`;
        // document.querySelector("#weathericon").textContent = iconSRC;
        // document.querySelector("#weathericon").setAttribute("src", iconSRC);
        // document.querySelector("#weathericon").setAttribute("alt", desc);
        // document.querySelector(".windSpeed").innerHTML = `Feels Like: </td><td>&emsp;<b>${jsonObject.main.feels_like.toFixed(0)}</b>&deg;C</td></tr>&emsp;
        // <tr><td>Humidity:&emsp; </td><td><b>${jsonObject.main.humidity}%</b>&emsp;</td></tr>
        // <br><tr><td>Speed:&emsp;</td><td><b>${jsonObject.wind.speed}</b> m/s</td></tr>`;
    });