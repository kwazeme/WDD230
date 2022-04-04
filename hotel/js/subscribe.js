// Form submission message
let subscription = document.getElementsByTagName("form")[0];
subscription.addEventListener("submit", (e) => {
    e.preventDefault();
    subscription.style.display = "none";
    document.querySelector(".fTitle").innerHTML = '<center><h3>Hooray!.</h3> </center> Start packing your bags. As sson as an offer is out you will be among the first to know.<br> We will get back to you within 24 hours.'
});