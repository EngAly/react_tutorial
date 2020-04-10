import React, { Component } from 'react';

class InitialState extends Component {
  //  note thate contstractor in ES6 is equal to getInitialState in ES5 
  constructor() {
    super();  
    this.state={name: "aly ahmed mohamed" };
  };
  render() {
    return <h1>my  name is : {this.state.name}</h1>;
  }
}


export default InitialState

