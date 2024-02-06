import React from 'react';
import Posts from "../Posts/Posts";

const Post = ({post, getCurrentPost}) => {
    // console.log(post);
    const {id, title} = post;
    return (
        <div>
            <h1>{id}. {title}</h1>
            <button onClick={() => getCurrentPost(post)}>Details</button>
        </div>
    );
};

export default Post;