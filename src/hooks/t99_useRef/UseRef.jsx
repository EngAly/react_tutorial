import React, { useEffect } from 'react'
import { useRef } from 'react'

function UseRef() {

    // create new ref
    const inputRef = useRef(null)

    const useEffectReference = () => {
        inputRef.current.focus();
    }

    useEffect(useEffectReference, 
        // [] execute it once after loading and prevent it from exection again 
        [])

    return (
        <div>
            {/* link ref with input field */}
            <input   type="text" id="" />
            <input ref={inputRef} type="text" id="" />
            <input   type="text" id="" />
        </div>

    )
}

export default UseRef
