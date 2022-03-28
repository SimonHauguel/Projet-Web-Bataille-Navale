const board = document.getElementById('board');
const button = document.getElementById('button');
const buttonsens = document.getElementById('sens');
const SIZE = 10;

let size = 5;
let sens = 0;

const allColors = [ 'rgb(255, 175, 88)', 'rgb(255, 88, 123)', 'rgb(88, 255, 94)', "rgb(255, 88, 224)", "rgb(255, 247, 88)" ]

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

            let actualColor = allColors[size-1];

            if (!sens) {
                let reali = Math.min(i, 10-size);
                for (let k = reali; k < reali+size; k++)
                    if (document.getElementById(`${k}${j}`).style.backgroundColor !== actualColor) 
                        return;
                

                for (let k = reali; k < reali+size; k++){
                    boardData[k][j] = size;
                    document.getElementById(`${k}${j}`).style.backgroundColor 
                        = boardData[k][j] ? actualColor : ""
                }
                size--;
            }

            else {
                let realj = Math.min(j, 10-size);
                for (let k = realj; k < realj+size; k++)
                    if (document.getElementById(`${i}${k}`).style.backgroundColor !== actualColor) 
                        return;  
                

                for (let k = realj; k < realj+size; k++){
                    boardData[i][k] = size;
                    document.getElementById(`${i}${k}`).style.backgroundColor 
                        = boardData[i][k] ? actualColor : ""
                }
                size--;
            }
        }

        element.onmouseover = () => {
            if (size === 0) return;

            let actualColor = allColors[size-1];

            if (!sens) {
                let reali = Math.min(i, 10-size);
                for (let k = reali; k < reali+size; k++)
                    if (document.getElementById(`${k}${j}`).style.backgroundColor !== "") return;
                
                for (let k = reali; k < reali+size; k++){
                    document.getElementById(`${k}${j}`).style.backgroundColor 
                        = actualColor
                }
            }

            else {
                let realj = Math.min(j, 10-size);
                for (let k = realj; k < realj+size; k++)
                    if (document.getElementById(`${i}${k}`).style.backgroundColor !== "") return;  
                
                for (let k = realj; k < realj+size; k++){
                    document.getElementById(`${i}${k}`).style.backgroundColor 
                        = actualColor
                }
            }
        }

        element.onmouseout = () => {

            if (size === 0) return;

            let actualColor = allColors[size-1];

            if (!sens) {
                let reali = Math.min(i, 10-size);
                for (let k = reali; k < reali+size; k++)
                    if (document.getElementById(`${k}${j}`).style.backgroundColor !== actualColor) 
                        return;
                

                for (let k = reali; k < reali+size; k++) 
                    document.getElementById(`${k}${j}`).style.backgroundColor = ""
            }

            else {
                let realj = Math.min(j, 10-size);
                for (let k = realj; k < realj+size; k++)
                    if (document.getElementById(`${i}${k}`).style.backgroundColor !== actualColor) return;  
                
                for (let k = realj; k < realj+size; k++){
                    document.getElementById(`${i}${k}`).style.backgroundColor = ""
                }
            }
        }


    }
}

button.onclick = () => {
    if (size !== 0) return;
    temp = board.innerHTML;
    document.location.href = "./play.html?" + flattenBoard();
}


buttonsens.onclick = () => { 
    sens = sens === 1 ? 0 : 1;
    buttonsens.innerText = sens ? "HORIZONTAL" : "VERTICAL";
}
