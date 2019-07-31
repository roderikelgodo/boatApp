import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class App extends Component {
  state = {
    vent: [],
    bateau: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    // this.getData();    // Uncomment when using Express server and Mongodb
    this.getDataJson();   // Comment when using Express server and Mongodb

    // setInterval(() => this.getData(), 10000);    // Uncomment when using Express server and Mongodb
    setInterval(() => this.getDataJson(), 10000);   // Comment when using Express server and Mongodb
  }

  componentWillUnmount() {
    clearInterval(this.getData());
  }

  getData() {
    let url = "http://localhost:3000/vent";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          this.setState({
            vent: result.vent
          });
        }
      });

    url = "http://localhost:3000/bateau";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          this.setState({
            bateau: result.bateau
          });
        }
      });
  }

  getDataJson() {
    const bateaux = require('./bateau.json')
    const vents = require('./vent.json')

    const count = vents.length;
    const random = Math.floor(Math.random() * count);
    this.setState({
      bateau: bateaux[random],
      vent: vents[random],
    });


  }

  render() {
    const { vent } = this.state;
    const { bateau } = this.state;

    return (
      <div>
        <Header />
        <Body vent={vent} bateau={bateau} />
      </div>
    );
  }
}

export default App;
