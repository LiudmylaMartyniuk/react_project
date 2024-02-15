import React from 'react';
import {commentService} from "../../services/commentService";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import {useState, useEffect} from "react";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    },[]);

    return (
        <div>
          <CommentForm/>
          <hr/>
          <Comments comments = {comments}/>
        </div>
    );
};

export default CommentsContainer;