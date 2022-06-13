//Oefening 1.1
/*
const getal1 = parseInt(prompt("Geef een getal in"));
const getal2 = parseInt(prompt("Geef nog een getal in"));

function vermenigvuldig(x, y) {
    return x * y;
}

document.getElementById("outputJs1").innerHTML = vermenigvuldig(getal1, getal2);
*/

//Oefening 1.2 METHODE 1
/*
const getal1 = parseInt(prompt("Geef een getal in"));

function verschil (getal){
    return 100 - getal;
}
document.getElementById("outputJs1").innerText = verschil(getal1);
*/
//Oefening 1.2 METHODE 2
/*
const getal1 = parseInt(prompt("Geef een getal in"));
const verschil = getal => 100 - getal; // Arrow Function
document.getElementById("outputJs1").innerText = verschil(getal1);
*/

//Oefening 1.3 DVO
/*
let getal1 = prompt("Geef een getal in");
getal1 = parseInt(getal1);
const getal2 = parseInt(prompt("Geef nog een getal in"));

if ((getal1 > 0 && getal1 < 100) && (getal2 > 0 && getal2 < 100 )) {
  isVijftig(getal1, getal2);
} else {
    alert('Eén van de door u ingevoerde getallen ligt niet tussen 0 en 100')
}

function isVijftig(get1, get2) {
    if (get1 === 50 || get2 === 50 || get1 + get2 === 50) {
        document.querySelector("p#outputJs1").innerHTML = "Hoera VIJFTIG.";
    } else {
        document.querySelector("p#outputJs1").innerHTML = "Helaas niet goed."
    }
}
*/


// Oefening 1.3 PRO
/*
let getal1 = prompt('Geef een getal in tussen 0 en 100', 'Type hier uw getal');
getal1 = parseInt(getal1);

let getal2 = prompt('Geef een getal in', 'Type hier uw getal');
getal2 = parseInt(getal2);

checkVijftig(getal1, getal2);

// Deze functie controleer of één van de twee getallen = 50 of de som van beide getallen = 50
function checkVijftig(get1, get2) {
    if (checkWaardeGetal(getal1) && checkWaardeGetal(getal2)) {
        if (get1 === 50 || get2 === 50 || get1 + get2 === 50) {20
            document.querySelector("p#outputJs1").innerHTML = "Hoera VIJFTIG.";
        } else {
            document.querySelector("p#outputJs1").innerHTML = "Helaas niet goed."
        }
    } else {
        alert('Eén van de door u ingevoerde getallen ligt niet tussen 0 en 100');
    }
}

// Deze functie controleert of een getal tussen 0 en 100 ligt.
function checkWaardeGetal(getal) {
    if (getal > 0 && getal < 100) {
        return true;
    } else {
        return false;
    }
}
*/

//Oefening 1.4 METHODE 1
/*
const zin = prompt("Type een zin in");

function startMetHallo(zin) {
    const eersteWoord = zin.slice(0, 5);
    if (eersteWoord.toLowerCase() === "hallo") {
        return zin;
    } else {
        const lowerCaseZin = zin.toLowerCase();
        return "Hallo" + " " + lowerCaseZin;
    }
}

document.getElementById("outputJs1").innerText = startMetHallo(zin);
*/
//Oefening 1.4 METHODE 2 xx
/*
const zin = prompt("Type een zin in");

function startMetHallo(zin) {
    let zinLow = zin.toLowerCase();
    let index = zinLow.search("hallo");
    if (index === 0) {
        return zin;
    } else {
        const lowerCaseZin = zin.toLowerCase();
        return `Hallo ${lowerCaseZin}`;
    }
}

document.getElementById("outputJs1").innerText = startMetHallo(zin);
*/

//Oefening 1.5
/*
const zin = prompt("Type een zin in");
const getal = prompt(`Geef een getal in tussen 0 en ${zin.length}`);

zinSplitsen(zin, getal);

function zinSplitsen(zin, getal) {
    if (getal > zin.length) {
        alert("Het getal is te groot");
    } else {
        const zin1 = zin.slice(0, getal);
        const zin2 = zin.slice(getal);
        alert(zin1);
        alert(zin2);
    }
}
*/

//Oefening 1.6
/*
const zin = prompt("Type een zin in");
const getal = prompt(`Geef een getal in tussen 0 en ${zin.length}`);

function verwijderTeken(zin, getal) {
    if (getal > zin.length) {
        alert("Het getal is te groot");
    } else {
        alert(zin.slice(0, getal-1));
        alert(zin.slice(getal));
    }
}

verwijderTeken(zin, getal);
*/
//Oefening 1.7 DVO
/*
const zin = prompt("Type een zin in");

function alleWoordenStartenMetHoofdletter() {
    const woordArray = zin.split(" ");
    let woordUpper = [];
    for (let i = 0; i < woordArray.length; i++) {
        woordUpper[i] = woordArray[i].charAt(0).toUpperCase() + woordArray[i].slice(1);
    }
    return woordUpper.join(" ");
}

document.getElementById("outputJs1").innerText = alleWoordenStartenMetHoofdletter(zin);


//Oefening 1.7 PRO
/*
const zin = prompt("Type een zin in");

function alleWoordenStartenMetHoofdletter() {
    const zinArray = zin.split(" ");
    const zinHoofdletterArray = zinArray.map((woord) => woord.charAt(0).toUpperCase() + woord.slice(1));
    return zinHoofdletterArray.join(" ");
}

document.getElementById("outputJs1").innerText = alleWoordenStartenMetHoofdletter(zin);
*/

//Oefening 1.8
/*
const zin = prompt("Type een zin in");

function telKlinkers(zin) {
    let count = 0;
    let klinkers = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for(let i = 0; i < zin.length; i++) {
        for(let j = 0; j < klinkers.length; j++){
            if (zin.charAt(i) === klinkers[j]) {
                count++;
            }
        }
    }
    return count;
}

document.getElementById("outputJs1").innerText = `Er zitten ${telKlinkers(zin)} klinkers in de zin.`;
*/

// Oefening 1.9 DVO
/*
grootsteGetal();
let opslag = 0;

function grootsteGetal() {
    let input = prompt("Geef een getal in of het woord stop als u wenst te stoppen", "Type hier uw getal");
    if (input === "stop") {
        document.getElementById("outputJs1").innerHTML = opslag;
    } else {
        input = parseInt(input);
        if (input > opslag) {
            opslag = input;
        }
        grootsteGetal()
    }
}
*/

// Oefening 1.9 PRO
/*
let getallen = [];

function grootsteGetal() {
    let input = prompt("Geef een getal in of het woord stop als u wenst te stoppen", "Type hier uw getal");

    if (input === "stop") {
        getallen.sort((a, b) => {
            return b - a;
        });
        document.getElementById("outputJs1").innerHTML = getallen[0];
    } else if (isNaN(input)) {
        alert("U heeft geen nummer ingegeven.");
    } else {
        getallen.push(parseInt(input));
        grootsteGetal()
    }
}

grootsteGetal();
*/
/*
const zin = "Dit is een zin"
console.log(zin.slice(0, 5))   // // "Dit i"
console.log(zin.slice(0, 3))   // // "Dit"
console.log(zin.slice(3))   // // "is een zin"
let index = zin.search("hallo");  // 0 --> false


function alleWoordenStartenMetHoofdletter() {
    const woordArray = zin.split(" ");
    let woordUpper = [];
    for (let i = 0; i < woordArray.length; i++) {
        woordUpper[i] = woordArray[i].charAt(0).toUpperCase() + woordArray[i].slice(1);
    }
    return woordUpper.join(" ");
}

document.getElementById("outputJs1").innerText = alleWoordenStartenMetHoofdletter(zin);

*/



/*

const zin = "Dit is een zin"
console.log(zin.slice(0, 5))   // // "Dit i"
console.log(zin.slice(0, 3))   // // "Dit"
console.log(zin.slice(3))   // // "is een zin"
let index = zin.search("hallo");  // 0 --> false


function alleWoordenStartenMetHoofdletter() {
    const woordArray = zin.split(" ");
    let woordUpper = [];
    for (let i = 0; i < woordArray.length; i++) {
        woordUpper[i] = woordArray[i].charAt(0).toUpperCase() + woordArray[i].slice(1);
    }
    return woordUpper.join(" ");
}

document.getElementById("outputJs1").innerText = alleWoordenStartenMetHoofdletter(zin);


function alleWoordenStartenMetHoofdletterPRO() {
    const zinArray = zin.split(" ");
    const zinHoofdletterArray = zinArray.map((woord) => woord.charAt(0).toUpperCase() + woord.slice(1));
    return zinHoofdletterArray.join(" ");
}

document.getElementById("outputJs1").innerText = alleWoordenStartenMetHoofdletter(zin);
*//*
let getallen = [1, 20, 50, 1, 32, 10];
getallen.sort((a, b) => {
    return b - a;})  // van GROOT naar KLEIN
getallen.sort((a, b) => {
    return a - b;})  // van KLEIN naar GROOT


document.getElementById("outputJs1").innerHTML = getallen;
*/