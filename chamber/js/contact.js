// Form submission message
let subForm = document.getElementsByTagName("form")[0];
subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    subForm.style.display = "none";
    document.querySelector(".subMessage").innerHTML = 'Thanks for your message. We will get back to you within 24 hours.'
    document.querySelector(".sub").innerHTML = `<hr>We Got You<hr><br>`
});




