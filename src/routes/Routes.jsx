import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import LoginLayout from "../layout/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ],
    },
    {
        path: '/main',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/main',
                element: <Home></Home>
            },
        ]
    }

])

export default router;


