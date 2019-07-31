import React, { Component } from "react";
import Gauge from "./components/Gauge";
import Compas from "./components/Compas";
import Historique from "./components/Historique";

class Body extends Component {
  render() {
    const { vent, bateau } = this.props;

    return (
      <div className="container">
        <div className="row all-tableros">
          <div className="col-xs-12 col-sm-8 title">
            <span>Données de navigation</span>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Vitesse</h2>
            <p> {bateau.vitesseNoeud} N</p>
            <Gauge bateau={bateau} />
          </div>
          <div className="w-100" />
          <div className="col-xs-6 col-md-4 tablero">
            <h2>Route (COG)</h2>
            <p> {bateau.cap} °</p>
          </div>
          <div className="col-xs-12 col-md-4 tablero">
            <h2>Compas</h2>
            <p> {bateau.compas}N</p>
          </div>
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Position</h2>
            <p> {bateau.position1}</p>
            <p> {bateau.position2}</p>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Direction (CAP) et Angle du vent</h2>
            <Compas bateau={bateau} vent={vent} />
            <p id="vitesseVent">
              Vitesse actuelle du vent: {vent.vitesse} km/h
            </p>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Historique</h2>
            <Historique bateau={bateau} />
          </div>
          <div className="w-100" />
        </div>
      </div>
    );
  }
}
export default Body;
