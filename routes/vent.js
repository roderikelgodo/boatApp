var express = require('express');
var config = require('../config/config.json')
var app = express();

var Vent = require('../models/vent');


app.get('/', (req, res) => {

    if (config.database) {

        Vent.find().exec(function (err, results) {

            if (err) {
                return res.status(500).json({
                    ok: true,
                    message: 'Database error finding vent!',
                    errors: err
                });
            }
            var count = results.length;
            var random = Math.floor(Math.random() * count);

            Vent.findOne({}).skip(random).exec(function (err, vent) {

                res.status(200).json({
                    ok: true,
                    vent: vent
                });

            });
        });
    } else {
        var vents = require('../database/vent.json');
        var count = vents.length;
        var random = Math.floor(Math.random() * count);

        return res.status(200).json({
            ok: true,
            vent: vents[random]
        })
    }

});

module.exports = app;