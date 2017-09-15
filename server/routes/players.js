var router = require('express').Router();
var pool = require('../pool/pool.js');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM players', function(errorMakingQuery, result) {
                if (errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});


router.post('/', function(req, res) {
    console.log('post was hit!', req.body);
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to DataBase', errorConnectingToDatabase);
            res.sendStatus(500)
        } else {
            client.query('INSERT INTO players (firstname, lastname, position, notes, team) VALUES ($1, $2, $3, $4, $5);', [req.body.firstname, req.body.lastname, req.body.position, req.body.notes, req.body.team], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });

        }
    });
});


module.exports = router;