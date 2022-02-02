const app = require('express')();
const http = require('http').createServer(app);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../front/index.html')
});

http.listen(4200, () => {
    console.log('Serveur Run')
})