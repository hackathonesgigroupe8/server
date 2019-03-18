
/*

----  API Server Groupe 8  ----


*/

const express = require('express');
const cors = require('cors');
const api = express();
const port = 8060;
var path    = require("path");

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


api.post('/', function (req, res) {
    res.send('Alive in post');
});

api.listen(port, function () {
    console.log('--- ✅  Server groupe 8 API started on port '+ port);
});

