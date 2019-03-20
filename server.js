/*

----  API Server Groupe 8  ----


*/

const express = require('express');
const cors = require('cors');
const path = require("path");
const circularJSON = require('circular-json');

const api = express();

const config = require('./config');
const core = require('./core/index');
const country = require('./country/index');

const axios = require('axios');
const bodyParser = require('body-parser');

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

api.options('*', cors());
api.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

api.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

api.post('/country/', function (req, res) {
    country.get(function (result) {
        res.send(circularJSON.stringify(result));
    });
});

api.post('/datasets/', function (req, res) {
    country.get(function (result) {
        res.send(circularJSON.stringify(result));
    });
});

api.post('/stats/', function (req, res) {
    // Get country code
    if (req.body.code !== undefined && req.body.dataset !== undefined) {
        core.getDataset(req.body.dataset, function (resp) {
            core.initRequest(req.body.code, resp, function (result) {
                res.send(result);
            });
        })

    }
    else {
        res.send('Invalid Country code or dataset id.');
    }
});

api.post('/tests/', function (req, response) {
});


api.listen(config.port, function () {
    console.log('\n  🔥 | STARTED | EAS API started on port ' + config.port + '\n \n');
});

