/* ----------------Plateau de l'adversaire--------------- */
/*-------------------------------------------------------*/
//création du plateau adversaires
let opposingGrid = new Grid(10,0);
opposingGrid = opposingGrid.generate();
document.getElementById('opposite').appendChild(opposingGrid);
//application des events à chaque cases
let casesOfGrid = document.getElementsByClassName('cases');
for(let i =0; i < 100; i++){
    casesOfGrid[i].addEventListener('click', event_plateau);
    casesOfGrid[i].addEventListener('mouseover', event_ombre);
    casesOfGrid[i].addEventListener('mouseleave', event_ombre_fin);
}
/*--------------------Mon plateau---------------- */
/*----------------------------------------------- */
//création de mon tableau
let friendlyGrid = new Grid(10,0);
friendlyGrid = friendlyGrid.generate();
document.getElementById('friendly').appendChild(friendlyGrid);
for(let i =100; i < 200; i++){
    casesOfGrid[i].addEventListener('mouseover', event_ombre_bateau);
    casesOfGrid[i].addEventListener('mouseleave', event_ombre_fin);
}