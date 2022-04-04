// Form submission message
let subscription = document.getElementsByTagName("form")[1];
subscription.addEventListener("submit", (e) => {
    e.preventDefault();
    subscription.style.display = "none";
    document.querySelector(".fTitle").innerHTML = '<center><h3>Hooray!.</h3> </center> Start packing your bags. As sson as an offer is out you will be among the first to know.<br> We will get back to you within 24 hours.'
});

// Form Reservation form submission
let reservation = document.getElementsByTagName("form")[0];
reservation.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".resSubmit").innerHTML = '<center><h3>&#9989;Great Job</h3> </center> Start packing your bags. Your request has been sent successfully <br> We will get back to you within 24 hours.'
    reservation.reset();
});