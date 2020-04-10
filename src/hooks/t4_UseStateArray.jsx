import React, { useState } from 'react';

function UseStateArray(props) {


    /**
     * explain bottom instruction
     * useSate return an array with two elements
     * items => is the current value of the state 
     * setItems => is the state setter function
     */
    const [items, setItems] = useState([]);

    const addItem = () => {
        // ...items tell react to let other objects and append next object with them 
        //  so that it not ignore others
        setItems([...items, { id: items.length, name: 'number_' + Math.floor(Math.random() * 100) + 1 }])
    }


    return (
        <div>
            <button onClick={addItem}>Add item</button>

            <ul>
                {
                    items.map((item, index) => <li key={index}>{item.id}  {item.name}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default UseStateArray;