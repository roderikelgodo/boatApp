var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/../client/angularjs')));


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/../client/angularjs/index.html'));

});

module.exports = app;