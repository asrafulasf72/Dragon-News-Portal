import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";
import About from "../Pages/About";
import Career from "../Pages/Career";

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
            Component:Categorynews
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
    }
])