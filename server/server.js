var express = require('express');
var app = express();
var port = 5000;

var players = require('./routes/players.js');

app.use(express.static('server/public'));

app.use('/players', players)

app.listen(port, function() {
    console.log('server on port: ', port);
});