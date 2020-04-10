import React, { useState } from 'react';
import MouseHooks from './t7_MouseHooks';

const UseEffectCleanUp = () => {

    const [dispaly, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!dispaly)}>Toggle mouse event</button>
            {/* if dispaly is true so execute  <MouseHooks /> Functional Component
            so that if it false so <MouseHooks /> is unmounted*/}
            {dispaly && <MouseHooks />}
        </div>
    );
};

export default UseEffectCleanUp;