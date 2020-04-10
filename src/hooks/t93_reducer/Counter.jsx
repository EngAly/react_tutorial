import React, { useReducer } from 'react';

const initialState = 0;

/**
 * Reducer  ====  State managment
 *  it take two parameter and return new state
 *  it executed by dispatcher
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }

}
const Counter = () => {

    /**
     * counter   =>  is the current state
     * dispatch  => that execute the reducer method 
     */
    const [counter, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>count now = {counter}</h1>
            <button onClick={() => dispatch('inc')}>Inc</button>
            <button onClick={() => dispatch('dec')}>Dec</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
};

export default Counter;