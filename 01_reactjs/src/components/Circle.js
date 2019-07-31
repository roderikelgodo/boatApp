import React, { Component } from "react";

class Circle extends Component {


  render() {
    const { cx, cy, cxx, cyy } = this.props

    return [
      <circle key={Date.now()} cx={cx} cy={cy} data-value="" r="4"></circle>,
      <line x1={cx} y1={cy} x2={cxx} y2={cyy} stroke="black" />
    ]
  }
}
export default Circle;
