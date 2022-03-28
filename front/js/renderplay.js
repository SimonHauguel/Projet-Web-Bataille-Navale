const ownboard = document.getElementById('ownboard');
const otherboard = document.getElementById('otherboard')

const bomb = document.getElementById('bomb')
const torpille = document.getElementById('torpille')

const allColors = [ '#FFAF58', '#58FF5E', '#FF58E0', '#FF586C', '#FFF758']

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

        switch (boardPassed[k]) {
            case "1": element.style.backgroundColor = allColors[0]; break;
            case "2": element.style.backgroundColor = allColors[1]; break;
            case "3": element.style.backgroundColor = allColors[2]; break;
            case "4": element.style.backgroundColor = allColors[3]; break;
            case "5": element.style.backgroundColor = allColors[4]; break;
        }
        
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