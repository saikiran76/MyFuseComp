import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Login from "./components/login";

const App = () =>{
    return(
        <div className="App">
            <Login/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);