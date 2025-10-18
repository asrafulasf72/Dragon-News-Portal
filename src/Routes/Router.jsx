import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:Homelayout,
        children:[
        
        ]
    }
])