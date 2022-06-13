//Oefening 2
/*
let naam = prompt("Gelieve uw naam in te vullen", "Type hier uw naam");
alert(`Welkom ${naam}`);



//Oefening 3

let getal = prompt("Geef een getal in", "Type hier uw getal");
console.log(getal);


//Oefening 4
/*
let naam = prompt("Geef uw naam in.", "Type hier uw naam");
let aantalDagen = 12;
document.getElementById("aftellen").innerHTML = `${aantalDagen} dagen tot code geel`;
document.getElementById("naam").innerHTML = naam;
document.getElementById("quote").innerHTML = `Kom terug uit uw kot ${naam}!`;
*/


//EXTRA
//Oefening 3 Uitbreiding

let min = prompt("Geef een minimum getal in.", "Type hier uw getal");
min = parseInt(min);
let max = parseInt(prompt("Geef een maximum getal in.", "Type hier uw getal"));
let random = Math.floor(Math.random() * (max - min + 1) + min);
let getal = parseInt(prompt(`Geef een getal van ${min} tot en met ${max} in`, "Type hier uw getal"));
alert((getal === random) ? "Uw heeft het getal goed geraden!" : "Helaas, uw heeft het getal niet geraden.");











