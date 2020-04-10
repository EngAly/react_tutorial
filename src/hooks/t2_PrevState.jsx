import React, { useState } from 'react';

const PrevState = () => {
    const [counter, incCounter] = useState(0);

    /**
     * will increment by one
     */
    const incBy1 = () => {
        for (let index = 0; index < 5; index++) {
            incCounter(counter + 1);
        }
    }


    /**
     * will increment by five
     */
    const incBy5 = () => {
        for (let index = 0; index < 5; index++) {
            incCounter((prevCounter) => prevCounter + 1);
        }
    }

    return (
        <div>
            <h1>inc by five</h1>
            <button onClick={incBy5}>inc by
            <span style={{ color: 'red', marginLeft: '100px' }}>{counter}</span></button>

            <button onClick={incBy1}>inc by
            <span style={{ color: 'red' }}>{counter}</span></button>
        </div>
    );


};
export default PrevState;