import React, { Component } from "react";

class Gauge extends Component {
  render() {
    const { bateau } = this.props;
    const pStyle = {
      transform: "rotate(" + bateau.vitesseKm + "deg)"
    };

    return (
      <div className="contenedor">
        <div className="gauge-a" />
        <div className="gauge-b" />

        <div className="gauge-c" style={pStyle} />
        <div className="gauge-data">
          <h1 id="percent">{bateau.vitesseKm} km/h</h1>
        </div>
      </div>
    );
  }
}
export default Gauge;
