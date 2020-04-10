import React, { Component } from 'react';
import UpdatedComponent from './clock'

import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Higher Order Components
 * higher-order component (HOC) is an advanced technique in React for reusing component logic.
 * 
 */
class HourClock extends Component {
    // So because JSX is a syntax extension for javascript, it means
    //  that JSX is not valid JavaScript.Web browsers can't read it!.
    //   That means that before the file reaches a web browser, a JSX compiler
    //  will translate any JSX into regular JavaScript.Sep 7, 2017

    render() {
        // this id ES6 features
        const { count, increase } = this.props;
        console.log(this.props.name)
        return (
            <div className="container mt-3">
                <h1>test hoc 1</h1>
                {/* this is name that is passed from App.js but not shown here */}
                <h3>i name <span className="text-success">{this.props.name}</span> passed from APP.js but not work here direct </h3>
                <button onClick={increase}>IncreaseHour  {count}</button>
                <hr />
            </div>
        );
    }
}

/**
 * higher-order component
 * pass HourClock(original component) to HOC to return back NewComponent
 * 
 * very important note :-
 *  1) => when you call HourClock Component in any place and pass property to this Component
 *      (HourClock) will first go to (UpdatedComponent) and will get new state 
 *      if you note in (Clock) HOC it  Update (HourClock) with new property so that it ignore 
 *      any other send property
 * 
 *  2) => when we call HourClock Component it direct call UpdatedComponent(HourClock, 1);
 *        so that it not convert its content until get newComponent from UpdatedComponent (HOC)
 */
export default UpdatedComponent(HourClock, 1);