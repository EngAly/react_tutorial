import React from 'react'
import useCounter from './useCounter'

function Operations() {

    // this is called array destruction
    const [counter, inc, dec,reset] = useCounter(3)

    return (
        <div>
            <button onClick={inc}>inc <span>{counter}</span></button>
            <button onClick={dec}>dec <span>{counter}</span></button>
            <button onClick={reset}>reset <span>{counter}</span></button>
        </div>
    )
}


export default Operations
