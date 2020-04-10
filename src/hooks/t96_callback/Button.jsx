import React from 'react';

const Button = ({ handleClick, children }) => {
    console.log(children);
    return (
        <div>
            {/* note children the wrapped text bettween <Component> </Component>   */}
            <button onClick={handleClick}>{children}</button>
        </div>
    );
};

export default React.memo(Button);