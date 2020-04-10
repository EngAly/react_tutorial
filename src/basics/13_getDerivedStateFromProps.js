import React, { Component } from 'react';

class BeforeRender extends Component {
    constructor(props) {
        super(props);
        this.state = { favorMaterial: "Math" }
    }
    static getDerivedStateFromProps(props, state) {
        // this method will called berfore redering so that you can update any varibale in it
        return { favorMaterial: props.favMaterial };
    }
    render() {
        return <h1>my favorite material: {this.state.favorMaterial}</h1>;
    }
}
export default BeforeRender

