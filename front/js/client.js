const socket = io();

let game = undefined;

socket.on('wannaplay', socketid => {
    console.log("prout")
    if (users.length == 2) {
        fir = [0]
        sec = users[1]
        game = new BackGame(sec, fir, io)
    }
})

socket.on('normal', socket => console.log("test") )