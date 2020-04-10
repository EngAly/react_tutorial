import React, { Component } from "react";
import Father from "./Father";
import { Consumer } from "./Context";

class GrandFather extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {name => {
            return <h2>GrandFather name is =>  {name}</h2>;
          }}
        </Consumer>
        <Father />
      </div>
    );
  }
}

export default GrandFather;
