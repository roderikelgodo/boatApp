export class Boat {

    /**
     * Creates an instance of Boat.
     * @param [position1]     GPS coordenate
     * @param [position2]     GPS coordenate
     * @param [cap]           Route (COG)
     * @param [compas]        Compass directoin
     * @param [vitesseNoeud]  Speed in knot
     * @param [vitesseKm]     Speed in km/h
     */
    constructor(
        public position1?: string,
        public position2?: string,
        public cap?: string,
        public compas?: string,
        public vitesseNoeud?: string,
        public vitesseKm?: string
    ) {

    }
}
