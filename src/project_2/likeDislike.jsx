import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class LikeDislike extends Component {
    constructor(props) {
        super(props);
        // this.incCounter = this.incCounter.bind(this);
        this.state = {
            likes: 100,
            dislikes: 25
        }
    }
    /**
     * note that will applay 3 steps in like/dislike
     * 1) increase/decrease counter
     * 2) like if cancel dislike
     * 3) dislike if cancel like
     */
    liked = () => {

        var like = document.getElementById("likeId");
        if (like.classList.contains("liked")) {

            // decrease like counter by 1
            this.setState({ likes: this.state.likes - 1 });

            // remove liked class to like button
            like.classList.remove("liked");

        } else {

            if (document.getElementById("dislikeId").classList.contains("disliked")) {
                this.setState({ dislikes: this.state.dislikes - 1 });
            }
            // increase like counter by 1
            this.setState({ likes: this.state.likes + 1 });

            // commit liked class to like button
            like.classList.add("liked");

            // remove dislike class from dislike button
            document.getElementById("dislikeId").classList.remove("disliked");
        }


    }

    disLiked = () => {
        var dislike = document.getElementById("dislikeId");
        if (dislike.classList.contains("disliked")) {

            // decrease counter when cancel dislike
            this.setState({ dislikes: this.state.dislikes - 1 });

            // remove dislike class from dislike button
            dislike.classList.remove("disliked");
        } else {

            if (document.getElementById("likeId").classList.contains("liked")) {
                this.setState({ likes: this.state.likes - 1 });
            }

            // decrease counter when commit dislike
            this.setState({ dislikes: this.state.dislikes + 1 });

            // commit dislike class from dislike button
            dislike.classList.add("disliked");

            // remove liked class from like button
            document.getElementById("likeId").classList.remove("liked");
        }


    }
    render() {
        return (
            <>
                <div className="container mt-4 jumbotron">
                    <div className="offset-md-4">
                        <h2><abbr title="make like or dislike">Like/Dislike</abbr></h2>
                        <button onClick={this.liked} id="likeId" className="like-button">Like | <span className="likes-counter">{this.state.likes}</span></button>
                        <button onClick={this.disLiked} id="dislikeId" className="dislike-button">Disliked | <span className="dislikes-counter">{this.state.dislikes}</span></button>
                    </div>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}