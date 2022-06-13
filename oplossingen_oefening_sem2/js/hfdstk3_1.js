// Oefening 1
/*
const birthYear =  parseInt(prompt("Geef uw geboortejaar in (yyyy)", "Geboortejaar (yyyy)"));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
alert((age > 20)
    ? "Je bent oud genoeg om de informatie op deze webpagina te bekijken"
    : "Je bent NIET oud genoeg om de informatie op deze webpagina te bekijken");
*/


// Oefening 2
/*
let sporten = prompt("Sport je graag?");
sporten = sporten.toLowerCase();
if (sporten === "ja") {
    document.getElementById("outputJs1").innerHTML = "Just do it!";
} else {
    document.getElementById("outputJs1").innerHTML = "Blijf dan maar liggen";
}
*/


// Oefening 3
/*
let datum = new Date();
let uren = datum.getHours();
uren = (uren < 10 ) ? `0${uren}` : uren;
let minuten = datum.getMinutes();
minuten = (minuten < 10 ) ? `0${minuten}` : minuten;
let seconden = datum.getSeconds();
seconden = (seconden < 10 ) ? `0${seconden}` : seconden;
let tijd = `${uren}u${minuten}m${seconden}s`;

// Indien uren kleiner is dan 10, dan is uren een string geworden i.p.v. een nummer. bv "02".
// Om zeker te zijn dat uren altijd een nummer is, voer ik een parseInt uit.
uren = parseInt(uren);

if (uren < 12 ) {
    document.querySelector("#outputJs1").innerHTML = `Welkom het is ${tijd} in de voormiddag.`;
} else {
    document.querySelector("#outputJs1").innerHTML = `Welkom het is ${tijd} in de namiddag.`;
}
*/


// Oefening 4
/*
let datum = new Date();
let uren = datum.getHours();
uren = (uren < 10 ) ? `0${uren}` : uren;
let minuten = datum.getMinutes();
minuten = (minuten < 10 ) ? `0${minuten}` : minuten;
let seconden = datum.getSeconds();
seconden = (seconden < 10 ) ? `0${seconden}` : seconden;
let tijd = `${uren}u${minuten}m${seconden}s`;

// Indien uren kleiner is dan 10, dan is uren een string geworden i.p.v. een nummer. bv "02".
// Om zeker te zijn dat uren altijd een nummer is, voer ik een parseInt uit.
uren = parseInt(uren);

if (7 < uren && uren < 12) {
    document.getElementById("outputJs1").innerHTML = `Goedemorgen het is nu ${tijd}`;
} else if (12 <= uren && uren < 18){
    document.getElementById("outputJs1").innerHTML = `Goede dag het is nu ${tijd}`;
} else {
    document.getElementById("outputJs1").innerHTML = `Goede avond het is nu ${tijd}`;
}

*/
/*
let datum = new Date();
let uren = datum.getHours();
uren = (uren < 10 ) ? `0${uren}` : uren;
let minuten = datum.getMinutes();
minuten = (minuten < 10 ) ? `0${minuten}` : minuten;
let seconden = datum.getSeconds();
seconden = (seconden < 10 ) ? `0${seconden}` : seconden;
let tijd = `${uren}u${minuten}m${seconden}s`;

// Indien uren kleiner is dan 10, dan is uren een string geworden i.p.v. een nummer. bv "02".
// Om zeker te zijn dat uren altijd een nummer is, voer ik een parseInt uit.
uren = parseInt(uren);

let tekst;

switch (true) {
    case (uren > 7 && uren < 12):
        tekst = "Goedemorgen het is nu";
        break;
    case(uren >=12 && uren < 18):
        tekst = "Goede dag het is nu";
        break;
    default:
        tekst = "Goede avond het is nu";
}

document.querySelector("#outputJs1").innerHTML = `${tekst} ${tijd}`;

*/

// Oefening 5
/*
const getal = parseInt(prompt("Geef een getal in.", "Type hier een getal in"));
let tekst;

switch (true) {
    case (getal < 50):
        tekst = "Te laag";
        break;
    case (getal === 50):
        tekst = "Proficiat";
        break;
    case (getal > 50):
        tekst = "Te hoog";
        break;
    default:
        tekst = "U heeft geen correct getal ingegeven.";
        break;
}

document.querySelector("p#outputJs1").innerHTML = tekst;
*/


// Oefening 6
/*
const antwoord = prompt("Sport je graag?", "Type hier uw antwoord");

switch(antwoord.toLowerCase()) {
    case "ja":
        alert("Just do it!");
        break;
    case "nee":
        alert("Blijf dan maar liggen");
        break;
    default:
        alert("Dat was geen duidelijk antwoord");
}
*/


// Oefening 7
/*
let maand = new Date().getMonth();
alert(maand);
let tekst;

switch(maand) {
    case 0:
        tekst = "Januari";
        break;
    case 1:
        tekst = "Februari";
        break;
    case 2:
        tekst = "Maart";
        break;
    case 3:
        tekst = "April";
        break;
    case 4:
        tekst = "Mei";
        break;
    case 5:
        tekst = "Juni";
        break;
    case 6:
        tekst = "Juli";
        break;
    case 7:
        tekst = "Augustus";
        break;
    case 8:
        tekst = "September";
        break;
    case 9:
        tekst = "Oktober";
        break;
    case 10:
        tekst = "November";
        break;
    case 11:
        tekst = "December";
        break;
    default:
        tekst = "Er ging iets mis.";
}
document.getElementById("outputJs1").innerHTML = `We zijn in de maand ${tekst}`;
*/


// Oefening 8
// Oefening 4 is al met een Switch gebouwd


// Oefening 9
/*
const getal = parseInt(prompt("Geef een getal van 1 tot 10 in."));

if (getal < 0 || getal > 10) {
    alert("Niet mogelijk");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${getal} x ${i} = ${getal * i}`);
    }
}
/*

// Oefening 10
/*
let hekjes = "";
let lijnen = 7;

for (let i = 1; i <= lijnen; i++) {
    hekjes += "#";
    console.log(hekjes);
}
*/


// Oefening 11
/*
let lijnen = parseInt(prompt("Uit hoeveel lijnen moet de driehoek bestaan?"));
if (lijnen < 1 || lijnen > 10) {
    alert("Niet mogelijk");
} else {
    let teller = 0;
    let hekjes = "";

    while (teller < lijnen) {
        hekjes += "#";
        console.log(hekjes);
        teller++;
    }
}
*/


// Oefening 12
/*
let lijnen = prompt("Uit hoeveel lijnen moet de driehoek bestaan?");
let hekjes;

for (let i = 1; i <= lijnen; i++) {
    hekjes = ""
    for (let j = 1; j <= lijnen - i; j++) {
        hekjes += " ";
    }
    for (let k = 1; k <= i; k++) {
        hekjes += "#";
    }
    console.log(hekjes);
}
*/


// Oefening 13
/*
let lijnen = prompt("Uit hoeveel lijnen moet de driehoek bestaan?");
let hekjes = "";

for (let i = 1; i <= lijnen; i++) {
    hekjes = "";
    for (let j = 1; j <= lijnen - i; j++) {
        hekjes += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        hekjes += "#";
    }
    console.log(hekjes);
}
*/
/*
const currentDate = new Date()  // Tue May 17 2022 21:51:26 GMT+0200 (Midden-Europese zomertijd)

const currentYear = new Date().getFullYear();     //2022
const currentMonth = new Date().getMonth()        // 4   <-- index van maand : 0 = Januarie , 1 = February
const currentDay = new Date().getDay();           // 2    <-- index van dag : 1 = maandag , 2 = dinsdag , ..

const currentHour = new Date().getHours();        // 21
const currentMinutes = new Date().getMinutes();   // 53
const currentSeconds = new Date().getSeconds();   // 19

console.log(currentDate)
console.log(currentYear)
console.log(currentMonth)
console.log(currentDay)

console.log(currentTime)
console.log(currentHour)

console.log(currentMinutes)
console.log(currentSeconds)




let maand = new Date().getMonth();

*/
