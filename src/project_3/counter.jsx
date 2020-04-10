import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.incCounter = this.incCounter.bind(this);
        this.state = {
            counter: 7
        }
    }
    // 
    incCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {

        return (
            <>
                <div className="container jumbotron mt-4">
                    <h2>Counter</h2>
                    <h2>{this.state.counter}</h2>
                    <button className="counter-button" onClick={this.incCounter}>Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}