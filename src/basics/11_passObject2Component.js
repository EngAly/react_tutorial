import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Pets extends Component {
    render() {
        return (
            <div className="container-fluid jumbotron bg-primary text-white">
                <pre>
                    <p>animal number
                <b className="bg-success">{this.props.pets.id}</b>
                        and its name
                <b className="bg-success"> {this.props.pets.name}</b>
                    </p>
                </pre>
            </div>
        );
    }
}


class Animals extends Component {
    render() {
        const cat = { id: 1, name: "cat" };
        return (<div><Pets pets={cat} /></div>);
    }
}


export default Animals

