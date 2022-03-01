
// store the resource, the URL of the JSON file into a const variable to start.
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");
// store the results of the converted response into an array


// use a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    // test to see if we get a valid, parsed response using a console.table() method to output the results to the console.    // 
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    });


function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2")
    let portrait = document.createElement("img")
    let info = document.createElement("p")
// add the prophets name to the h2 textcontent
    h2.textContent = prophet.name + " " + prophet.lastname;
    info.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy')

// appent to the section(card)
    card.appendChild(h2);
    card.appendChild(info)
    card.appendChild(portrait);

// add to existing HTML div
    cards.appendChild(card);

}

