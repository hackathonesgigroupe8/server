
/*

----  API Server Groupe 8  ----


*/

const express = require('express');
const cors = require('cors');
const path    = require("path");
const circularJSON = require('circular-json');

const api = express();

const config = require('./config');
const ozae = require('./ozae');
const country = require('./country/index');


const bodyParser = require('body-parser');
api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

api.options('*', cors());
api.use(function(req, res, next) {
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
    res.sendFile(path.join(__dirname+'/index.html'));
});

api.post('/country/', function (req, res) {
    country.get(function(result){
            res.send(circularJSON.stringify(result));
        });

});

api.post('/sets/', function (req, res) {
    ozae.getArticles(function(result){
        res.send(circularJSON.stringify(result));
    });
});


api.listen(config.port, function () {
    console.log('--- ✅  Smapis API started on port '+ config.port);

});

