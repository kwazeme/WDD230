// Form submission message
let subscription = document.getElementsByTagName("form")[1];
subscription.addEventListener("submit", (e) => {
    e.preventDefault();
    subscription.style.display = "none";
    document.querySelector(".fTitle").innerHTML = '<center><h3>Hooray!.</h3> </center> Start packing your bags. As sson as an offer is out you will be among the first to know.<br> We will get back to you within 24 hours.'
});

// Form submission message
let enquiry = document.getElementsByTagName("form")[0];
// let text = document.querySelector()
enquiry.addEventListener("submit", (e) => {
    e.preventDefault();
    enquiry.style.display = "none";
    document.querySelector(".enqSubmit").innerHTML = '<center>Thank you.</center>'
    document.querySelector(".enqAcknow").innerHTML = '<center>Your request was successfully sent.<br> We will get back to you within 24hours</center>'
});