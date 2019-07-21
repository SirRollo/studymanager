import React, { Fragment } from "react";

export default class Grid {
  onClick = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Fragment>
        <div id="grid" />
        <button onClick={this.onClick}>New Module</button>
      </Fragment>
    );
  }
}
