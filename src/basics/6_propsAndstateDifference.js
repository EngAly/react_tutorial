import React, { Component } from 'react';


class PropsAndState extends Component {
  constructor() {
    super();
    this.state = { name: "aly ahmed" }
  }
  render() {
    return (<div>
      <p>i don't change variable after reassign value name: <b>{this.props.name}</b></p>
      <p>i change variable after reassign value       name:<b> {this.state.name}</b></p>
    </div>);
  }
}
export default PropsAndState

