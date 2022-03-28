const socket = io();

socket.on('foundgame', () => {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++){
            document.getElementById(`other${i}${j}`).style.backgroundColor = 'white';
        }
    }
    socket.emit("start", toDataBoard())
})

socket.on("yourturn", () => { 
    turn = 1; 
    document.getElementById('turn').innerText = "Mon Tour"
})

socket.on("notyourturn", () => { 
    turn = 0;
    document.getElementById('turn').innerText = "En attente de votre adversaire"
})

socket.on("success", coordonate => {
    document.getElementById(`other${coordonate.x}${coordonate.y}`).style.backgroundColor = "purple";
})

socket.on("failure", coordonate => {
    document.getElementById(`other${coordonate.x}${coordonate.y}`).style.backgroundColor = "yellow";
})

socket.on("win", id => {
    if (socket.id === id)
        document.location.href = './endgame.html?1'
    else document.location.href = './endgame.html?0'
})