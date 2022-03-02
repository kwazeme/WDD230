// store resource URL in a const
const requestURL = "https://github.com/kwazeme/WDD230/blob/main/chamber/js/data.json";
const cards = document.querySelector(".dirList");

// basic fetch( method) implementation
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        console.table(jsonData);
        
    }

    );

