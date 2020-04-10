import React, { useState, useEffect } from 'react';

const MouseHooks = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const getPosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        // call this function when mouse is moved 
        window.addEventListener('mousemove', getPosition);

        // wheh unmount component return is executed
        return () => {
            window.removeEventListener('mousemove', getPosition)
        }
    }, [])

    return (
        <div>
            <h1>x={X} , y={Y}</h1>
        </div>
    );
};

export default MouseHooks;