import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const toDoService = {
    getAll: () => apiService.get(urls.todos.base),
}

export {
    toDoService
}