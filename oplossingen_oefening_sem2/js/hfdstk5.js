// Oefeningen hoofdstuk 5
// Oefening 1.1
/*
document.querySelector("button#buttonTonen").addEventListener("click", tonenHandler);

function tonenHandler() {
    const textUserInput = document.querySelector("textarea#userText").value;
    document.querySelector("p#showUserText").innerHTML = textUserInput;
}
*/


// Oefening 1.2
/*
document.querySelector("button#buttonTonen").addEventListener("click", tonenHandler);

function tonenHandler() {
    const textUserInput = document.querySelector("textarea#userText").value;
    const pElement = document.createElement("p")
    const pText = document.createTextNode(textUserInput);
    pElement.appendChild(pText);
    document.querySelector("div#paragrafen").appendChild(pElement);
    document.querySelector("textarea#userText").value = '';
}
*/


// Oefening 1.3 Oplossing met innerText
/*
document.querySelector("button#btnTonen3").addEventListener("click", tonenHandler);
document.querySelector("button#btnWissen3").addEventListener("click", wissenHandler);

function tonenHandler() {
    let textUserInput = `<span id="lastInput">${document.querySelector("textarea#userText3").value}. </span>`;
    let vorigeInput = document.querySelector("p#showUserText3").innerText;
    let textToShow = `${vorigeInput} ${textUserInput}`;
    document.querySelector("p#showUserText3").innerHTML = textToShow;
    document.querySelector("span#lastInput").style.fontWeight = "bold";
    document.querySelector("span#lastInput").style.color = "red";
}

function wissenHandler () {
    document.querySelector("p#showUserText3").innerHTML = "";
}
*/

//Oefening 1.3 Oplossing met span:last-child
/*
document.querySelector("button#btnTonen3").addEventListener("click", tonenHandler);
document.querySelector("button#btnWissen3").addEventListener("click", wissenHandler);
let textUserInput = '';

function tonenHandler() {
    textUserInput += `<span>${document.querySelector("textarea#userText3").value}. </span>`;
    document.querySelector("p#showUserText3").innerHTML = textUserInput;
    document.querySelector("span:last-child").style.fontWeight = "bold";
    document.querySelector("span:last-child").style.color = "red";
}

function wissenHandler () {
    document.querySelector("p#showUserText3").innerHTML = "";
    textUserInput = "";
}
*/


// Oefening 1.4
/*
document.querySelector("#btnGroter").addEventListener("click", maakGroter);
document.querySelector("#btnKleiner").addEventListener("click", maakKleiner);

function maakGroter() {
    let titles = document.querySelectorAll("h3");
    titles.forEach(function (title) {
        title.style.fontSize = "48px";
    });
    let parafs = document.querySelectorAll("p");
    parafs.forEach(function (paraf) {
        paraf.style.fontSize = "24px";
    });
}

function maakKleiner() {
    let titles = document.querySelectorAll("h3");
    titles.forEach(function (title) {
        title.style.fontSize = "22px";
    });
    let parafs = document.querySelectorAll("p");
    parafs.forEach(function (paraf) {
        paraf.style.fontSize = "14px";
    });
}
*/


// Oefening 1.5
/*
let cellen = document.querySelectorAll("table#kalender td");
console.log(cellen);
cellen.forEach(function (cel) {
    cel.addEventListener("click", clickHandler)
});

function clickHandler(eventObject) {
    let boodschap;
    switch (parseInt(eventObject.target.innerText)) {
        case 1:
            boodschap = "Geven maakt rijk.";
            break;
        case 2:
           boodschap = "Wees beter dan de nieuwsberichten.";
           break;
        case 3:
            boodschap = "Elke wijze uil begon als uilskuiken.";
            break;
        case 4:
            boodschap = "Als je broedt op zorgen komen ze uit";
            break;
        case 5:
            boodschap = "Grote mensen houden hun ego klein.";
            break;
    }
    eventObject.target.innerHTML = boodschap;
}
*/


// Oefening 1.6
/*
let artikelen = document.querySelectorAll("div#artikelen p");
let boodschappenlijst = document.querySelector("ul#lijstje");

artikelen.forEach(function(artikel) {
    let button = document.createElement("button");
    button.className = "btn btn-primary ml-3";
    button.innerHTML = "Bestel";
    button.id = artikel.innerHTML;
    button.addEventListener("click", addArticle);
    artikel.appendChild(button);
})

function addArticle(eventObj) {
    boodschappenlijst.innerHTML += `<li class="mt-3">${eventObj.target.id} <button class="btn btn-danger ml-3" onclick="removeArticle(event)">Verwijder</button></li>`;
    sessionStorage.setItem("boodschappen", JSON.stringify(document.querySelector("ul#lijstje").innerHTML));
}

function removeArticle(event) {
    event.target.parentElement.remove();
    sessionStorage.setItem("boodschappen", JSON.stringify(document.querySelector("ul#lijstje").innerHTML));
}

document.querySelector("ul#lijstje").innerHTML = JSON.parse(sessionStorage.getItem("boodschappen"));
*/