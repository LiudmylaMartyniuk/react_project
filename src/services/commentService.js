import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getCommentsByPostId: (postId) => apiService.get(urls.comments.base, {params: {postId}})
}

export{
    commentService
}