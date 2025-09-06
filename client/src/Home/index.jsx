import React from "react";
import "./style.css";
import portrait from './20201111_131345.jpg';
import "../App.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="body">
                <img style={{ width: 400, height: 300}} src={portrait} alt="" class="responsive-image"/>
                <h1 className="large-name">Hello! I'm <b>Bailey Ho</b></h1>
                <h2>Welcome to my website!</h2>
                <p className="body-text">You can view my resume and explore projects that I've worked on here. To get started, please click on one of the pages on the navigation bar.
                </p>
                <div className="links">
                    <a href="https://github.com/Aerondight77" target="_blank" rel="noreferrer" className="links">GitHub</a>
                    <a href="https://linkedin.com/in/bailey-ho-22b8041bb/" target="_blank" rel="noreferrer" className="links">LinkedIn</a>
                </div>
            </div>
            
            <div className="body">
                <h1 className="yellow-heading">Contact Me</h1>
                <p className="body-text">Email: <a href="mailto:bhwork@tutamail.com" className="email-link">bhwork@tutamail.com</a></p>
                <p className="body-text">Phone number: Since I get a lot of scam and spam calls, I may not answer calls from unknown numbers. Therefore, it is better to email me instead to set up a phone call. Thank you for your understanding.</p>
            </div>
        </div>
    );
};

export default Home;