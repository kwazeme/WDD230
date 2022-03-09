// create an "apiURL" variable
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,Alaska&units=imperial&appid=b9844c0f082309852779221734dfd734"
// Use fetch() to request the given apiURL. 
fetch(apiURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        // write the temperature value to the HTML document using id value  'current-temp'.
        document.querySelector("#current-temp").textContent = jsonObject.main.temp.toFixed(1);
        // add weather icon
        const iconSRC = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector("#icon-src").textContent = iconSRC;
        document.querySelector("#weathericon").setAttribute("src", iconSRC);
        document.querySelector("#weathericon").setAttribute("alt", desc);
        document.querySelector("figcaption").textContent = desc;


    });
