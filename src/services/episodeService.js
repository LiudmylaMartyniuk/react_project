import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: (page='1') => apiService.get(urls.episodes.base, {params:{page}}),
    // getCommentsByPostId: (episodeId) => apiService.get(urls.episodes.base, {params: {episodeId}})
}

export{
    episodeService
}