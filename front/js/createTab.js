// tableau bataille naval

let table = document.createElement('table');


// tr.appendChild(td);
// table.appendChild(tr);



for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = 'cul';
        td.addEventListener('click',event_plateau);
    }
}


document.getElementById('body').appendChild(table);