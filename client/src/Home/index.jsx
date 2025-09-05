import React from "react";
import "./style.css";
import portrait from './20201111_131345.jpg';
import "../App.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="body">
                <img style={{ width: 400, height: 300}} src={portrait} alt="" class="responsive-image"/>
                <h1>Bailey Ho</h1>
                <h2>Welcome to my website!</h2>
                <p className="body-text">You can view my resume and explore projects that I've worked on here. To get started, please click on one of the pages on the navigation bar. To view external links:
                </p>
                <div className="links">
                    <a href="https://github.com/Aerondight77" target="_blank" rel="noreferrer" className="links">GitHub</a>
                    <a href="https://linkedin.com/in/bailey-ho-22b8041bb/" target="_blank" rel="noreferrer" className="links">LinkedIn</a>
                    <a href="https://github.com/Aerondight77/personal-website" target="_blank" rel="noreferrer" className="links">Website Source Code</a>
                </div>
            </div>

            <div className="body">
                <h1>About Me</h1>
                <p className="body-text">Hello! My name is Bailey, I am 24 years old, and I graduated from the University of California, San Diego, with a <b>Bachelor's degree in Mathematics - Computer Science</b>. I am from Garden Grove in Orange County, California.
                Some languages I know include: <b>C++, C, C#, Java, Python, JavaScript, HTML, CSS, and React</b> in no particular order. Some tools I know to use include: <b>VSCode, GitHub (& Git), Google Collab, Jupyter Notebooks, Unity, and Arduino</b>.
                I love computers and technology in general; smartphones, desktop PCs, laptops, cameras, or any smart devices, which is why I decided to learn about and pursue a career that is related to technology like <b>software development, cybersecurity, or IT</b>.
                You can find more details of my professional life in the resume page above.</p>
                <p className="body-text">As for my personal life, my hobbies include playing video games (both single player and multiplayer games), photography, watch movies, TV shows, anime, and occassionally read a manga, ride a bicycle, or build LEGO.
                In addition to technology, I love cars, or really, anything with rubber wheels (motorcycles, bicycles, RC cars, and even airplanes since they have rubber wheels as well). My dream car is a Porsche 911 GT3 (either manual or auto).
                </p>
            </div>
            
            <div className="body">
                <h1>Contact Me</h1>
                <p className="body-text">Email: <a href="mailto:bhwork@tutamail.com" className="email-link">bhwork@tutamail.com</a></p>
                <p className="body-text">Phone number: Since I get a lot of scam and spam calls, I may not answer calls from unknown numbers. Therefore, it is better to email me instead to set up a phone call. Thank you for your understanding.</p>
            </div>
        </div>
    );
};

export default Home;