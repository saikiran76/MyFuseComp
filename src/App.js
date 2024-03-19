import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Head from "./components/newHeader";
import Challenge from "./components/challenge";
import Landing from "./components/landing";
import Company from "./components/company";
import Spotlight from "./components/spotlight";

const App = () => {
    return ( <
        div >
        <
        Navbar / >
        <
        Head / >
        
        <Landing/>
        <Challenge/>
        <Company/>
        <Spotlight/>

        </div>
    )
}

const appRouter = createBrowserRouter([{
        path: "/",
        element: < App / > ,
        children: [{
                path: "/Home",
                element: < Head / >
            },
            {
                path: "/login",
                element: < Head / >
            },


        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = { appRouter }
        />);