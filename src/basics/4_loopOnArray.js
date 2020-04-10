import React, { Component } from 'react'
 
var posts = [
    { PersonName: "ali ahmed", Content: "this is first my post in this group" },
    { PersonName: "hossam", Content: "this is second my post in this group" },
    { PersonName: "saeed", Content: "this is first my post in this group" }
];

class Posts extends Component {
    render() {
        var post = posts.map(function (post) {
            return (
                <div>
                   <p>user name is : <b>{post.PersonName}</b> and content is <b>{post.Content}</b></p>
                </div>
            );
        });
        return <div>{post}</div>;
    }
}
export default Posts

