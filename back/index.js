const express = require('express');
const app     = express();
const http    = require('http').createServer(app);
const io      = require('socket.io')(http);
const path    = require('path');

let   users   = []
let   data    = {};
let   turn    = 0;


const withDir = rest => __dirname + rest;
const pure = rest => path.resolve(withDir(rest));

app.use(express.static(withDir('/../front/')));

app.get('/', (_, res) => {
    res.sendFile(pure('/../front/index.html'));
});

io.on('connection', socket => {

    users.push(socket.id)
    if (users.length == 2) { 
        io.sockets.emit('foundgame')
        io.to(users[0]).emit("yourturn")
        io.to(users[1]).emit("notyourturn")
    }

    socket.on('normal', coordonate => {

        idboard = socket.id === users[0] ? users[1] : users[0];

        if (socket.id !== users[turn]) return;
        
        let value = data[idboard].board[coordonate.x][coordonate.y];
        if (value >= 1 && 5 >= value) {
            data[idboard].board[coordonate.x][coordonate.y] = 6;
            socket.emit("success", coordonate);
            data[idboard].remains.total--;
            data[idboard].remains[value]--;

            if (data[idboard].remains.total === 0) console.log("game finished !");
        }
        
        else if (value === 0) {
            socket.emit("failure", coordonate);
            data[idboard].board[coordonate.x][coordonate.y] = 7;
        }

        turn = turn ? 0 : 1;
        io.to(users[turn]).emit("yourturn")
        io.to(users[turn ? 0 : 1]).emit("notyourturn")

    })

    socket.on("bomb", location => {

        idboard = socket.id === users[0] ? users[1] : users[0];
        if (socket.id !== users[turn]) return;

        let x = location.x === 9 ? 8 : location.x === 0 ? 1 : location.x;
        let y = location.y === 9 ? 8 : location.y === 0 ? 1 : location.y;

        for (let i = x-1; i <= x+1; i++) {
            for (let j = y-1; j <= y+1; j++){
                let value = data[idboard].board[i][j];

                if (value >= 1 && 5 >= value) {
                    data[idboard].board[i][j] = 6;
                    socket.emit("success", {x : i, y : j});
                    data[idboard].remains.total--;
                    data[idboard].remains[value]--;
        
                    if (data[idboard].remains.total === 0) console.log("game finished !");
                }
                
                else if (value === 0) {
                    socket.emit("failure", {x : i, y : j});
                    data[idboard].board[i][j] = 7;
                }

            }
        }
        turn = turn ? 0 : 1;
        io.to(users[turn]).emit("yourturn")
        io.to(users[turn ? 0 : 1]).emit("notyourturn")
    })


    socket.on('start', board => {
        data[socket.id] = {
            board : board,
            remains : {
                5 : 5,
                4 : 4,
                3 : 3,
                2 : 2,
                1 : 1,
                total : 15
            }
        }
    })
});

http.listen(4200, () => {
    console.log('Serveur Run on Port 4200');
});
