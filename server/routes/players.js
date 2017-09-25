var router = require('express').Router();
var pool = require('../pool/pool.js');
var apiResponse = require('../modules/apiresponse.js');


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
                    // process(response.response);
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

router.put('/', function(req, res) {
    console.log('put hit', req.body);

    pool.connect(function(err, db, done) {
        if (err) {
            console.log('remove error: ', err);
            res.sendStatus(500);
        } else {
            db.query('UPDATE players SET notes=$1 WHERE id=$2', [req.body.notes, req.body.id], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('error with put', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            })
        }
    })
});


router.delete('/:id', function(req, res) {
    console.log('delete hit', req.params.id);
    pool.connect(function(err, db, done) {
        if (err) {
            console.log('delete error: ', err);
            res.sendStatus(500);
        } else {
            db.query('DELETE FROM players WHERE id=$1', [req.params.id], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('error with put', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            })
        }
    })
});

module.exports = router;