import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class ReactLifeCylce extends Component {
    constructor() {
        super();
        this.state = { material: "Math" };
    }
    shouldComponentUpdate() {
        // true    => to permit update
        // false   => to prevent update
        return true;
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ material: "Computer Science" })
        }, 3000);
    }
    getSnapshotBeforeUpdate(props, state) {
        document.getElementById("div1").innerHTML =
            "favorite material before update: " + state.material;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "favorite materail after update: " + this.state.material;
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>test react life cylce</h1>
                <div id="div1" />
                <div id="div2" />
            </div>
        )
    }
}
export default ReactLifeCylce

