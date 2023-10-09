import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../PAges/Home/Home";
import Place from "../PAges/Places/Place";
import About from "../PAges/About/About";
import Details from "../PAges/Details/Details";
import Login from "../Login/Login";
import SignUp from "../signUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import Teavel from "../PAges/Travel/Teavel";


const router =createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/place",
                element:<Place></Place>,
                loader:()=>fetch('/Data.json')
            },
            {
                path:"/about",
                element:<PrivateRoute>
                    <About></About>
                </PrivateRoute>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader:()=>fetch('/Data.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signIn",
                element:<SignUp></SignUp>
            },
            {
                path:"/travel",
                element:<PrivateRoute><Teavel></Teavel></PrivateRoute>
            }
        ]
    }
])
export default router;