import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Company from "./components/Company";
import Header from "./components/header";

const App = () =>{
    return(
        <div>
            <Header/>
            <Login/>
            <Company/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);