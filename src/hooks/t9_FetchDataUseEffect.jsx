import React, { useState, useEffect } from 'react';
import axious from 'axios';

const FetchDataUseEffect = () => {
    const [posts, setPost] = useState([]);


/**
 * very important note:- 
 * note that here after each featch post to setPost will re render useEffect eact time
 */
    useEffect(() => {
        // external link to get group of ready posts 
        axious.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setPost(res.data)
                console.log(res);
            })
            .catch(err => alert(err))
    },[]);
    return (
        <div>
            <ol>
                {
                    posts.map(post => (<li key={post.id}>{post.title}</li>))
                }
            </ol>
        </div>
    );
}

export default FetchDataUseEffect;