import React, { Component } from "react";

class Gauge extends Component {
  render() {
    const { boat } = this.props;
    const pStyle = {
      transform: "rotate(" + boat.vitesseKm + "deg)"
    };

    return (
      <div className="contenedor">
        <div className="gauge-a" />
        <div className="gauge-b" />

        <div className="gauge-c" style={pStyle} />
        <div className="gauge-data">
          <h1 id="percent">{boat.vitesseKm} km/h</h1>
        </div>
      </div>
    );
  }
}
export default Gauge;
