// create variables that hold the container
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

// create eventListener for addChapter
buttonElement.addEventListener("click", function() {
    if (inputElement !== null) {
        let chapter = inputElement.value;
        const liElement = document.createElement("li");
        const spanElement = document.createElement("span");
        const delButton = document.createElement("button");
        // append the list item
        liElement.appendChild(spanElement);
        spanElement.textContent = chapter;
        // populate delete button
        liElement.appendChild(delButton);
        delButton.textContent = "X";
        // append list item
        ulElement.appendChild(liElement);
        // delete item
        delButton.onclick = function (e) {
            ulElement.removeChild(liElement);
        }       
    } else {
        alert("Enter your favourite BOM Chapter, Thanks")
    }

    inputElement.focus();
    inputElement.value = "";  
    
});