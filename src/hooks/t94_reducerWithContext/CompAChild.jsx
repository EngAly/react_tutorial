import React, { useContext } from 'react';
import { Consumer } from './Context';

const CompAChild = () => {
    // call consumer from context to get stored object
    //  stored object is state and dispatcher
    const { countState, countDispatch } = useContext(Consumer)
    return (
        <div>
            <h1>component A Child</h1>
            <h3>count now = {countState}</h3>
            <button onClick={() => countDispatch('inc')}>Inc</button>
            <button onClick={() => countDispatch('dec')}>Dec</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    );
};

export default CompAChild;