import React, { useState, useEffect } from 'react'
import { useRef } from 'react';

function HookTimer() {
    const [timer, setTimer] = useState(0);

    const interval = useRef()



    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(interval.current)
        };
    }, [])

    return (
        <div>
            <h1>timer ={timer}</h1>

            <button onClick={() => clearInterval(interval.current)}>stop timer</button>
        </div>
    )
}

export default HookTimer
