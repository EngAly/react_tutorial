import React from 'react';

const UserName = ({ fname }) => {
    console.log(fname);
    return (
        <div>
            <h1>{fname}</h1>
        </div>
    );
};

//  React.memo if old component is equal to new component it not re render functional component
//  again
export default React.memo(UserName);