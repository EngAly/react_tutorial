import React, { useEffect } from 'react'


/**
 * Custom Hook. When we want to share logic between two JavaScript functions,
 * we extract it to a third function.
 * Custom Hooks are a mechanism to reuse stateful logic 
 * (such as setting up a subscription and remembering the current value), 
 * but every time you use a custom Hook, all state and effects inside of it are fully isolated.
 * How does a custom Hook get isolated state? Each call to a Hook gets isolated state.

 * @param {*} counter 
 */
function useDocumentTitle(counter) {

    const changeTitle = () => {
        document.title = `visitor ${counter}`
    }

    useEffect(changeTitle, [counter]);

}

export default useDocumentTitle
