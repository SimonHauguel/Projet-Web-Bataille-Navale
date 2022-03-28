const ownboard = document.getElementById('ownboard');
const otherboard = document.getElementById('otherboard')

const bomb = document.getElementById('bomb')
const torpille = document.getElementById('torpille')


const boardPassed = document.location.search.slice(1)
const SIZE = 10;
let turn = 0;
let weapon = "normal"

toDataBoard = () => {

    let i = 0
    let acc = []
    let subacc = []
    for (e in boardPassed) {
        if (i % 10 === 0 && i !== 0) {
            acc.push(subacc)
            subacc = [];
        }
        subacc.push(parseInt(boardPassed[i]))
        i++;
    }
    acc.push(subacc);
    return acc;
}

makeBoard = (n) => {
    let table = "<table>"
    for (let i = 0; i < SIZE; i++){
        let temp = "<tr>"
        for (j = 0; j < SIZE; j++) temp += `<td class=\"tile\" id=${n ? "own" : "other"}${i}${j}></td>`
        temp += "</tr>"
        table += temp
    }
    return table
}

ownboard.innerHTML   = makeBoard(1);
otherboard.innerHTML = makeBoard(0);

k = 0
for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++){
        let element = document.getElementById(`own${i}${j}`);
        element.style.backgroundColor = boardPassed[k] !== "0" ? "red" : "green"
        k++;
        document.getElementById(`other${i}${j}`).style.backgroundColor = 'grey';
        document.getElementById(`other${i}${j}`).onclick = () => {
            if (!turn) return;
            socket.emit(weapon, {x : i, y : j})
            switch (weapon) {
                case "bomb": bomb.disabled = "disabled"; weapon = "normal"; break;
                case "torpille" : torpille.disabled = "disabled"; weapon = "normal"; break;
            }
        }
    }
}

bomb.onclick = () => weapon = "bomb"
torpille.onclick = () => weapon = "torpille"