import React, { useState, useEffect } from 'react';

const UseEffect = () => {

    /**
     * we mention in t4_UseStateArray that useState return two
     * elements.
     * counter => state value
     * setCounter => state setter function
     * 0 > inital value for state so that it as number
     * note state here may by various datatype 
     * primitive type,object,array
     */
    const [counter, setCounter] = useState(0);

    /**
     * it method that use a parameter as a function
     * note that useeffect called with each render and render is called with every state change
     * so every state change it called 
     * (so that it like componentDidMount with inital code in class Component and
     * each render work as componentDidUpdate )
     * useEffect = componentDidMount + componentDidUpdate
     */
    useEffect(() => {
        document.title = `visitor number"  ${counter}`;
    })

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Click {counter}</button>
        </div>
    );
};

export default UseEffect;