import React from 'react'
import useCounter from './useCounter'

function Operations2() {

    const [counter, inc, dec,reset] = useCounter()
    
    return (
        <div>
            <button onClick={inc}>inc <span>{counter}</span></button>
            <button onClick={dec}>dec <span>{counter}</span></button>
            <button onClick={reset}>reset <span>{counter}</span></button>
        </div>
    )
}


export default Operations2
