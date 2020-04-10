import React from 'react';
import CompA from './CompA';
import { Provider, Provider1 } from './Context'


const Father = () => {
    return (
        <div>
            {/*  how to use nested provider an then how to call them in consumer */}
            <Provider value="react">
                <Provider1 value="angular">
                    <CompA />
                </Provider1>
            </Provider>
        </div >
    );
};

export default Father;