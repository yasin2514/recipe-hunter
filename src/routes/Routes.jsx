import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/Subscribe/Subscribe";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import LoginLayout from "../layout/LoginLayout";
import ChefLayout from "../layout/ChefLayout";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
        path: '/home',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`https://chef-recipe-hunter-server-side-yasin2514.vercel.app/chef`),
            },
        ]
    },
    {
        path: '/chef/:id',
        element: <PrivateRoutes><ChefLayout></ChefLayout></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-yasin2514.vercel.app/chef/${params.id}`)
    },


])

export default router;


