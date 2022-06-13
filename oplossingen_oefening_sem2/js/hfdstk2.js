//Extra oefening input validatie
/*
let naam = prompt("Geef uw naam in.", "Type hier uw naam");
naam = naam.trim();
alert((naam == "Type hier uw naam" || naam == "") ? "U heeft niets ingevuld" : naam);
*/

//Oefening 1.1
/*
let zin1, zin2, zin3;
zin1 = "Dit is de eerste zin.";
zin2 = "Dit is de tweede zin.";
zin3 = "Dit is de derde zin.";
let zin4 = "Dit is zin 4.\nDit is zin 4.\nDit is zin 4.";

console.log(zin1);
console.log(zin2);
console.log(zin3);

alert(`${zin1}\n${zin2}\n${zin3}`);
console.log(zin1 + "\n" + zin2 + "\n" + zin3);
alert(zin4);
console.log(zin4);

document.getElementById("outputJs1").innerHTML = zin1 + "<br />" + zin2 + "<br />" + zin3;
*/


//Oefening 1.2
/*
let zin1 = "Dit is de eerste zin.", zin2 = "Dit is de tweede zin.", zin3 = "Dit is de derde zin.";
alert(zin1 + " " + zin2 + " " + zin3)
document.getElementById("outputJs1").innerHTML = `${zin1} ${zin2} ${zin3}`;
*/

//Oefening 1.3

let zin = "Ik wil een koekje.";
document.getElementById("outputJs1").innerHTML = zin;
console.log(zin.charAt(0));
console.log(zin.charAt(3));
console.log(zin.lastIndexOf("k"));
console.log(zin.lastIndexOf("e"));
console.log(zin.length);


//Oefening 1.4
/*
const zinKoekje = "Ik wil een koekje.";
const zinLasagne = zinKoekje.replace("koekje", "lasagne van PXL-catering");
document.getElementById("outputJs1").innerHTML = zinLasagne.toUpperCase();
console.log(zinKoekje);
*/


//Oefening 1.5
/*
const woord = prompt("Geef een woord in.", "Type hier uw woord.");
const karakters = (woord.length === 1) ? "karakter" : "karakters";
alert(`Uw woord bevat ${woord.length} ${karakters}.`);
*/

//Oefening 1.6
/*
const zin = prompt("Geef uw zin in.");
const eersteSpatie = zin.indexOf(" ", 1);
alert(eersteSpatie);
*/

//Oefening 1.7
/*
let getal1 = prompt("Geef een getal in.");
getal1 = parseInt(getal1);
const getal2 = parseInt(prompt("Geef een getal in."));
document.getElementById("outputJs1").innerHTML = `De uitkomst van ${getal1} x ${getal2} = ${getal1 * getal2}`;
*/


//Oefening 1.8
/*
let getal1 = prompt("Geef een geheel getal in", "Type hier uw getal");
getal1 = parseInt(getal1);
const getal2 = parseInt(prompt("Geef een geheel getal in", "Type hier uw getal"));

document.getElementById("outputJs1").innerHTML = `${getal1} x ${getal2} = ${getal1 * getal2}`;
document.getElementById("outputJs2").innerHTML = `${getal1} + ${getal2} = ${getal1 + getal2}`;
document.getElementById("outputJs3").innerHTML = `${getal1} - ${getal2} = ${getal1 - getal2}`;
document.getElementById("outputJs4").innerHTML = `${getal1} / ${getal2} = ${getal1 / getal2}`;
*/

//Oefening 1.9  ..
/*
let getal1 = parseFloat(prompt("Geef een geheel getal in", "Type hier uw getal"));
let getal2 = parseFloat(prompt("Geef een geheel getal in", "Type hier uw getal"));

document.getElementById("outputJs1").innerHTML = `${getal1} x ${getal2} = ${getal1 * getal2}`;
document.getElementById("outputJs2").innerHTML = `${getal1} + ${getal2} = ${getal1 + getal2}`;
document.getElementById("outputJs3").innerHTML = `${getal1} - ${getal2} = ${getal1 - getal2}`;
document.getElementById("outputJs4").innerHTML = `${getal1} / ${getal2} = ${getal1 / getal2}`;
*/

//Oefening 1.10
/*
let leeftijd = prompt("Bent je 18 jaar of ouder?", "Antwoord met ja of nee");
if (leeftijd.toUpperCase() === "NEE") {
    alert("Helaas... probeer de volgende editie maar opnieuw!");
} else {
    alert("Welkom!");
}
*/
/*
let leeftijd = prompt("Bent je 18 jaar of ouder?", "Antwoord met ja of nee");
let uitspraak = (leeftijd.toLowerCase() === "nee") ?"Helaas... probeer de volgende editie maar opnieuw!" : "Kom maar binnen.";
alert(uitspraak);
*/
/*
let naam = prompt("Geef uw naam in.", "Type hier uw naam");
naam = naam.trim();
alert((naam === "Type hier uw naam" || naam === "") ? "U heeft niets ingevuld" : naam);


let string  = 'aBcDe'
string.toLowerCase();
string.toUpperCase();
string.length;

let getal_string = '3'
let getal = parseInt(getal_string);

let zin = 'Dit is een zin'
zin.indexOf(" ", 1);   // zegt op welke index de EERSTE spacie staat
zin.indexOf("is", 1);   // zegt op welke index de EERSTE 'is' staat




console.log(getal)

*/
