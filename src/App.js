import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Company from "./components/Company";
import Navbar from "./components/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Head from "./components/newHeader";
import Challenge from "./components/challenge";

const App = () => {
    return ( <
        div >
        <
        Navbar / >
        <
        Head / >
        
        <Challenge/>



        {
            /* <Login/>
                        <Company/> */
        } <
        /div>
    )
}

const appRouter = createBrowserRouter([{
        path: "/",
        element: < App / > ,
        children: [{
                path: "/Home",
                element: < Login / >
            },
            {
                path: "/login",
                element: < Login / >
            },


        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = { appRouter }
        />);