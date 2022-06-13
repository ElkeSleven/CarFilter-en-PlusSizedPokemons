// Oefening 1     array en obj
/*
let opleidingen = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling", "Software Management", "Artificiële Intelligentie", "Systemen en Netwerkbeheer"];
console.log(opleidingen.length);
*/


// Oefening 2 array en obj
/*
let opleidingen = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling", "Software Management", "Artificiële Intelligentie", "Systemen en Netwerkbeheer"];
opleidingen.push("Multimedia");
console.log(opleidingen);
*/


// Oefening 3 array en obj
/*
let opleidingen = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling", "Software Management", "Artificiële Intelligentie", "Systemen en Netwerkbeheer"];
let string = opleidingen.join("<br />");
document.getElementById("outputJs1").innerHTML = string;
*/


//Oefening 4 array en obj
/*
const honden = ["Cocker Spaniël", "Beagle", "Border Collie", "Chihuahua", "Collie", "Dalmatiër", "Boxer", "Afghaanse Windhond", "Duitse Herdershond", "Dobermann"];
const nummer = prompt("Geef een getal van 1 tot 10 in");

if (nummer < 1 || nummer > 10) {
    alert("Sorry, katten niet toegelaten");
} else {
    alert(honden[nummer-1]);
}
*/


// Oefening 5 array en obj
/*
const honden = ["Cocker Spaniël", "Beagle", "Border Collie", "Chihuahua", "Collie", "Dalmatiër", "Boxer", "Afghaanse Windhond", "Duitse Herdershond", "Dobermann"];
honden.unshift("Duitse Dog", "Engelse Buldog", "Fox Terriër", "Jack Russell", "Pekinees");
console.log(honden);
*/

// Oefening 6 array en obj
/*
const honden = ["Cocker Spaniël", "Beagle", "Border Collie", "Chihuahua", "Collie", "Dalmatiër", "Boxer", "Afghaanse Windhond", "Duitse Herdershond", "Dobermann"];
honden.shift();
honden.pop();
console.log(honden);
document.getElementById('outputJs1').innerText = honden.join(" | ");
*/


//Oefening 7 array en obj
/*
const honden = ["Cocker Spaniël", "Beagle", "Border Collie", "Chihuahua", "Collie", "Dalmatiër", "Boxer", "Afghaanse Windhond", "Duitse Herdershond", "Dobermann"];
honden.splice(1, 1, "Teckel", "Keeshond");
document.getElementById('outputJs1').innerText = honden.join(" | ");
*/


// Oefening 8 DVO array en obj
/*
const dagenMaand = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const maand = new Date().getMonth();
const jaar = new Date().getFullYear();
let teller = 1;

while (teller <= dagenMaand[maand]) {
    let dd = (teller < 10) ? `0${teller}` : teller;
    let mm = (maand < 10) ? `0${maand + 1}` : maand + 1;
    console.log(`${dd}-${mm}-${jaar}`);
    teller++;
}


*/
// Oefening 8 PRO   array en obj  en date
/*
let dagenMaand = [];
let maand = new Date().getMonth();
let jaar = new Date().getFullYear();
let teller = 1;
//begin test
console.log(new Date(2022, 1, 5)); // 05 februari 2022
console.log(new Date(2022, 1, 5).getDate()); // dag als nummer (1-31)
console.log(new Date(2022, 1, 0)); // 31 januari 2022
console.log(new Date(2022, 1, 0).getDate()); // dag als nummer (1-31)
//einde test
for (i = 1; i <= 12; i++) {
    dagenMaand.push(new Date(jaar, i, 0).getDate());
}

while (teller <= dagenMaand[maand]) {
    let dd = (teller < 10) ? `0${teller}` : teller;
    let mm = (maand < 10) ? `0${maand + 1}` : maand + 1;
    console.log(`${dd}-${mm}-${jaar}`);
    teller++;
}

*/

// Oefening 9 DVO
/*
const dagenMaand = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekdagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const maand = new Date().getMonth(); //3
const jaar = new Date().getFullYear();

for(let teller = 1; teller <= dagenMaand[maand]; teller++) {
    let dd = (teller < 10) ? `0${teller}` : teller;
    let mm = (maand < 10) ? `0${maand + 1}` : maand + 1;
    let yyyy = jaar;

    // maand-1 want maanden zijn zero-based indexed. Januari is index 0...
    let dag = new Date(yyyy, mm-1, dd).getDay();
    console.log(`${weekdagen[dag]} ${dd}-${mm}-${yyyy}`);
}
*/


// Oefening 9 PRO
/*
let dagenMaand = [];
let maand = new Date().getMonth();
let jaar = new Date().getFullYear();
let teller = 1;

for (i = 1; i <= 12; i++) {
    dagenMaand.push(new Date(jaar, i, 0).getDate());
}

let weekdagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

while (teller <= dagenMaand[maand]) {
    let dd = (teller < 10) ? `0${teller}` : teller;
    let mm = (maand < 10) ? `0${maand + 1}` : maand + 1;
    console.log(`${weekdagen[new Date(jaar, maand, teller).getDay()]}, ${dd}-${mm}-${jaar}`);
    teller++;
}
*/


// EXTRA OEFENING Toon alle dagen van het jaar (in Javascirpt Date Formaat)
/*
let dagenMaand = [];
let jaar = new Date().getFullYear();
let datums = "";

for (let i = 1; i <= 12; i++) {
    dagenMaand.push(new Date(jaar, i, 0).getDate());
}

dagenMaand.map((aantalDagen, index) => {
    for (let i = 1; i <= aantalDagen; i++) {
        datums += `<li>${new Date(jaar, index, i).toDateString()}</li>`;
    }
});

document.getElementById("outputJSlist").innerHTML = datums;


*/












/*
let array = ["Elektronica-ICT", "Toegepaste Informatica"];

array.push("Multimedia");
// -->  ["Elektronica-ICT", "Toegepaste Informatica", "Multimedia"];
array.unshift("Programmeren")
// -->   ["Programmeren", "Elektronica-ICT", "Toegepaste Informatica"];
array.splice(1, 0, "Programmeren", "Multimedia");  // voegt toe op vanaf index  1
// --> ["Elektronica-ICT","Programmeren", "Multimedia", "Toegepaste Informatica"];
array.splice(0, 1, "Programmeren", "Multimedia");  // del van index 0  1 element
// --> ["Programmeren", "Multimedia", "Toegepaste Informatica"];


*/
let array = ["a", "a", 1 , 3 , 3]
console.log(array.sort().reduce(function(a, b){ if (b !== a[0]) a.unshift(b); return a }, []))
// ["a", 1 , 3]
/*
array = ["Programmeren", "Elektronica-ICT", "Toegepaste Informatica","Multimedia"];
console.log(array.length);   // 4
console.log(array.shift());  // eerste waarde --> Programmeren
console.log(array.pop());    // laatse waarde --> Multimedia


let string = array.join("<br />");
document.getElementById("outputJs1").innerHTML = string;


*/























