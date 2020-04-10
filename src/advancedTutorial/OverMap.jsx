import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class OverMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            name: "aly ahmed"
        }
    }
    render() {
        // this id ES6 features
        const { name,numbers } = this.state;
        
        return (
            <div className="container mt-3">
                <h1>{name}</h1>
                {numbers.map(number => (
                    <li>{number}</li>
                ))}
            </div>
        );
    }
}
export default OverMap;