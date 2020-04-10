import React, { useState } from 'react';

/**
 * rulws of hooks 
 * 1) only call hooks at the 
 */
const UseState = () => {
    const [counter, incCounter] = useState(0);
    return (
        <div>
            <button onClick={()=>incCounter(counter + 1)}>Click
            <span style={{ color: 'red', marginLeft: '100px' }}>{counter}</span></button>
        </div>
    );
};

export default UseState;