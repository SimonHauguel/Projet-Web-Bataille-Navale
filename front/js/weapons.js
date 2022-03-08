/*-------------tableau des armes--------------*/
/*-------------------------------------------- */
let weaponTable = document.createElement('table');
let trWeaponTable = document.createElement('tr');
// tableau contenant les id des cases du tableau des armes
let attributeTable = ["radar","bombe","torpille","missile"];
//nombre d'armes
let numberOfWeapons = 4;

for (let i = 0; i < numberOfWeapons; i++){
    let tdWeaponTable = document.createElement('td');
    tdWeaponTable.setAttribute("class", "weaponCases");
    tdWeaponTable.setAttribute("id",attributeTable[i]);
    trWeaponTable.appendChild(tdWeaponTable);
}
weaponTable.appendChild(trWeaponTable);
document.getElementById('weapon').appendChild(weaponTable);
/*-----------------------apllication des images-----------------------*/
let radar = document.getElementById("radar");
radar.style.backgroundImage = "url(img/weapons/radar.png)";

let bombe = document.getElementById("bombe");
bombe.style.backgroundImage = "url(img/weapons/bombe_a_fragment.png)";

let torpille = document.getElementById("torpille");
torpille.style.backgroundImage = "url(img/weapons/torpille.png)";

let missile = document.getElementById("missile");
missile.style.backgroundImage = "url(img/weapons/missile.png)";
/**/
for(let attribut of attributeTable){
    document.getElementById(attribut).style.backgroundSize = "contain";
    document.getElementById(attribut).style.backgroundRepeat = "no-repeat";
    document.getElementById(attribut).style.backgroundPosition = "center";
}