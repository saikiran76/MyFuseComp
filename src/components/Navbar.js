import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png";
// import Button from "./Button";
// import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
<header>
        <div className="container h-13">
            <input type="checkbox" name="" id="check"/>
            
            <div className="logo-container">
                <h2 className="logo">MyFuse<span className="text-red-600">.</span>In</h2>
            </div>

            <div className="nav-btn">
                <div className="nav-links">
                    <ul>
                        
                        <li className="nav-link" style={{ '--i': '.6s' }}>
                        <Link to="/Home"> Home </Link>
                        </li>
    
                        <li className="nav-link" style={{ '--i': '.85s' }}>
                            <a href="#">Jobs<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 3<i className="fas fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                    <div className="dropdown second">
                                                        <ul>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div className="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{ '--i': '1.1s' }}>
                            <a href="#">Blogs<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 3<i className="fas fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                    <div className="dropdown second">
                                                        <ul>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div className="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{ '--i': '1.35s' }}>
                            <a href="#">About</a>
                        </li>
                        <li className="nav-link" style={{ '--i': '1.35s' }}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="log-sign" style={{'--i': '1.8s'}}>
                    <a href="#" className="btn transparent">Log in</a>
                    <a href="#" className="btn solid">Sign up</a>
                </div>
            </div>

            <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
        </div>
    </header>

  );
};

export default Navbar;