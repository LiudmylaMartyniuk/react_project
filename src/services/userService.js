import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll:() => apiService.get(urls.users.base),
    create: (item) => apiService.post(urls.users.base, item)
}

export {userService}