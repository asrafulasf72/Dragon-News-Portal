import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";
import About from "../Pages/About";
import Career from "../Pages/Career";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:Homelayout,
        children:[
           {
            index:true,
            Component:Home
           },
           {
            path:'/category/:id',
            Component:Categorynews,
            loader:()=> fetch("/news.json")
           },
           {
            path:'/about',
            Component:About
           },
           {
            path:'/career',
            Component:Career
           }
        ]
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    },
    {
        path:'/newsDetails/:id',
        Component:NewsDetails,
        loader:()=> fetch("/news.json")
    }
])