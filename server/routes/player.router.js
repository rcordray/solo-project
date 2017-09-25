var router = require('express').Router();

var request = require('request');
router.get('/', function(req, res) {
    var api_key = 'unwp9ehzs7tsu892xt3bex4t'
    var baseUrl = 'http://api.sportradar.us/mlb-t6/seasontd/2016/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?'

    request(baseUrl += 'api_key=' + api_key + '&limit=25', function(error, response, body) {
        if (error) {
            console.log('error: ', error);
            res.sendStatus(500);
        } else {
            res.send(response.data);
            console.log('response', response.data);

        }
    });
})

request.get('http://api.sportradar.us/mlb-t6/seasontd/2016/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?')


module.exports = router;