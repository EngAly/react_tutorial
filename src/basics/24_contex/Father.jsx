import React, { Component } from "react";
import Child from "./Child";
import { Consumer, Provider } from "./Context";

class Father extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {name => {
            return <h2> My father name is => Ahmed {name} </h2>;
            
          }}
        </Consumer>
        <Child />
      </div>
    );
  }
}

export default Father;
