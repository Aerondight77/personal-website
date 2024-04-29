import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navlinks">
                <a href="/personal-website">Home</a>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
            </nav>
        </div>
    );
};

export default Navbar;