import React, { Component } from 'react';
import '../styling/stylingWithSass.scss'

class Sass extends Component {
    render() {
        return (
            <div>
                <h1>this style with .scss file</h1>
                <h2 className="fbg">to use sass in react in project terminal (npm install --save node-sass)</h2>
             </div>
        );
    }
}

export default Sass