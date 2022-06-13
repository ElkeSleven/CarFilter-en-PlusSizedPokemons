const countries = [
    {name: 'Belgium', population: 11.46, km: 30689},
    {name: 'France', population: 67.06, km: 643801},
    {name: 'USA', population: 238.2, km: 9834000},
    {name: 'Russia', population: 144.4, km: 17130000},
    {name: 'China', population: 1398, km: 9597000},
];
const select =  document.getElementById('countries');
let selectTarget = '';
const btnLargestCountry = document.querySelector('input')
btnLargestCountry.addEventListener('click', ShowLargestCounty)
window.onload = function (){
    FillSelectOptions();
    AddEventlissener();
}

function FillSelectOptions(){
    for(let i = 0; i < countries.length; i++){
        let option = document.createElement('option')
        option.innerHTML = countries[i].name
        select.add(option);
    }
}
function AddEventlissener(){
    select.addEventListener('change' , (e) =>{
        const  r = document.getElementById('result')
        selectTarget = `${e.target.value.toString()}`
        let a = countries.find(el => el.name = selectTarget)
        r.innerHTML = `${a.name} has a population of ${a.population} and is ${a.km} km large.`
    })
}
function ShowLargestCounty(){
    let big = countries.sort(  (a,b) =>{
        return b.km - a.km;
    })
    let bigestCountry = big[0]
    document.getElementsByTagName("p")[1].innerHTML = ` The largest coutry in this list is ${bigestCountry.name} is ` ;


}


