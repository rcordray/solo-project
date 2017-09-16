var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');

var players = require('./routes/players.js');
// var addnew = require('./routes/addnew.js');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/players', players);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// app.use('/addnew', addnew);

app.listen(port, function() {
    console.log('server on port: ', port);
});