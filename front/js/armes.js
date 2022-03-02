/*-------------tableau des armes--------------*/

let weaponTable = document.createElement('table');
let trWeaponTable = document.createElement('tr');
// marqueur des cases
let attributeTable = ["radar","bombe","torpille","missile"];
//nombre d'armes
let numberOfWeapons = 4;

for (let i = 0; i < numberOfWeapons; i++){
    let tdWeaponTable = document.createElement('td');
    tdWeaponTable.setAttribute("id",attributeTable[i]);
    trWeaponTable.appendChild(tdWeaponTable);
}
weaponTable.appendChild(trWeaponTable);
document.getElementById('body').appendChild(weaponTable);