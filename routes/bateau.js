var express = require('express');
var config = require('../config/config.json')
var app = express();

var Bateau = require('../models/bateau');


app.get('/', (req, res) => {

    if (config.database) {

        Bateau.find().exec(function (err, results) {

            if (err) {
                return res.status(500).json({
                    ok: true,
                    message: 'Database error finding vent!',
                    errors: err
                });
            }
            var count = results.length;
            var random = Math.floor(Math.random() * count);

            Bateau.findOne({}).skip(random).exec(function (err, bateau) {

                res.status(200).json({
                    ok: true,
                    bateau: bateau
                });
            });
        });
    } else {
        var bateaux = require('../database/bateau.json');
        var count = bateaux.length;
        var random = Math.floor(Math.random() * count);

        return res.status(200).json({
            ok: true,
            bateau: bateaux[random]
        })
    }

});

module.exports = app;