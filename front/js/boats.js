/*----------création du tableau des bateaux----------------- */
/*-------------------------------------------- */
let boatTable = document.createElement("table");
let trBoatTable = document.createElement("tr");
// tableau contenant les id des cases du tableau des bateaux
let boatIdTable = ["klein","croiseur","torpilleur","contre_torpilleur","porte_avion"];


for (let i = 0; i < boatIdTable.length; i++){
    let tdBoatTable = document.createElement('td');
    tdBoatTable.setAttribute("class", "boatCases");
    tdBoatTable.setAttribute("id",boatIdTable[i]);
    trBoatTable.appendChild(tdBoatTable);
}
boatTable.appendChild(trBoatTable);
document.getElementById('boat').appendChild(boatTable);
/*-----------------------apllication des images-----------------------*/
let klein = document.getElementById("klein");
klein.style.backgroundImage = "url(img/boats/celui-que-personne-aime.png)";

let croiseur = document.getElementById("croiseur");
croiseur.style.backgroundImage = "url(img/boats/croiseur.png)";

let torpilleur = document.getElementById("torpilleur");
torpilleur.style.backgroundImage = "url(img/boats/torpilleur.png)";

let contre_torpilleur = document.getElementById("contre_torpilleur");
contre_torpilleur.style.backgroundImage = "url(img/boats/contre-torpilleur.png)";

let porte_avion = document.getElementById("porte_avion");
porte_avion.style.backgroundImage = "url(img/boats/porte-avion.png)";
/**/
for(let attribut of boatIdTable){
    document.getElementById(attribut).style.backgroundSize = "contain";
    document.getElementById(attribut).style.backgroundRepeat = "no-repeat";
    document.getElementById(attribut).style.backgroundPosition = "center";
}