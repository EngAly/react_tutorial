import React, { useMemo } from 'react';
import { useState } from 'react';

const TestMemo = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //  inc counter1 by one
    const incCounter1 = () => {
        setCounter1(counter1 + 1);
    }

    // inc counter2 by one
    const incCounter2 = () => {
        setCounter2(counter2 + 1);
    }

    /**
     * it tell react to recompute the value for isEven if defined dependence counter1
     * is changed and not in counter2 case or other it recompute in case counter1 only
     * 
     * it performance faster
     * 
     * note that isEven is store a value not function call so that we call it as isEven
     * not as isEven()
     */

    const isEven = useMemo(() => {
        let i = 0
        while (i < 100000000) i++;
        return counter1 % 2 == 0;

    },
    // define dependencies
    [counter1])

    return (
        <div>

            <button onClick={incCounter1}>incCounter1 <span>{counter1}</span></button>
            <button onClick={incCounter2}>incCounter2 <span>{counter2}</span></button>

            {/* call isEven if and only if counter1 is changed */}
            <h1>number is <span>{isEven ? 'even' : 'odd'}</span></h1>

        </div>
    );
};

export default TestMemo