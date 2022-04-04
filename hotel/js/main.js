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
