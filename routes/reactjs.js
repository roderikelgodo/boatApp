var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/../client/reactjs')));


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/../client/reactjs/index.html'));

});

module.exports = app;