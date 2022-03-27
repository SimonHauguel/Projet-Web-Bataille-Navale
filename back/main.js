const express = require('express');
const app     = express();
const http    = require('http').createServer(app);
const io      = require('socket.io')(http);
const path    = require('path');
const sqlite  = require('sqlite3');


const withDir = rest => __dirname + rest;
const pure = rest => path.resolve(withDir(rest));
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
        io.sockets.emit('gamefound')
    }
}); 

http.listen(4200, () => {
    console.log('Serveur Run on Port 4200');
});
