import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class App extends Component {
  state = {
    wind: [],
    boat: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    this.getData();

    setInterval(() => this.getData(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.getData());
  }
  /**
   * Get a mock boat/wind data model instance from Firebase backend
   */
  getData() {
    var url = "https://us-central1-bateau-b594b.cloudfunctions.net/wind";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          this.setState({
            wind: result.wind
          });
        }
      });

    url = "https://us-central1-bateau-b594b.cloudfunctions.net/boat";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          this.setState({
            boat: result.boat
          });
        }
      });
  }

  render() {
    const { wind } = this.state;
    const { boat } = this.state;

    return (
      <div>
        <Header />
        <Body wind={wind} boat={boat} />
      </div>
    );
  }
}

export default App;
