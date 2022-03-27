const board = document.getElementById('board');
const button = document.getElementById('button');
const SIZE = 10;

let size = 5;

let makeNewBoard = () => {
    const makeSub = () => new Array(10).fill(0);
    return new Array(10).fill(undefined).map(makeSub);
}
let boardData = makeNewBoard();
let flattenBoard = () => {
    let res = ""
    for (e of boardData) for (i of e) res += `${i}`
    return res
}

let table = "<table>"
for (let i = 0; i < SIZE; i++){
    let temp = "<tr>"
    for (j = 0; j < SIZE; j++) temp += `<td class=\"tile\" id=${i}${j}></td>`
    temp += "</tr>"
    table += temp
}
table += "</table>"
board.innerHTML = table

for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++){
        let element = document.getElementById(`${i}${j}`);
        element.onclick = () => {
            if (size === 0) return;
            let reali = Math.min(i, 10-size);
            for (let k = reali; k < reali+size; k++){
                boardData[k][j] = size;
                document.getElementById(`${k}${j}`).style.backgroundColor = boardData[k][j] ? "red" : "green"
            }
            size--;
        }
    }
}

button.onclick = () => {
    if (size !== 0) return;
    temp = board.innerHTML;
    document.location.href = "./play.html?" + flattenBoard();
}
