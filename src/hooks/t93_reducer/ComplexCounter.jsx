import React, { useReducer } from 'react';

// we decalare state as object
const initialState = {
    firstCounter: 0
};

/**
 * Reducer  ====  State managment
 *  it take two parameter and return new state
 *  it executed by dispatcher
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { firstCounter: state.firstCounter + action.incBy };
        case 'dec':
            return { firstCounter: state.firstCounter - 1 };
        case 'reset':
            return initialState;
        default:
            return state
    }

}

const ComplexCounter = () => {
    /**
     * counter   =>  is the current state
     * dispatch  => that execute the reducer method 
     */
    const [counter, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>count now = {counter.firstCounter}</h1>
            {/* 
            to use object in dispather you must use type to make action know the action type
            another thing you can send multi properties in dispath content
            */}
            <button onClick={() => dispatch({ type: 'inc', incBy: 3 })}>Inc</button>
            <button onClick={() => dispatch({ type: 'dec' })}>Dec</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};


export default ComplexCounter;