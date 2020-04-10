import React, { useReducer } from 'react';
import CompA from './CompA'
import CompB from './CompB'
import { Provider } from './Context'


const initialState = 0;

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

/**
 * useReduser with useContext
 * useReduser => local state managment
 * share state between components- global state managment
 */
const Launcher = () => {
    /**
     * useReducer take reducer (action and state) and initState the state init.
     * return count new state and dispatch
     */
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Provider value={{ countState: count, countDispatch: dispatch }}>
                <CompA />
                {/* you can put nested child in component CompB */}
                <CompB />
            </Provider>
        </div>
    );
};
export default Launcher;