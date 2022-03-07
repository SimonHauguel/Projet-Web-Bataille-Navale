/* ----------------Plateau de l'adversaire--------------- */
/*-------------------------------------------------------*/

let opposingGrid = new Grid(10,0);
opposingGrid = opposingGrid.generate();
document.getElementById('opposite').appendChild(opposingGrid);
let casesOfGrid = document.getElementsByClassName('cases');
for(let oneCase of casesOfGrid){
    oneCase.addEventListener('click', event_plateau);
}