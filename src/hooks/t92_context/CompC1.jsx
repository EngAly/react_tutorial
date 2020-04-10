import React, { useContext, useEffect, useState } from 'react';
import { Consumer, Consumer1 } from './Context'


/**
 * how to use consumer with easy way instead of using arrow function
 */
const CompC1 = () => {
       /**
        * here you can get  the content of context by passing consumer for useContext() function
        * as far we known three hooks
        * 1) useContext();
        * 2) useEffect();
        * 3) useState();
        */
       
    const library = useContext(Consumer);
    const framework = useContext(Consumer1);

    return (
        <div>
            <h1>{library} is library</h1>
            <h1>{framework} is framework</h1>
        </div>
    );
};

export default CompC1;