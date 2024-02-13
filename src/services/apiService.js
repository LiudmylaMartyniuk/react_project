import axios from "axios";
import {userService} from "./userService";
import {baseURL, urls} from "../constants/urls";

const apiService = axios.create({baseURL})

export {
    apiService
}
