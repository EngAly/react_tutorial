import React from 'react';
import Counter from './Counter';
import ComplexCounter from './ComplexCounter';
import MultiState from './MultiState';

const Reducer = () => {
    return (
        <div>

            {/* test counter using reducer */}
            {/* <Counter /> */}

            {/* how to use multi property in state (i.e how to declare state as object) */}
            {/* <ComplexCounter /> */}

            {/* how to use multi reducer */}
            <MultiState />


        </div>
    );
};

export default Reducer;