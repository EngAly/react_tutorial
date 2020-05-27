import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter1() {

    const [counter, setCounter] = useState(0);
    useDocumentTitle(counter)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>incCounter <span>{counter}</span></button>
        </div>
    )
}


export default Counter1
