import React from 'react';

const Count = ({ text, count }) => {
    console.log(text + '  -------  ' + count);
    return (
        <div>
            <h2>{text} --- {count}</h2>
        </div>
    );
};

// use
export default React.memo(Count);