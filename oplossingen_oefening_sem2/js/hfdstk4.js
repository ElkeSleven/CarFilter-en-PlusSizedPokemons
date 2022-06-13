// OEFENINGEN HOOFDSTUK 4
// Oefening 1.1
/*
const randomTekstClass = document.getElementsByClassName("randomtekst");
console.log(randomTekstClass);

const images = document.getElementsByTagName("img");
console.log(images);

const speciaal = document.querySelectorAll("p.specialetekst");
console.log(speciaal);

const lastP = document.querySelector("p:nth-of-type(5)");
console.log(lastP.innerHTML);

const tweedeP = document.querySelector("p:nth-of-type(2)")
console.log(tweedeP.innerHTML);
*/


// Oefening 1.2
/*
document.querySelector("body").style.fontFamily = "Arial, Verdana, sans-serif";
document.querySelector("h1").setAttribute("class", "titel");
document.querySelector("li:first-child").style.fontWeight = "bolder";
document.querySelector("li:first-child").style.fontStyle = "italic";
*/

// Oefening 1.3
/*
document.querySelector("#red").style.color = "darkred";

//parentDiv = document.getElementById("main");
//removeEl = document.getElementById("weg");
//parentDiv.removeChild(removeEl);
//document.querySelector("#weg").remove();

const nieuweTitel = document.createElement("h1");
const tekstNieuweTitel = document.createTextNode("Welkom PandiX");
nieuweTitel.appendChild(tekstNieuweTitel);
document.querySelector("div#header").appendChild(nieuweTitel);

const gegevensPXL = document.createElement("aside");
const gegevensPXLtekst = document.createTextNode("PXL, Hasselt Elfde-Liniestraat 24, 3500 Hasselt");
gegevensPXL.appendChild(gegevensPXLtekst);
gegevensPXL.style.fontWeight = "bold";
document.querySelector("#main").insertBefore(gegevensPXL, document.querySelector("p#red"));
*/


// Oefening 1.4
/*
const boeken = [
    {
        titel: "The theory of everything",
        auteur: "Stephen Hawking",
        gelezen: "ja"
    },
    {
        titel: "12 rules for life",
        auteur: "Jordan Peterson",
        gelezen: "nee"
    }
];


for (let i = 0; i < boeken.length; i++) {
    for (const eigenschap in boeken[i]) {
        const liElement = document.createElement("li");
        const liText = document.createTextNode(`${eigenschap}: ${boeken[i][eigenschap]}`);
        liElement.appendChild(liText);
        document.querySelector("ul#boekenLijst").appendChild(liElement);
    }
}

const tableDOM = document.createElement("table");

for (let i = 0; i < boeken.length; i++) {
    //create table head
    let theadDOM = document.createElement("thead");
    let trDOM = document.createElement("tr");
    let thDOM = document.createElement("th");
    thDOM.setAttribute("colspan", "2");
    let thDOMtext = document.createTextNode(`Boek ${i + 1}`);
    thDOM.appendChild(thDOMtext);
    trDOM.appendChild(thDOM);
    theadDOM.appendChild(trDOM);
    tableDOM.appendChild(theadDOM);

    for (const key in boeken[i]) {
        let tbodyDOM = document.createElement("tbody");
        let trDOM = document.createElement("tr");
        let tdDOM1 = document.createElement("td");
        let tdDOM1text = document.createTextNode(key);
        tdDOM1.appendChild(tdDOM1text)
        let tdDOM2 = document.createElement("td");
        let tdDOM2text = document.createTextNode(`${boeken[i][key]}`);
        tdDOM2.appendChild(tdDOM2text);
        trDOM.appendChild(tdDOM1);
        trDOM.appendChild(tdDOM2);
        tbodyDOM.appendChild(trDOM);
        tableDOM.appendChild(tbodyDOM);
    }
}

document.querySelector("div#table").appendChild(tableDOM);
*/


// EXTRA OEFENING: Maak een tabel aan met Javascript
// waarbij een gebruiker het aantal rijen en kolommen kan bepalen.
/*
let cellenUser = prompt("Geen een aantal cellen in", "Type aantal cellen");
let rijenUser = prompt("Geen een aantal rijen in", "Type aantal rijen");
cellenUser = parseInt(cellenUser);
rijenUser = parseInt(rijenUser);

function createTable (rijen, cellen) {
    const tableElement = document.createElement("table");
    const theadElement = document.createElement("thead");
    const tbodyElement = document.createElement("tbody");


    tableElement.appendChild(theadElement);
    tableElement.appendChild(tbodyElement);

    const trElement = document.createElement("tr");
    theadElement.appendChild(trElement);

    for(let aantalCellen = 1; aantalCellen <= cellen; aantalCellen++) {
        const thElement = document.createElement("th");
        thElement.id = `th_${aantalCellen}`;
        trElement.appendChild(thElement);
    }

    for(let aantalRijen = 1; aantalRijen <= rijen; aantalRijen++) {
        const trElement = document.createElement("tr");
        tbodyElement.appendChild(trElement);
        for(let aantalCellen = 1; aantalCellen <= cellen; aantalCellen++) {
            const tdElement = document.createElement("td");
            tdElement.id = `td_${aantalRijen}_${aantalCellen}`;
            trElement.appendChild(tdElement);
        }
    }

    document.querySelector("div#table").appendChild(tableElement);
}
*/