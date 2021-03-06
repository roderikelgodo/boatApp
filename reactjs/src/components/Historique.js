import React, { Component } from "react";
import Circle from "./Circle";

class Historique extends Component {

  /**
   * coorsY = {}
   * 'Y-coordetates' to draw the <svg></svg>
   * the object 'key' makes reference to the knot boat speed value
   * the object 'value' set dot position in the history graph to indicate the knot speed
   *
   * For this prototype app all knot-speed-value are: 5, 10, 15, 20, 25 and 30.
   */
  coorsY = { 0: 350, 5: 300, 10: 250, 15: 200, 20: 150, 25: 100, 30: 50 };   // Noeuds
  /**
   * coorsX = []
   * 'X-coordetates' to draw the <svg></svg>
   * the array 'value' set dot position in the history graph to indicate the seconds
   */
  coorsX = [450, 400, 350, 300, 250, 200, 150, 100];// Seconds
  /**
   * points = [[dotPositionX,dotPositionY], ...]
   * array variable that keeps the last 8 histories of boat speed (dot position in graph and)
   * Each items is formed by an array having x and y dot coordates to draw the svg
   */
  points = [];

  /**
   * Every time new data is fetched it is pushed into 'this.points' to keep the speed history
   */
  loadData(boat) {
    /**
     * we get the knot speed of the current boat data to get the 'this.coorsY' value
     * that have the dot position to set in the history graph
     */
    let noeud = parseInt(boat.vitesseNoeud);
    // the length of 'this.point' reflects the knot speed history that we keeps until 8 items
    const length = this.points.length;

    // if the boat instance is not empty
    if (noeud) {
      // if is not the first boat data fectch
      if (length) {
        // for each item we subtract 50 in item[1] which is the dot position for seconds history
        this.points.forEach(function (value) {
          value[1] = value[1] - 50; // coordX Second
        });
      }
      // add the new boat speed value to the history array
      this.points.push([this.coorsY[noeud], this.coorsX[0]]);
      // if the history array have more than 8 items
      if (length >= 8) {
        // we remove the first (oldest)
        this.points.shift();
      }
    }
  }
  /**
   * if called twice the Historique component will be rendered only if the data (props) has changed
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.boat !== nextProps.boat) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    window.addEventListener("resize", this.setViewBox());
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setViewBox());
  }

  /**
   * Sets viewBox attribute for mobile
   */
  setViewBox() {
    const svg = document.getElementsByTagName('svg');

    if (window.innerWidth <= 575.98) {
      svg[0].setAttribute('viewBox', '0 0 460 450');
    } else {
      svg[0].removeAttribute('viewBox');
    }
  }

  render() {
    const { boat } = this.props;

    this.loadData(boat)

    this.circles = this.points.map((point, i) =>
      <Circle key={Math.random()} cx={point[1]} cy={point[0]}
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
