

// input met de atributte type= nummber
const nrInput = document.getElementById('nummerInput')
const btnNrInput = document.getElementById('btnControleerNummerInput')
const imgNrInput = document.getElementById('imgResultaatNrInput')

// input met de atributte type= nummber
btnNrInput.addEventListener("click", ControlleerInput);
function ControlleerInput(){
    if (nrInput.value % 2 === 0){
        alert('even')
        imgNrInput.src = "assets/thumbsup.png";
    }
    else{
        alert('oneven')
        imgNrInput.src = "assets/thumbsdown.png";
    }
}


//-----------------------------------------------------------------------------------------------------------
// hetzelfde alleen zijn de namen  anders
//  type = text met oninput
const textNrInput = document.getElementById('textNrInput')
const btnTextNrInput = document.getElementById('btnControleerTextNrInput')
const imgTextNrInput = document.getElementById('imgResultaatTextNrInput')
//  type = text met oninput
btnTextNrInput.addEventListener("click", ControlleerInput2);
function ControlleerInput2(){
    if (textNrInput.value % 2 === 0){
        alert('even')
        imgTextNrInput.src = "assets/thumbsup.png";
    }
    else{
        alert('oneven')
        imgTextNrInput.src = "assets/thumbsdown.png";
    }
}


