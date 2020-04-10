import React from 'react';

const Phone = ({ phone }) => {
    console.log(phone);

    return (
        <div>
            <h1>{phone}</h1>
        </div>
    );
};

export const MemoPhone = React.memo(Phone);