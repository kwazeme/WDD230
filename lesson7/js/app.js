
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