import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Singup from "../pages/Home/Singup/Singup";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>,

            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
        ]
    }
])

export default router;