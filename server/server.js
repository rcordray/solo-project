var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');

var players = require('./routes/players.js');
// var addnew = require('./routes/addnew.js');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/players', players);
// app.use('/addnew', addnew);

app.listen(port, function() {
    console.log('server on port: ', port);
});