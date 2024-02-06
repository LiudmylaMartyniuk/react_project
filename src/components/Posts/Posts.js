import React from 'react';
import Post from "../Post/Post";
import PostDetails from "../PostDetails/PostDetails";
import {useState, useEffect} from "react";
import axios from "axios";
import {axiosService} from "../../services/axiosService";
import {urls} from "../../constants/urls";
import {postService} from "../../services/postService";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setpostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setpostDetails(post)
    }

    return (
            <div>
                {postDetails && <PostDetails postDetails={postDetails}/>}
                <hr/>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>

    );
};


export default Posts;