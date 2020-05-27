import React, { useState } from 'react'

/**
 * shared logic
 * @param {*} initCount default value=5
 */
function useCounter(initCount = 5) {
    const [counter, setCounter] = useState(initCount)

    //  inc counter by one 
    const inc = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // dec counter by one
    const dec = () => {
        setCounter(counter - 1)
    }

    // reset counter to init value
    const reset = () => {
        setCounter(0)
    }
    return [counter, inc, dec, reset]
}

export default useCounter
