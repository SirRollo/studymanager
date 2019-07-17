import React, { Component, Fragment } from "react";
import Grid from "./components/Grid.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Grid />
        <button onClick={this.onClick}>New Module</button>
      </Fragment>
    );
  }

  onClick = event => {
    event.preventDefault();
    console.log(this.Fragment);
  };
}
