import {createBrowserRouter} from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import ToDosPage from "./pages/ToDosPage";
import PostPage from "./pages/PostPage";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children:[
            {
                path:'albums', element:<AlbumsPage/>
            },
            {
                path:'comments', element:<CommentsPage/>, children:[
                    {path: 'post', element:<PostPage/>}
                ]
            },
            {
                path:'todos', element:<ToDosPage/>
            }
        ]
    }

]);

export {
    router
}
