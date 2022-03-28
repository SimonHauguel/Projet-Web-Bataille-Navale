const socket = io();

socket.on('foundgame', () => {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++){
            document.getElementById(`other${i}${j}`).style.backgroundColor = '';
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

socket.on("destroy", (coordonate, n) => {
    for (loc of coordonate) {
        document.getElementById(`other${loc.x}${loc.y}`).style.backgroundColor = allColors[n-1];
    }
})

socket.on("success", coordonate => {
    document.getElementById(`other${coordonate.x}${coordonate.y}`).innerHTML = '<i class="fire fa fa-fire"></i>'
})

socket.on('touched', coordonate => {
    document.getElementById(`own${coordonate.x}${coordonate.y}`).innerHTML = '<i class="fire fa fa-fire"></i>'
})

socket.on("failure", coordonate => {
    document.getElementById(`other${coordonate.x}${coordonate.y}`).innerHTML = '<i class="circle fa fa-minus-circle"></i>'
})

socket.on("missed", coordonate => {
    document.getElementById(`own${coordonate.x}${coordonate.y}`).innerHTML = '<i class="circle fa fa-minus-circle"></i>'
})

socket.on("win", id => {
    if (socket.id === id)
        document.location.href = './endgame.html?1'
    else document.location.href = './endgame.html?0'
})
