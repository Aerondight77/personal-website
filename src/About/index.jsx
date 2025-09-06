import React from "react";
import "./style.css";
import "../App.css";

const About = () => {
    return (
        <div className="home-container">
            <div className="body">
                <h1 className="yellow-heading">About Me</h1>
                <p className="body-text">Hello! My name is Bailey, I am 25 years old, and I graduated from the <b>University of California, San Diego</b>, with a <b>Bachelor's degree in Mathematics - Computer Science</b>. I am from Garden Grove in Orange County, California.
                I love computers and technology in general; smartphones, desktop PCs, laptops, cameras, or any smart devices, which is why I decided to learn about and pursue a career that is related to technology like <b>software development, cybersecurity, or IT</b>.
                </p>
                <p className="body-text">Growing up, I wasn't exposed to technology since I lived in Vietnam where technology was not easily accessible. But whatever I had, I was fascinated by it; I was curious to know how it worked, what each wire does, how I could "control" it, and how I could fix it.
                I think my first piece of technology was a video game console called the SEGA Dreamcast. I also used my first desktop PC around that time too, although that one belonged to my dad. My second piece of technology was a Nintendo DS, which had to be imported from 
                the United States because it wasn't sold in Vietnam. My first piece of technology that was considered "smart" was an iPod Touch. Back then I was so fascinated by that device; I could browse the internet, play games, and listen to music all in one device. I think that iPod Touch
                made me fall in love with technology, especially smart technology. This made me want to learn more about tech and be able to work on something related to tech. So here I am, that love for technology allowed me to learn coding, write programs, get certified in IT and cybersecurity, 
                and spend too much on technology.
                </p>
                <p className="body-text">Aside from technology, my hobbies include playing video games (both single player and multiplayer games), photography, watch movies, TV shows, anime, read manga, ride a bicycle, or build LEGO.
                In addition to technology, I love cars, or really, anything with rubber wheels (motorcycles, bicycles, RC cars, and even airplanes since they have rubber wheels as well). My dream car is a Porsche 911 GT3 (either manual or auto).
                </p>
            </div>
        </div>
    );
};

export default About;