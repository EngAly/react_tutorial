import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'there thing went error',
                post: {}
            };
        default:
            return state
    }
}

/**
 * how to  handle data from server using useReducer 
 */
const FetchDataUsingRedcer = () => {
    const [dataState, dataDispatch] = useReducer(reducer, initState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dataDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(errorMsg => {
                dataDispatch({ type: 'FETCH_ERROR', error: errorMsg })
            })
    }, [])

    return (
        <div>
            <h1>{dataState.loading ? 'Loading...' : dataState.post.title}</h1>
            <h1>{dataState.error ? dataState.error : null}</h1>
        </div>
    );
};

export default FetchDataUsingRedcer;