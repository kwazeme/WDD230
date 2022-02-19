
// select all images with a data-src attribute and turn then to a
// src attribute.

let imagesToLoad = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px -500px 0px'
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src"); // remove the data-src attribute after its used.
    };

};

// load the intersection Observer method
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
                
            }
        });
    }, imageOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
    
}



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


// Count number of visits or display message for first time visitors.
const numDisplay = document.querySelector(".numVisits");
const daysDisplay = document.querySelector(".dayVisits");
const daysDisplay2 = document.querySelector(".dayVisits2");

let numStorage = Number(window.localStorage.getItem("visitLS"));

if (numStorage !== 0) {
    numDisplay.textContent = `This is your number ${numStorage + 1} visit here, Thank you`;
    
} else {
    numDisplay.textContent = `Welcome, this is your first visit`;

}

numStorage++;
// store number of visits in localStorage
localStorage.setItem("visitLS", numStorage);
// time difference calculation
if (numStorage == 1) {
    let initTimestamp = new Date();
    localStorage.setItem("visitTS", initTimestamp);
    
} else if (numStorage > 1) {
    let curTimeStamp = new Date(); // timestamp for current visit
    const timeStore = new Date(localStorage.getItem("visitTS")); // timestamp of first visit from localstorage.
    let diffTime = curTimeStamp.getTime() - timeStore.getTime(); // difference between visits in time
    diffDays = parseInt(diffTime / (1000 * 3600 * 24)); // difference between visits in days
    // create display for number of days since last visit information
    daysDisplay.innerHTML = `<br /> Welcome back. This is <b>${diffDays} days</b> since your last visit.`
    daysDisplay2.innerHTML = `<br /> Welcome back. This is <b>${diffDays} days</b> since your last visit.`

    

    
}


// code for active menu
const navBar = document.querySelector("#primaryNav");

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
