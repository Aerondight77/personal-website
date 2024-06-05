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
                    <a href="https://github.com/Aerondight77/personal-website" target="_blank" rel="noreferrer" className="links">Source Code</a>
                </div>
            </div>

            <div className="body">
                <h1>About Me</h1>
                <p className="body-text">Hello! My name is Bailey, I am 24 years old, and I graduated from the University of California, San Diego, with a Bachelor's degree in Mathematics - Computer Science. I am from Garden Grove in Orange County, California.
                Some languages I know includes: C++, C, C#, Java, Python, JavaScript, HTML, CSS, and React in no particular order. Some tools I know to use includes: VSCode, GitHub, Unity, and Arduino in no particular order.
                I love computers and technology in general; smartphones, desktop PCs, laptops, keyboards, or any smart devices, which is why I decided to learn about and pursue a career that is related to technology like software development or IT.
                You can find more details of my professional life in the resume page.</p>
                <p className="body-text">As for my personal life, in my pastime I like playing video games (both single player and multiplayer games), watch movies, TV shows, anime, and occassionally read a manga, ride a bicycle, play with Lego, and do some photography.
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