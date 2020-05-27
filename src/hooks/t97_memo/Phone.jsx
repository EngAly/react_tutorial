import React from 'react';

const Phone = ({ phone }) => {
    console.log(phone);

    return (
        <div>
            <h1>{phone}</h1>
        </div>
    );
};

// make "Phone" functional component  as a memo Component and return MemoPhone variable
export const MemoPhone = React.memo(Phone);