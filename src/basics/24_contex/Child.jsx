import React, { Component } from "react";
import { Consumer } from "./Context";

class Child extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {name => {
            return <h1>My name is aly ahmed {name}</h1>;
          }}
        </Consumer>
      </div>
    );
  }
}

export default Child;
