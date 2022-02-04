// Display header local time
const options = {day: "numeric", weekday: "long", month: "long", year: "numeric"};
document.querySelector(".timebar").textContent = new Date().toLocaleDateString("en-ZA", options);

// copyright current year
const curYear = {year: "numeric"};
document.querySelector(".curYear").textContent = new Date().toLocaleDateString("en-ZA", curYear);

// Last modified date and time.
let lastModified = new Date(document.lastModified);
lastMod = {day: "numeric", weekday: "long", month: "long", year: "numeric", hour: "numeric", hour24: true, minute:"numeric"};
document.querySelector(".lastModified").textContent = lastModified.toLocaleDateString("en-ZA",lastMod);

// responsive menu block
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// tuesday or wednesday meet and greet notice display
const dayOption = {weekday: "long"};
const weekDay = new Date().toLocaleDateString("en-ZA", dayOption);
//if weekDay === "Tuesday" or weekDay === "Wednesday": 
if (weekDay == "Tuesday") {
    // display .meet
    document.querySelector(".meet").style.display = "block";
    document.querySelector(".news").style.display = "none";
} else if (weekDay == "Wednesday") {
    // display .meet
    document.querySelector(".meet").style.display = "block";
    document.querySelector(".news").style.display = "none";
} else {
    // display .news
    document.querySelector(".meet").style.display = "none";
    document.querySelector(".news").style.display = "block";
}