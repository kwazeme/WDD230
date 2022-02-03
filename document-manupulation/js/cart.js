
// create variables that hold references to ul input and button elements
const ulElement = document.querySelector("ul");
const buttonElement = document.querySelector("button");
let inputElement = document.querySelector("input");

// function to run onclick of button

buttonElement.onclick = function () {
    let item = inputElement.value;
    inputElement.value = "";

    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const delButton = document.createElement("button");
    const sbar = document.createElement("span");

    liElement.appendChild(spanElement);
    liElement.appendChild(sbar)
    liElement.appendChild(delButton);
    spanElement.textContent = item;
    sbar.textContent = " ";
    delButton.textContent = "Delete";
    ulElement.appendChild(liElement);

    delButton.onclick = function (e) {
        ulElement.removeChild(liElement);
    }
    inputElement.focus();
}

