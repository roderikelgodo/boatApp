// Requires

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/config.json')

// Import Routes

var appRoutes = require('./routes/app');
var ventRoutes = require('./routes/vent');
var bateauRoutes = require('./routes/bateau');
var angularjsRoutes = require('./routes/angularjs');
var reactjsRoutes = require('./routes/reactjs');



// Variables initialization

var app = express();

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

// BD conexion

if (config.database) {
    mongoose.connection.openUri('mongodb://localhost:27017/bateau-dev', (err, res) => {

        if (err) throw err;
        console.log('Database: \x1b[32m%s\x1b[0m', 'online');

    });
}

// Routes

app.use('/vent', ventRoutes);
app.use('/bateau', bateauRoutes);
app.use('/angularjs', angularjsRoutes);
app.use('/reactjs', reactjsRoutes);
app.use('/', appRoutes);

// Listen petition

app.listen(3000, () => {

    console.log('Express server running in port 3000: \x1b[32m%s\x1b[0m', 'online');

});