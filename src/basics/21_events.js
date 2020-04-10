import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Events extends Component {
    message(name) {
        alert("my name is" + name);
    }
    anotherWay = (name) => {
        alert("another way to show my name is:" + name);
    }
    render() {
        return (
            <div className="jumbotron text-capitalize text-center">
                <button className="text-capitalize" onClick={this.message("ali ahmed")}>message</button><br />
                <button className="text-capitalize" onClick={this.message("Aly Ahmed")}>another way</button>
            </div>
        )
    }
}
export default Events

