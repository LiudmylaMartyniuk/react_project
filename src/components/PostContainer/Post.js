import React from 'react';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import css from './Post.module.css';

const Post = () => {
    const location=useLocation();
    console.log(location);
    const {state:{postId}} = useLocation();

    const [post, setPost] = useState([])

    useEffect(() => {
        postService.getPostById(postId).then(({data})=>setPost(data))
    }, [postId]);

    const {userId, id, title, body} = post;

    return (
        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};