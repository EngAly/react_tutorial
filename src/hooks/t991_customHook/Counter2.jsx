import React from 'react'
import { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function Counter2() {

    const [counter, setCounter] = useState(0);

    //call shared custom hook between multi functons
    useDocumentTitle(counter)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>incCounter2 <span>{counter}</span></button>
        </div>
    )
}


export default Counter2
