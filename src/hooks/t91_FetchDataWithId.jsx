import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataWithId = () => {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [postId, getPostWithId] = useState(1);


    const getPostWithMouse = () => {
        getPostWithId(id);
    }


    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                alert(err);
            })
    },
        //  note with this state object you define when will execute render so that it will 
        // execute when postId changed
        // if you put id also so that will execute each input changed
        [postId])


    return (
        <div>

            <h3>{JSON.stringify(post)}</h3>
            <input value={id} onChange={e => setId(e.target.value)} />
            <button onClick={getPostWithMouse}>Click</button>
        </div>
    );
};

export default FetchDataWithId;