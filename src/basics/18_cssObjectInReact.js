import React, { Component } from 'react';

class CSSObject extends Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "cyan",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={mystyle}>Hello Style!</h1>
             </div>
        );
    }
}

export default CSSObject