// store resource URL in a const
const spotURL = "./js/data.json";
const i = getRandomIntInclusive(0, 6); //gold member random index
// console.log(i)
const j = getRandomIntInclusive(0, 7); // silver members random index
// console.log(j)
const k = getRandomIntInclusive(0, 12); // gold + silver members random index
// console.log(k)

// basic fetch( method) implementation
fetch(spotURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const spotCo = jsonData["directory"];
        // filter gold members
        goldMembers = spotCo.filter(members => members.memberLevel === 1);
        // console.log(goldMembers);
        // add to page
        setInterval(function() {
            spotlightLoad()
        }, 2000);
        // window.addEventListener("load", goldLoad);
        // window.addEventListener("reload", goldLoad)

        // filter silver members
        silverMembers = spotCo.filter(members => members.memberLevel === 2);
        // console.log(silverMembers)
        });

function spotlightLoad() {
    // Load random Gold Member to spotlight 1
    document.querySelector(".spot1H2").textContent = goldMembers[i].companyname;
    document.querySelector(".spot1p").textContent = goldMembers[i].website;
    document.querySelector(".spot1img").setAttribute("src", goldMembers[i].logourl);
    document.querySelector(".spot1img").setAttribute("alt", `${goldMembers[i].companyname} logo`)
    document.querySelector(".spot1img").setAttribute("loading", "lazy"); 

    // Load random Silver or Gold member to spotlight 2
    document.querySelector(".spot2H2").textContent = goldMembers[j].companyname;
    document.querySelector(".spot2p").innerHTML = `Phone: +${goldMembers[j].phone}`;
    document.querySelector(".spot2img").setAttribute("src", goldMembers[j].logourl);
    document.querySelector(".spot2img").setAttribute("alt", `${goldMembers[j].companyname} logo`)
    document.querySelector(".spot2img").setAttribute("loading", "lazy"); 

    // load spotlight3 only when it is on screen.
    window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth >= 1024) {
            // load random Silver member to spotlight 3 for screen size only
            document.querySelector(".spot3H2").textContent = goldMembers[k].companyname;
            document.querySelector(".spot3p").innerHTML = `Call us today: +${goldMembers[k].phone}`;
            document.querySelector(".spot3img").setAttribute("src", goldMembers[k].logourl);
            document.querySelector(".spot3img").setAttribute("alt", `${goldMembers[k].companyname} logo`)
            document.querySelector(".spot3img").setAttribute("loading", "lazy"); 
        } 
    }, false);
}


// randomize member selection
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  

