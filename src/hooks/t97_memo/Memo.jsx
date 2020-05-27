import React, { useState } from 'react';
import UserName from './UserName';
import { MemoPhone } from './Phone';

/**
 *  The main idea of react.memo is:- 
 *  When no change in state react not re render 
 *  React.memo()
 *  When deciding to update DOM, React first renders your component,
 *  then compares the result with the previous render result.
 *  If the render results are different, React updates the DOM.
 *  Current vs previous render results comparison is fast. But you can speed up
 *  the process under some circumstances.
 *  When a component is wrapped in React.memo(), React renders the component
 *  and memoizes the result. Before the next render, if the new props are the same,
 *  React reuses the memoized result skipping the next rendering.
 * 
 * snippet it compare old state with new state if equal not re render again
 */
const Memo = () => {
    const [user, getName] = useState({ username: 'usename', phone: 'phone' })

    return (
        <div>
            <UserName fname={user.username} />
            <MemoPhone phone={user.phone} />
            <button onClick={() => getName({ username: 'ahmed', phone: '1234569' })}>Click</button>
        </div>
    );
};

export default Memo;