// window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '964137',appid: 'b9844c0f082309852779221734dfd734',units: 'metric',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
// create an "apiURL" variable
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Lyttelton&units=metric&appid=b9844c0f082309852779221734dfd734"
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
        document.querySelector(".city").innerHTML = `<p><h3>${jsonObject.name}, ${jsonObject.sys.country}</h3>${desc}</p>`;
        document.querySelector("#weathericon").textContent = iconSRC;
        document.querySelector("#weathericon").setAttribute("src", iconSRC);
        document.querySelector("#weathericon").setAttribute("alt", desc);
        document.querySelector(".windSpeed").innerHTML = `Feels Like: </td><td>&emsp;<b>${jsonObject.main.feels_like.toFixed(1)}</b>&deg;C</td></tr>&emsp;
        <tr><td>Humidity:&emsp; </td><td><b>${jsonObject.main.humidity}%</b>&emsp;</td></tr>
        <br><tr><td>Windspeed:&emsp;</td><td><b>${jsonObject.wind.speed}</b>m/sec</td></tr>`;
        document.querySelector(".windChill").innerHTML = "<hr>windChill: N/A"
        // calculae windChill for temperature less than or equal to 10degCelcius and windspeed greater than 1.3412m/s
        const temp = parseFloat(jsonObject.main.temp);
        const wSpeed = parseFloat(jsonObject.wind.speed);
        if (temp <= 10 && wSpeed > 1.3412) {
            wChill = (12.1452 + (11.6222 * Math.sqrt(wSpeed)) - (1.16222 * wSpeed)) * (33 - temp)
            // add windChill to HTML
            document.querySelector(".windChill").innerHTML = `windChill: ${wChill} W/msqr`
        } 
    });


