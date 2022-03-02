// store resource URL in a const
const requestURL = "./js/data.json";
const cards = document.querySelector(".cards");
const lists = document.querySelector(".listTabs")

// basic fetch( method) implementation
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const dirList = jsonData["directory"];

        const gridView = document.querySelector(".gridBtn");
        const listView = document.querySelector(".listBtn");
        dirList.forEach(displayDir);
        listView.addEventListener("click", function (e) {
            toggleList()
            dirList.forEach(displayList);
        });

        gridView.addEventListener("click", function (e) {
            toggleCard()
            dirList.forEach(displayDir);
        });
    });

function displayDir(directory) {
    // create elements to add to the document
    let card = document.createElement("section");
    card.className = "cardSection";
    let name = document.createElement("h2")
    let logo = document.createElement("img")
    let address = document.createElement("p")
    // let phone = document.createElement("p")
// add the directorys name to the name textcontent
    name.textContent = directory.companyname;
    address.innerHTML = `<b>Phone:</b> ${directory.phone}  <br> <b>Address:</b> ${directory.address} <br> <b>Web:</b> ${directory.website}`
    // phone.innerHTML = `Phone:${directory.phone}`;
    logo.setAttribute('src', directory.logourl);
    logo.setAttribute('alt', `${directory.companyname} logo`);
    logo.setAttribute('loading', 'lazy')

// append to the section(card)
    card.appendChild(logo);
    card.appendChild(name);
    // card.appendChild(phone)
    card.appendChild(address)
    
// add to existing HTML div
    cards.appendChild(card);
}

function displayList(directory) {
    // create elements to add to the document
    // let table = document.createElement("table");
    // table.className = "listTabs";
    // let tbody = document.createElement('tbody');
    // lists.appendChild(tbody)
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${directory.companyname} </td> <td>${directory.phone}</td> <td>${directory.address}</td> <td>${directory.website}</td>`

    // add to existing HTML div
    // tbody.appendChild(tr);
    lists.appendChild(tr)
}

function toggleList() {
    // document.getElementById("cardToggle").classList.toggle("cards");
    document.getElementById("listToggle").style.display = "block";
    document.getElementById("cardToggle").style.display = "none";
}

function toggleCard() {
    document.getElementById("cardToggle").style.display = "grid";
    document.getElementById("listToggle").style.display = "none";
    // document.getElementById("listToggle").classList.toggle("lists");
}