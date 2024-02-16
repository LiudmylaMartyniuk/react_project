import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getPostsByUserId: (userId) => apiService.get(urls.posts.base, {params: {userId}}),
    byId: (id) => apiService.get(urls.posts.byId(id))
}

export{
    postService
}