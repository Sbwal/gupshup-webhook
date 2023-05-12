const express = require('express');
const logger = require('morgan');
const debug = require('debug')('webhook:app');

const v1Router = require('./routes/v1');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/healthcheck', (req, res) => {
    debug('/healthcheck')
    res.send('Working')
})

app.use('/v1', v1Router);

module.exports = app;
