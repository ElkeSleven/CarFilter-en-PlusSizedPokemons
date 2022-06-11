const vehicles = [
    {
        model: 'Mercedes AMG',
        license: 'B',
        odometer: 0,
        price: 240000,
        imgPath: 'mercedes-amg.jpg'
    },
    {
        model: 'Kawasaki Ninja 400',
        license: 'A',
        odometer: 11500,
        price: 5500,
        imgPath: 'kawasaki-ninja.jpg'
    },
    {
        model: 'Ford Mondeo',
        license: 'B',
        odometer: 14000,
        price: 30000,
        imgPath: 'ford-mondeo.jpeg'
    },

    {
        model: 'Ducati Panigale Superbike',
        license: 'A',
        odometer: 2499,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
    {
        model: 'Ford Fiesta ST',
        license: 'B',
        odometer: 45124,
        price: 19999,
        imgPath: 'ford-fiesta-st.jpg'
    },
    {
        model: 'Ducati Panigale Superbike 2',
        license: 'A',
        odometer: 1000,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
];
let selectionChangedCounter = 0;
let selectedSelect = 'alle';

window.onload = function () {
    MaakSelect();
    CreateProductCards();
}
//Maak in javascript een select aan met drie opties: alle, A en B.
function MaakSelect(){
    let opties = ["alle", "A", "B"]
    let select = document.createElement('select')
    select.name = 'rijbewijs';
    opties.forEach(opt => {
        let option = document.createElement('option')
        option.innerText = opt;
        option.value = opt;
        select.add(option)

    })

    // voeg een EventListener toe
    select.addEventListener('change', () =>
    {
        // deze hebben we nodig om bij te houden hoeveel keer de gebruiker de select heeft verandered
        selectionChangedCounter++;
        // eerst de container leeg maken voor je ze terug vult
        document.getElementsByClassName('card-container')[0].remove();
        // maak de ProductCard
        CreateProductCards();

    });
    document.body.appendChild(select)

}
function CreateProductCards(){
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    let arrayToRender ;
    if (selectionChangedCounter < 3) {
        let sortedArray = GetSortedArrayBySelectedSelect();
        arrayToRender  = GetArrayToRender(sortedArray)
    }
    //Indien de waarde van de select 3 keer veranderd is
    // is onafhankelijk van wat ook geselecteerd is geen enkele van de bovenstaande filteringen meer actief.
    else {
        arrayToRender = GetArrayToRenderByChangedCounterTrigger();
    }

    arrayToRender.forEach(obj => {
        let card = document.createElement('div')
        card.classList.add('card')
        cardContainer.appendChild(card)
        let cardImg = document.createElement('div')
        cardImg.classList.add('card__img')
        let img = document.createElement('img')
        img.src = `assets/${obj.imgPath}`
        cardImg.appendChild(img)
        card.appendChild(cardImg)
        let cardInfo = document.createElement('div')
        cardInfo.classList.add('card__info')
        cardInfo.innerHTML =
                 `
                    <div>${obj.model}</div>
                    <div>price: <span>${obj.price}</span> euro</div>
                    <div>odometer: ${obj.odometer} km</div>         
                   `
        card.appendChild(cardInfo)
        // Zorg ervoor dat als de prijs groter dan 20.000 is de prijs in de kleur ‘darkorange’ weergeven wordt.
        if(obj.price > 20000){
            let xx = cardInfo.getElementsByTagName('span')[0]
            xx.style.color = 'darkorange';
        }
    })
    document.body.appendChild(cardContainer);



}
function GetSortedArrayBySelectedSelect(){
    selectedSelect = document.getElementsByName('rijbewijs')[0].value;
    if (selectedSelect === 'alle' ){
        return vehicles
    }
    else {
        return vehicles.filter(v => {
            return v.license === selectedSelect;
        })
    }

}
function GetArrayToRender(sortedArray){
    let orderedArray = sortedArray; // in geval van 'alle' wordt gewoon de orginele array returned.

    //** 1.Indien “A” geselecteerd is zijn enkel de motto’s zichtbaar,
    //** 2 geordend volgens prijs
    //** 3 indien de prijs hetzelfde is komt die met het
    //** 4 minste aantal kilometers als eerste.
    if (selectedSelect === 'A') {   // 1
        orderedArray = sortedArray.sort((a, b) => {
            if (a.price === b.price) {          // 3
               return a.odometer - b.odometer  // 4
            } else {
                return a.price - b.price // 2
           }
        });


    //** 1 Indien “B” geselecteerd wordt zijn enkel de auto’s zichtbaar.
    //** 2 Zorg ervoor dat deze in alfabetische volgorde getoond worden. ( a -> z )
    //** 3 Zorg ervoor dat deze in omgekeerde alfabetische volgorde getoond worden. ( z -> a )
    } else if (selectedSelect === 'B') { // 1
        orderedArray = sortedArray.sort((a, b) => {
            let firstCarName = a.model.toLowerCase();
            let secondCarName = b.model.toLowerCase();
            return (firstCarName - secondCarName);  //2 //
        })
    }

    return orderedArray;
}


function  GetArrayToRenderByChangedCounterTrigger(){

    //** 1  In de plaats worden alle voertuigen getoond
//** 2  in volgorde van klein naar groot
//** 3 op bassis van de restdeling van de som van het aantal karakters in de naam
//**  plus het aantal kilometers,
//**  gedeeld door het aantal keer dat de select van waarde is veranderd.

    // 1 : vehicles
    return vehicles.sort((a, b) => {
        let aantalKaraktersA = a.model.length;
        let aantalKaraktersB = b.model.length;

        let restdelingA = (aantalKaraktersA + a.odometer) % selectionChangedCounter;  //3
        let restdelingB = (aantalKaraktersB+ b.odometer) % selectionChangedCounter;
        return restdelingA - restdelingB; //2
    })
}
