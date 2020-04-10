import React, { Component } from 'react';


var comments = [
    { name: "aly ahmed", comment: "sport is goood for any one" },
    { name: "hossam omara", comment: "sport is good for body" }
]
class Post extends Component {
    render() {
        return (
            <div className="container card bg-secondary">
                <h1>What is the Sport</h1>
                <div class="card-body">
                    <Comment />
                </div>
            </div>
        );
    }
}

class Comment extends Component {
    render() {
        var usersComments = comments.map(function (comment) {
            return <p><b>{comment.name}: {comment.comment}</b></p>
        });
        return <div>{usersComments}</div>
    }
}
export default Post

