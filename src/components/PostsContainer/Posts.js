import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {postService} from "../../services/postService";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    // const getAllPosts = (post) => {
    //     setPosts(post)
    // }

    useEffect(() => {
        postService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;