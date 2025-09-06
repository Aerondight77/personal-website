import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-name">Bailey Ho</div>
            <nav className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            
        </div>
    );
};

export default Navbar;