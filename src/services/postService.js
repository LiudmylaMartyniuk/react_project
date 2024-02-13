import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => apiService.get(urls.comments.base),
    getPostById: (postId) => apiService.get(urls.posts.getPostById(postId))
}

export {
   postService
}