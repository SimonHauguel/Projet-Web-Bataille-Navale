const express = require('express');
const app     = express();
const http    = require('http').createServer(app);
const io      = require('socket.io')(http);
const path    = require('path');
const sqlite  = require('sqlite3');

const BackGame = require('./stateGame.js').BackGame;
const Events = require('./events.js')

const withDir = rest => __dirname + rest;
const pure = rest => path.resolve(withDir(rest));
let game = undefined;
let users = []

app.use(express.static(withDir('/../front/')));

app.get('/', (req, res) => {
    res.sendFile(pure('/../front/index.html'));
});

app.get('/submit', (req, res) => {
    res.sendFile(pure('/../front/jeu.html'));
});

io.on('connection', socket => {
    users.push(socket.id)
    if (users.length == 2) {
        socket.emit('gamefound')
    }
}); 

http.listen(4200, () => {
    console.log('Serveur Run on Port 4200');
});
