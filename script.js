const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    color = e.target.classList[1]
  console.log(color);
  newSquarre(color);
  //Ajout dans le log 
  logger(getElapsedTime(), "Created a new " + color + " squarre");
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//Select div
let divContainerElt = document.querySelector(".displayedsquare-wrapper");

//Focntion qui crée un nouveau carré
function newSquarre(color){
    //Création de la div
    let squarre = document.createElement("div");
    //Ajout des classes sur la DIV
    squarre.classList.add("displayedsquare");
    //squarre.classList.add("actionsquare");
    squarre.classList.add(color);
    squarre.addEventListener("click", function (e){
       alert(e.target.classList[1])
    });
    //Ajout de l'event sur le carré


    //Placement de la div
    divContainerElt.appendChild(squarre);
    


}


//LOG

//Selection de la zone de log
let logElt = document.querySelector("ul");
console.log(logElt);

//function qui ajoute une ligne de log
function logger(time, text){
    let liElt = document.createElement("li");
    let litEltText = document.createTextNode(time + " " + text);
    liElt.appendChild(litEltText);
    logElt.appendChild(liElt);

}

//Event on body
//select the body
let bodyElt = document.querySelector("body");


let clickOnBody = (e)=>{
    console.log(e.key);
    switch(e.key){
        case " ":
            changeBackgroundColor();
            logger(getElapsedTime(), " Space bar pressed");
            break;
        case "i":
            eraseChild(document.querySelector("ul"));
            break;
        case "s":
            eraseChild(divContainerElt);
            break;

            
    }
}


//Add event on body
bodyElt.addEventListener("keypress",clickOnBody);


function changeBackgroundColor(){
    let bgColor = getRandomColor();
    bodyElt.style.backgroundColor = bgColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function eraseChild(parent){  
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

  }





