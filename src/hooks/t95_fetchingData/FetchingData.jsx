import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchingData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    /**
     * [] mean that useEffect will execute first one only
     */
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(Response => {
                setLoading(false);
                setPost(Response.data);
                setError('')
            })
            .catch(error => {
                setError('there thing went error');
                setPost({});
                setLoading(false);
            })
    }, [])
    return (
        <div>
            <h1>{loading ? 'Loading' : post.title}</h1>
            <h1>{error ? error : null}</h1>
        </div>
    );
};

export default FetchingData;