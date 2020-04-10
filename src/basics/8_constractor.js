import React, { Component } from 'react';

class Constractor extends Component {
    constructor() {
        super();
        this.state = { material: "Math" };
    }
    render() {
        return (
            <div>
                <p>using state => my favorite material is:<b> {this.state.material}</b></p>
             </div>
        );
    }
}
export default Constractor

