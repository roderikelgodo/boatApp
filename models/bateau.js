var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bateauSchema = new Schema({

    position1: { type: String, required: [true, "Position1 is required"] },
    position2: { type: String, required: [true, "Position2 is required"] },
    cap: { type: String, required: [true, "Cap is required"] },
    compas: { type: String, required: [true, "Compas is required"] },
    vitesseNoeud: { type: String, required: [true, "Vitesse is required"] },
    vitesseKm: { type: String, required: [true, "Vitesse is required"] }

});

module.exports = mongoose.model('Bateau', bateauSchema);