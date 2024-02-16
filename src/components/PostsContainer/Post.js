import React from 'react';
import {useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const{userId, id, title} = post;
    console.log(post)

    const navigate = useNavigate();

    return (
        <div>
            <div>User Id: {userId}</div>
            <div>Post Id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Get details of the Post</button>
            <br/>
            <br/>
        </div>
    );
};

export default Post;