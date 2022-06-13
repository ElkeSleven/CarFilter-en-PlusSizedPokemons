// Oefening 1.1 DVO  Objecten
/*
const persoon = {
    voornaam: "Jane",
    achternaam: "Doe",
    tel: "+32 485 31 26 41",
    gbdatum: "25-04-1985",
    email: "Jane.Doe@pxl.be",
}
*/

// Oefening 1.1 PRO Objecten
/*
const person = {
    lastName: "Doe",
    firstName: "Jane",
    tel: 0476854789,
    //Datum format aanpassen met toLocaleDateString en configuratie object
    //birthDay: new Date(1978, 3, 25).toLocaleDateString("nl-NL", {
    //   weekday: "long",
    //    year: "numeric",
    //    month: "long",
    //    day: "numeric"
    //}),
    email: "Jane.Doe@pxl.be"
}
*/


// Oefening 1.2  Objecten
/*
const person = {
    lastName: "Doe",
    firstName: "Jane",
    tel: 0476854789,
    gbdatum: "25-04-1985",
    email: "Jane.Doe@pxl.be",
}

person.getName = function() {
    return `Mijn naam is ${this.firstName} ${this.lastName} en ik ben geboren op ${this.birthDay}.`;
}

console.log(person.name());
*/

// Oefening 1.3     Objecten
/*
const person = {
    lastName: "Doe",
    firstName: "Jane",
    tel: 0476854789,
    birthDay: new Date(1978, 3, 25),
    email: "Jane.Doe@pxl.be",
    getAge() {
        return Math.floor((Date.now() - this.birthDay) / 1000 / 60 / 60 / 24 / 365);
    },
    print() {
        return `Ik ben ${this.firstName} ${this.lastName}, ik ben ${this.age()} jaar`;
    },
}

person.length = "1m82";
person.weight = "71 kg";
person.skin = "blank";
person.eye = "blauw";

for (let property in person) {
    console.log(`${property}: ${person[property]}`)
}
*/


// Oefening 1.4    Objecten
/*
const person = {
    lastName: "Doe",
    firstName: "Jane",
    tel: 0476854789,
    email: "Jane.Doe@pxl.be"
    length: 181,
    weight: 68
}


delete person.length;
delete person.weight;

const personArray = Object.values(person);
console.log(personArray);
*/


// Oefening 1.5    Objecten
// 1 DVO
let klanten = [
  { voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt' },
  { voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk' },
  { voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk' },
  { voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek' },
  { voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen' },
];
/*
function filterCity(filter) {
    const result = [];
    for (let i = 0; i < klanten.length; i++) {
        if (klanten[i].stad == filter){
            result.push(klanten[i]);
        }
    }
    return result;
}
console.log(filterCity("Hasselt"));
*/


// 1 PRO   Objecten
/*
function filterCity(property) {
    const result = klanten.filter((klant => klant.stad === property));
    return result;
}

console.log(filterCity("Genk"));
*/


// 2 Objecten
/*
function letters(property) {
    for (let i = 0; i < klanten.length; i++) {
        console.log(klanten[i][property] + ' : ' + klanten[i][property].length);
    }
    return letters;
}
letters('naam');
*/


// 3
/*
function changeProperty() {
    let result = []
    for (let i = 0; i < klanten.length; i++) {
        result.push('Antwerpen')
        klanten[i].stad = result.join('-');
        console.log(klanten[i]);
    }
}
changeProperty();
*/


// 4
/*
namenString();

function namenString() {
  let stringNamen = '';
  for(let i = 0; i < klanten.length; i++) {
    stringNamen += klanten[i].voornaam;
    lettersEven(stringNamen, i);
  }
}

function lettersEven(stringNamen, index) {
    let stringToCheck = stringNamen;
    if(stringToCheck.length % 2 === 0) {
      const laatsteNaam = klanten[index].voornaam;
      let lastIndex = stringToCheck.lastIndexOf(laatsteNaam);
      let newString = stringToCheck.substring(0, lastIndex);
      console.log(newString + laatsteNaam.toUpperCase());
    } else {
      console.log(stringNamen);
    }
  }
*/


  // 5
/*
  function eigenschappen() {
      let paraffen = '';
      for (let klant of klanten) {
          let  eigenschappen = []
          for (let key in klant) {
              eigenschappen.push(key + ": " + klant[key]);
              console.log(eigenschappen);
          }
          paraffen += "<p>" + eigenschappen.join(" | ") +"</p>";
          console.log(paraffen);
      }
      return paraffen;
  }
  document.getElementById("paraffen").innerHTML = eigenschappen();
*/



































