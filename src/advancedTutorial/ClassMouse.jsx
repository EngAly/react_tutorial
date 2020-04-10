import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    /**
     * get mouse position when mouse pointer move
     */
    getPosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
    }


    componentDidMount() {
        window.addEventListener('mousemove', this.getPosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.getPosition)
    }

    render() {
        const { x, y } = this.state;
        return (
            <div>
                <h1>x={x}, y={y}</h1>
            </div>
        );
    }
}

export default ClassMouse;