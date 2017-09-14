var pg = require('pg');

var config = {
    port: 5432,
    database: 'baseball',
    host: 'localhost',
    max: 10,
    idleTimeOutMillis: 30000
};

module.exports = pg.Pool(config);