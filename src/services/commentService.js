import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentService = {
    getAll: () => apiService.get(urls.comments),
    create: (data) => apiService.post(urls.comments, data)
}

export{
    commentService
}