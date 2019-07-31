var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ventSchema = new Schema({

    angle: { type: String, required: [true, "Angle is required"] },
    vitesse: { type: String, required: [true, "Vitesse is required"] }

});

module.exports = mongoose.model('Vent', ventSchema);