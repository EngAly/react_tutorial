import React, { Component } from 'react';
import UpdatedComponent from './clock'

import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Higher Order Components
 */
class MinuteClock extends Component {
    render() {
        // this id ES6 features
        const { count, increase } = this.props;
        return (
            <div className="container mt-3">
                <h1>test hoc 2</h1>
                <button onClick={increase}>IncreaseMinute  {count}</button>
            </div>
        );
    }
}

// all comments in HourClock applayed about this component
// higher-order component
// pass MinuteClock(original component) to HOC to return back NewComponent
export default UpdatedComponent(MinuteClock,25);