/*-------------tableau des armes--------------*/
/*-------------------------------------------- */
let weaponTable = document.createElement("table");
let trWeaponTable = document.createElement("tr");
// tableau contenant les id des cases du tableau des armes
let weaponIdTable = ["radar","bombe","torpille","missile"];

for (let i = 0; i < weaponIdTable.length; i++){
    let tdWeaponTable = document.createElement("td");
    tdWeaponTable.setAttribute("class", "weaponCases");
    tdWeaponTable.setAttribute("id",weaponIdTable[i]);
    trWeaponTable.appendChild(tdWeaponTable);
}
weaponTable.appendChild(trWeaponTable);
document.getElementById('weapon').appendChild(weaponTable);
/*-----------------------application des images-----------------------*/
let radar = document.getElementById("radar");
radar.style.backgroundImage = "url(img/weapons/radar.png)";

let bombe = document.getElementById("bombe");
bombe.style.backgroundImage = "url(img/weapons/bombe_a_fragment.png)";

let torpille = document.getElementById("torpille");
torpille.style.backgroundImage = "url(img/weapons/torpille.png)";

let missile = document.getElementById("missile");
missile.style.backgroundImage = "url(img/weapons/missile.png)";
/**/
for(let attribut of weaponIdTable){
    document.getElementById(attribut).style.backgroundSize = "contain";
    document.getElementById(attribut).style.backgroundRepeat = "no-repeat";
    document.getElementById(attribut).style.backgroundPosition = "center";
}