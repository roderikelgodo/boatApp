import React, { Component } from "react";
import $ from "jquery";

class Compas extends Component {
  donnes(vent, bateau) {
    this.control = false;

    let spans = $(".grades").find("span");

    let angle = parseInt(bateau.compas);

    const anglesCoord = [
      "N  0°",
      "45°",
      "E 90°",
      "135°",
      "S 180°",
      "225°",
      "O 270°",
      "315°"
    ];
    const windTypes = [
      "Face",
      "Près",
      "Travers",
      "Large",
      "Arrière",
      "Large",
      "Travers",
      "Pres"
    ];
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];

    $(spans).each(function (i, span) {
      const grado = angle === 0 ? i * 45 : angle;

      $(span).attr("grado", grado);
      $(span).css({
        WebkitTransform: "rotate(" + grado + "deg)"
      });

      $(span).css("border", "2x dashed");
      $(span).text(anglesCoord[i]);
      $(span).css({
        WebkitTransform: "rotate(" + grado + "deg)"
      });
      if (grado === 360 || grado === 0) {
        $(span).css("color", "red");
      }

      angle += 45;
    });

    spans = $(".grades_vent").find("span");
    $(".vent").remove();
    let reached = false;
    let windType = "";
    $(spans).each(function (i, span) {
      if (vent.angle > angles[i] && vent.angle <= angles[i + 1]) {
        $(span).append('<div class="vent"></div>');
        $(span).css({
          WebkitTransform: "rotate(" + angles[i + 1] + "deg)"
        });
        reached = true;
        windType = windTypes[i + 1];
      } else if (typeof angles[i + 1] === "undefined" && !reached) {
        windType = windTypes[0];
      }
    });
    $(".info").remove();
    $(
      '<div class="info">Angle du vent: <span>' +
      vent.angle +
      '°</span>: <span id="texto">' +
      windType +
      "</span><div>"
    ).insertBefore("#vitesseVent");
  }
  render() {
    const { vent, bateau } = this.props;
    this.donnes(vent, bateau);

    return (
      <div className="compas">
        <h1 className="grades">
          <span className="1">1</span>
          <span className="2">2</span>
          <span className="3">3</span>
          <span className="4">4</span>
          <span className="5">5</span>
          <span className="6">6</span>
          <span className="7">7</span>
          <span className="8">8</span>
        </h1>
        <h1 className="grades_vent">
          <span className="1" />
          <span className="2" />
          <span className="3" />
          <span className="4" />
          <span className="5" />
          <span className="6" />
          <span className="7" />
          <span className="8" />
        </h1>
        <div id="pentagon" />
        <div id="flecha" className="arrow-up icon">
          <span className="direction">Direction</span>
        </div>
        <p className="transparent-circle" />
      </div>
    );
  }
}
export default Compas;
