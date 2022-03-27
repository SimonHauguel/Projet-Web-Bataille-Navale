/* ----------------Plateau de l'adversaire--------------- */
/*-------------------------------------------------------*/
//création du plateau adversaires
let opposingGrid = new Grid(10,0);
opposingGrid = opposingGrid.generate();
document.getElementById('opposite').appendChild(opposingGrid);
//application des events à chaque cases
let casesOfGrid = document.getElementsByClassName('cases');
for(let oneCase of casesOfGrid){
    oneCase.addEventListener('click', event_plateau);
    oneCase.addEventListener('mouseover', event_ombre);
    oneCase.addEventListener('mouseleave', event_ombre_fin);
}
/*--------------------Mon plateau---------------- */
/*----------------------------------------------- */
//création de mon tableau
let friendlyGrid = new Grid(10,0);
friendlyGrid = friendlyGrid.generate();
document.getElementById('friendly').appendChild(friendlyGrid);
for(let i =100; i < 200; i++){
    casesOfGrid[i].addEventListener('mouseover', event_ombre_bateau);
    casesOfGrid[i].addEventListener('mouseleave', event_ombre_bateau_fin);
}
