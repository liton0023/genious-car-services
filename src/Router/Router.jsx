import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../pages/Checkout/CheckOut";
import About from "../pages/Home/About/About";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Singup from "../pages/Home/Singup/Singup";
import Orders from "../pages/Orders/Orders";
import PrivateRouter from "./PrivateRouter";

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
                path:'/about',
                element:<About></About>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path:'/orders',
                element:<PrivateRouter><Orders></Orders></PrivateRouter>
            }
        ]
    }
])

export default router;