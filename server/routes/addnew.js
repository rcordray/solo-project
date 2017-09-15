var router = require('express').Router();
var pool = require('../pool/pool.js');

router.post('/', function(req, res) {
    console.log('post was hit!', req);
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to DataBase', errorConnectingToDatabase);
            res.sendStatus(500)
        } else {
            client.query('INSERT INTO players (firstname, lastname, notes, team) VALUES ($1, $2, $3, $4);', [req.body.firstname, req.body.lastname, req.body.notes, req.body.team], function(errorMakingQuery, result) {
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