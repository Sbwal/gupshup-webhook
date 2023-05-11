var express = require('express');
var logger = require('morgan');
var debug = require('debug')('webhook:app');

var v1Router = require('./routes/v1');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/healthcheck', (req, res) => {
    res.send('Working')
})

app.use('/v1', v1Router);

module.exports = app;
