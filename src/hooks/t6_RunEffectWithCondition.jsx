import React, { useState, useEffect } from 'react';

/**
 * note :- 
 * we can use multi state in functional component
 */
const RunEffectWithCondition = () => {
    const [counter, setCounter] = useState(0);

    const [name, setName] = useState('');

    useEffect(() => {
        document.title = "welcome visitor";
    },
        /**
         * call useEffect only if counter has been changed
         * so if name is continuous in changing not call useEffect
         * this is an array so that you can add multi state
         */
        [counter])
    return (
        <div>n 
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCounter(counter + 1)}>Click {counter}</button>

        </div >
    );
};

export default RunEffectWithCondition;