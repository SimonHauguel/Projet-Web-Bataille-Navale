/* ----------------tableau bataille naval--------------- */
/*-------------------------------------------------------*/

// creation de la grille
let table = document.createElement('table');
// taille de la grille
let tabSize = 10;

for (let i = 0; i < tabSize; i++) {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let j = 0; j < tabSize; j++) {

        let td = document.createElement('td');
        tr.appendChild(td);
        td.addEventListener('click', event_plateau);
    }
}
document.getElementById('body').appendChild(table);