import React, { Component } from 'react';
import { setTimeout } from 'timers';
import "bootstrap/dist/css/bootstrap.min.css"

class DidUpdateMethod extends Component {
    constructor() {
        super();
        this.state = { favAnimal: "dog" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favAnimal: "cat" })
        }, 3000)
    }
    componentDidUpdate() {
        document.getElementById("newAnimal").innerHTML =
            "the new favorite animal is: " + this.state.favAnimal
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center text-capitalize">
                    <p>my favorite animal is :{this.state.favAnimal}</p>
                    <div  className="text-danger"  id="newAnimal"></div>
                </div>
            </div>

        );

    }
}
export default DidUpdateMethod

