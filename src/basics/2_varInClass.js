import React, { Component } from 'react';

class HelloName extends Component {
  render() {
    return <h1>my  name is {this.props.username}</h1>;
  }
}
export default HelloName

