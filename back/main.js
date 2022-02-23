const express = require('express');
const app     = express();
const http    = require('http').createServer(app);
const io      = require('socket.io')(http);
const path    = require('path');
const sql     = require('my-sql');


const withDir = rest => __dirname + rest;
const pure = rest => path.resolve(withDir(rest));

app.use(express.static(withDir('/../front/')));

app.get('/', (req, res) => {
    res.sendFile(pure('/../front/index.html'));
});

app.get('/submit', (req, res) => {
    res.sendFile(pure('/../front/jeu.html'));
    console.log(req.query.username);
    console.log(req.query.password);
});

io.on('connection', socket => {
    console.log('An user connected');
});

http.listen(4200, () => {
    console.log('Serveur Run on Port 4200');
});


