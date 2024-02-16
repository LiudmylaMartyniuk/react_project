import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserPostsPage from "./pages/UserPostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children: [
            {
                index:true, element: <Navigate to={'users'}/>
            },
            {
                path:'users', element: <UsersPage/>
            },
            {
                path:'users/:id', element:<UserDetailsPage/>, children:[
                    {
                        path:'posts', element:<UserPostsPage/>
                    }
                ]
            },
            {
                path:'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
])

export {
    router
}