/* ----------------Plateau de l'adversaire--------------- */
/*-------------------------------------------------------*/

let opposingGrid = new Grid(10,0);
opposingGrid = opposingGrid.generate();
document.getElementById('opposite').appendChild(opposingGrid);