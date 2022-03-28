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

socket.on('disconnectGame', () => {
    Toastify({
        text: "Votre adversaire s'est deconnecté :(",
        duration: -1,
        gravity: "top",
        position: "right",
        className: "popup",
        style: {
          background: "linear-gradient(to right, #D20434, #D2048B)",
        }
      }).showToast();

    Toastify({
        text: "Cliquer ici pour revenir au menu principal",
        duration: -1,
        gravity: "top",
        position: "right",
        className: "popup",
        style: {
          background: "linear-gradient(to right, #D20434, #D2048B)",
        },
        onClick : () => document.location.href = './index.html'
    }).showToast();

    end = true;
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

socket.on("message", (content, id) => {
    Toastify({
        text: content,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: "popup",
        style: {
          background: id === socket.id ? 
              "linear-gradient(to right, #01C3AD, #04D563)" 
            : "linear-gradient(to right, #D20434, #D2048B)",
        }
      }).showToast();
})


socket.on("win", id => {
    if (socket.id === id)
        document.location.href = './endgame.html?1'
    else document.location.href = './endgame.html?0'
})
