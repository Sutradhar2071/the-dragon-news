import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>
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