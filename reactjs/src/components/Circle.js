import React, { Component } from "react";

class Circle extends Component {


  render() {
    const { cx, cy, cxx, cyy } = this.props

    return [
      <circle key={Date.now().toString()} cx={cx} cy={cy} data-value="" r="4"></circle>,
      <line key={(Date.now() + cx).toString()} x1={cx} y1={cy} x2={cxx} y2={cyy} stroke="black" />
    ]
  }
}
export default Circle;
