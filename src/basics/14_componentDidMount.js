import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class AfterRender extends Component {
    constructor() {
        super();
        this.state = { material: "Math" }
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({ material: "Computer Science" })
        }, 5000);

    }
    render() {
        return <p className="jumbotron text-center lead">my favorite material: {this.state.material}</p>;
    }
}
export default AfterRender

