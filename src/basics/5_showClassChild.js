import React, { Component } from 'react';
 
class ShowClassChild extends Component {
  render() {
    return <h1>my  name is {this.props.name} {this.props.children}</h1>;
  }
}
export default ShowClassChild

