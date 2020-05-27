import React, { PureComponent } from 'react'
import { Component } from 'react'

export default class ClassTimer extends Component {
    interval
    constructor() {
        super()
        // super constructor in derived class before accessing 'this'
        //  or returning from derived constructor
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        const callBackFunc = () => {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }
        this.interval = setInterval(callBackFunc, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("componet unmount");
        
    }

    render() {
        return (
            <div>
                <h1>Timer is =<span>{this.state.timer}</span></h1>
                <button onClick={() => clearInterval(this.interval)}>stop timer</button>
            </div>
        )
    }
}
