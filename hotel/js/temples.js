// store resource URL in a const
const requestURL = "./js/temples.json";
// const cards = document.querySelector(".cards");
// const lists = document.querySelector(".listTabs")

// basic fetch( method) implementation
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const templesList = jsonData["temples"];
        // Durban temple values
        let h2d = document.querySelector(".h2Durban")
        let imgd = document.querySelector(".imgDurban")
        let dContent = document.querySelector(".dContent")
        h2d.textContent = `${templesList[0].templeName}`
        imgd.innerHTML = `<img src="${templesList[0].imageURL}" alt="${templesList[0].templeName} image">`
        dContent.innerHTML = `<hr><p><b>Address:</b><br> ${templesList[0].address}</p>
        <hr><b>Telephone:</b><br>${templesList[0].telephone}
        <hr><b>E-mail:</b><br>${templesList[0].emailAddress}
        <hr><b>Services:</b><br>${templesList[0].services}
        <hr><b>History:</b><br>${templesList[0].shortHistory}
        <br><a href="${templesList[0].dedicatoryprayer}" target="_blank" rel="noopener noreferrer">Dedicatory Prayer</a>
        <hr><b>Ordinance:</b><br>${templesList[0].ordinances}
        <hr><b>Session Schedule:</b><br>${templesList[0].sessionSchedule}
        <hr><b>Temple Closure Schedule 2022:</b><br>${templesList[0].templeClosure}
        `
        // Salt Lake temple values
        let h2s = document.querySelector(".h2Salt")
        let imgs = document.querySelector(".imgSalt")
        let sContent = document.querySelector(".sContent")
        h2s.textContent = `${templesList[1].templeName}`
        imgs.innerHTML = `<img src="${templesList[1].imageURL}" alt="${templesList[1].templeName} image">`
        sContent.innerHTML = `<hr><p><b>Address:</b><br> ${templesList[1].address}</p>
        <hr><b>Telephone:</b><br>${templesList[1].telephone}
        <hr><b>E-mail:</b><br>${templesList[1].emailAddress}
        <hr><b>Services:</b><br>${templesList[1].services}
        <hr><b>History:</b><br>${templesList[1].shortHistory}
        <br><a href="${templesList[1].dedicatoryprayer}" target="_blank" rel="noopener noreferrer">Dedicatory Prayer</a>
        <hr><b>Ordinance:</b><br>${templesList[1].ordinances}
        <hr><b>Session Schedule:</b><br>${templesList[1].sessionSchedule}
        <hr><b>Temple Closure Schedule 2022:</b><br>${templesList[1].templeClosure}
        `
        // Washington DC temple values
        let h2w = document.querySelector(".h2Washington")
        let imgw = document.querySelector(".imgWashington")
        let wContent = document.querySelector(".wContent")
        h2w.textContent = `${templesList[2].templeName}`
        imgw.innerHTML = `<img src="${templesList[2].imageURL}" alt="${templesList[2].templeName} image">`
        wContent.innerHTML = `<hr><p><b>Address:</b><br> ${templesList[2].address}</p>
        <hr><b>Telephone:</b><br>${templesList[2].telephone}
        <hr><b>E-mail:</b><br>${templesList[2].emailAddress}
        <hr><b>Services:</b><br>${templesList[2].services}
        <hr><b>History:</b><br>${templesList[2].shortHistory}
        <br><a href="${templesList[2].dedicatoryprayer}" target="_blank" rel="noopener noreferrer">Dedicatory Prayer</a>
        <hr><b>Ordinance:</b><br>${templesList[2].ordinances}
        <hr><b>Session Schedule:</b><br>${templesList[2].sessionSchedule}
        <hr><b>Temple Closure Schedule 2022:</b><br>${templesList[2].templeClosure}
        `
        // Rome temple values
        let h2r = document.querySelector(".h2Rome")
        let imgr = document.querySelector(".imgRome")
        let rContent = document.querySelector(".rContent")
        h2r.textContent = `${templesList[3].templeName}`
        imgr.innerHTML = `<img src="${templesList[3].imageURL}" alt="${templesList[3].templeName} image">`
        rContent.innerHTML = `<hr><p><b>Address:</b><br> ${templesList[3].address}</p>
        <hr><b>Telephone:</b><br>${templesList[3].telephone}
        <hr><b>E-mail:</b><br>${templesList[3].emailAddress}
        <hr><b>Services:</b><br>${templesList[3].services}
        <hr><b>History:</b><br>${templesList[3].shortHistory}
        <br><a href="${templesList[3].dedicatoryprayer}" target="_blank" rel="noopener noreferrer">Dedicatory Prayer</a>
        <hr><b>Ordinance:</b><br>${templesList[3].ordinances}
        <hr><b>Session Schedule:</b><br>${templesList[3].sessionSchedule}
        <hr><b>Temple Closure Schedule 2022:</b><br>${templesList[3].templeClosure}
        ` 
        });
// Check for like click for Rome
const likeRome = document.querySelector(".like-btnRome")
likeRome.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("likeRome").classList.toggle("clicked");
    document.querySelector(".likeR").textContent = "Liked Rome Temple!"
    // add localStorage for Liked Rome
    const romeStor = document.querySelector("#likeRome");
    if(romeStor.classList.contains("clicked")) {
        localStorage.setItem(romeStor, 'true');
    } else {
        localStorage.removeItem(romeStor, 'true');
    }
})

// Check for like click for Washington
const likeWash = document.querySelector(".like-btnWash")
likeWash.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("likeWash").classList.toggle("clicked");
    document.querySelector(".likeW").textContent = "Liked Washington Temple!"
    // add localStorage for Liked Wash
    const WashStor = document.querySelector("#likeWash");
    if(WashStor.classList.contains("clicked")) {
        localStorage.setItem(WashStor, 'true');
    } else {
        localStorage.removeItem(WashStor, 'true');
    }
})

// Check for like click for Salt Lake Temple
const likeSalt = document.querySelector(".like-btnSalt")
likeSalt.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("likeSalt").classList.toggle("clicked");
    document.querySelector(".likeS").textContent = "Liked Salt Lake Temple!"
    // add localStorage for Liked Salt
    const SaltStor = document.querySelector("#likeSalt");
    if(SaltStor.classList.contains("clicked")) {
        localStorage.setItem(SaltStor, 'true');
    } else {
        localStorage.removeItem(SaltStor, 'true');
    }
})

// Check for like click for Durban Temple
const likeDurban = document.querySelector(".like-btnDurban")
likeDurban.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("likeDurban").classList.toggle("clicked");
    document.querySelector(".likeD").textContent = "Liked Durban Temple!"
    // add localStorage for Liked Durban
    const DurbanStor = document.querySelector("#likeDurban");
    if(DurbanStor.classList.contains("clicked")) {
        localStorage.setItem(DurbanStor, 'true');
    } else {
        localStorage.removeItem(DurbanStor, 'true');
    }
})





    





