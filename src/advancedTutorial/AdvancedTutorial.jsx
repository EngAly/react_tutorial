import React, { Component } from 'react';
import OverMap from './OverMap';
import ClassMouse from './ClassMouse';

class Hooks extends Component {
    render() {
        return (
            <div>
                {/* how to loop about map */}
                <OverMap />

                {/* this part is class component */}
                {/* <ClassMouse /> */}
            </div>
        );
    }
}

export default Hooks;


