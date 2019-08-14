import React, { Component } from "react";
import Gauge from "./components/Gauge";
import Compas from "./components/Compas";
import Historique from "./components/Historique";

class Body extends Component {
  render() {
    const { wind, boat } = this.props;

    return (
      <div className="container">
        <div className="row all-tableros">
          <div className="col-xs-12 col-sm-8 title">
            <span>Données de navigation</span>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Vitesse</h2>
            <p> {boat.vitesseNoeud} N</p>
            <Gauge boat={boat} />
          </div>
          <div className="w-100" />
          <div className="col-xs-6 col-md-4 tablero">
            <h2>Route (COG)</h2>
            <p> {boat.cap} °</p>
          </div>
          <div className="col-xs-12 col-md-4 tablero">
            <h2>Compas</h2>
            <p> {boat.compas}N</p>
          </div>
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Position</h2>
            <p> {boat.position1}</p>
            <p> {boat.position2}</p>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Direction (CAP) et Angle du wind</h2>
            <Compas boat={boat} wind={wind} />
            <p id="vitessewind">
              Vitesse actuelle du wind: {wind.vitesse} km/h
            </p>
          </div>
          <div className="w-100" />
          <div className="col-xs-12 col-md-8 tablero">
            <h2>Historique</h2>
            <Historique boat={boat} />
          </div>
          <div className="w-100" />
        </div>
      </div>
    );
  }
}
export default Body;
