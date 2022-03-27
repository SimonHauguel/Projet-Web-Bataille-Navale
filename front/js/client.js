const socket = io();
const tohide = document.getElementById('container')
const gameState = require('./stateGame.js')

let game = undefined;

socket.on('wannaplay', socketid => {
    if (users.length == 2) {
        fir = [0]
        sec = users[1]
        game = new BackGame(sec, fir, io)
    }
})

socket.on('gamefound', () => tohide.hidden = true)