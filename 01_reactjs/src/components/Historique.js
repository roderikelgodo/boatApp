import React, { Component } from "react";
import Circle from "./Circle";

class Historique extends Component {



  points = [];
  time = true;

  cirlces = [];
  coorsY = { 0: 350, 5: 300, 10: 250, 15: 200, 20: 150, 25: 100, 30: 50 };   // Noeuds
  coorsX = [450, 400, 350, 300, 250, 200, 150, 100];// Seconds

  constructor(props) {

    super(props);
    this.state = { _id: '' };
  }

  loadData(bateau) {
    let noeud = parseInt(bateau.vitesseNoeud);

    const length = this.points.length;

    if (noeud) {
      if (length) {

        this.points.forEach(function (value) {
          value[1] = value[1] - 50; // coordX Second
        });
      }

      this.points.push([this.coorsY[noeud], this.coorsX[0]]);

      if (length >= 8) {
        this.points.shift();
      }
    }
  }

  render() {
    const { bateau } = this.props;

    if (!bateau || !this.time) {
      this.time = true
    } else {
      this.time = false
    }
    if (bateau) {
      this.loadData(bateau)
    }

    this.circles = this.points.map((point, i) =>
      <Circle key={(Date.now() + i).toString()} cx={point[1]} cy={point[0]}
        cxx={this.points[i + 1] ? this.points[i + 1][1] : point[1]}
        cyy={this.points[i + 1] ? this.points[i + 1][0] : point[0]}></Circle>
    )

    return (

      <div className="container">
        <svg version="1.2" className="graph"
          aria-labelledby="title" role="img">
          <title id="title">Historique de Noeuds à chaque 5 secondes</title>
          <g className="grid x-grid" id="xGrid">
            <line x1="90" x2="90" y1="5" y2="371"></line>
          </g>
          <g className="grid y-grid" id="yGrid">
            <line x1="90" x2="450" y1="370" y2="370"></line>
          </g>
          <g className="labels x-labels">
            <text x="100" y="400">35</text>
            <text x="150" y="400">30</text>
            <text x="200" y="400">25</text>
            <text x="250" y="400">20</text>
            <text x="300" y="400">15</text>
            <text x="350" y="400">10</text>
            <text x="400" y="400">5</text>
            <text x="450" y="400">0</text>
            <text x="300" y="440" className="label-title">Secondes</text>
          </g>
          <g className="labels y-labels">
            <text x="80" y="54">30</text>
            <text x="80" y="104">25</text>
            <text x="80" y="154">20</text>
            <text x="80" y="204">15</text>
            <text x="80" y="254">10</text>
            <text x="80" y="304">5</text>
            <text x="80" y="354">0</text>
            <text x="50" y="90" className="label-title">Noeuds</text>
          </g>
          <g className="data" data-setname="noeuds par secondes">
            {this.circles}
          </g>
        </svg>
      </div>
    );


  }
}
export default Historique;
