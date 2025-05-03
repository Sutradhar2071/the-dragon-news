import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path:'/category/:id',
                Component: CategoryNews
            }
        ]
    },
    {
        path: '/auth',
        element: <div>hello auth</div>
    },
    {
        path: '/login',
        element: <div>hello login</div>
    },
    {
        path: '/*',
        element: <div>error 404</div>
    },
])

export default router;