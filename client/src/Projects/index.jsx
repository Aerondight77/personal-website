import React from "react";
import "./style.css";
import "../App.css";

const Projects = () => {
    return (
        <div className="home-container">
            <div className="body">
                <h1>Projects</h1>
                <h2>Here, I will explain my past projects that I've worked on. If you would like to see the source code for the projects, please click the link below.</h2>
                <div className="links">
                    <a href="https://github.com/Aerondight77" target="_blank" rel="noreferrer" className="links">My GitHub</a>
                </div>
            </div>

            <div className="body">
                <h1>Finance Buddy App Project</h1>
                <p className="body-text">This project was made in ACM UC San Diego's Hackschool Workshop where we got introduced to full stack development.
                The app is a purchase tracker that is supposed to help users keep track of their purchases, where it tracks information such as:</p>
                <ul className="lists">
                    <li>Name of product purchased.</li>
                    <li>Cost of the product.</li>
                    <li>Method of payment used to purchase product (credit card, cash, check, etc.).</li>
                    <li>Description of the product.</li>
                    <li>Location of the purchase (online or in person such as at Costco or Walmart).</li>
                    <li>Date of purchase.</li>
                </ul>
                <p className="body-text">We first started off learning about HTML and CSS, their syntaxes and what they do for a webpage. We then added in JavaScript to see how that
                changes the site. At the start of building this particular app, we started learning about the Document Object Model (DOM), Node.js, as well as React and JSX. With that 
                as our foundation, we proceeded to use what we learned to build the UI of the app, such as the navigation bar, the "boxes" that displays each purchase, as well as the 
                overall look of the page such as the layout of every element and the font + colorings.</p>
                <p className="body-text">After that, we learned about the backend, utilizing MongoDB as our server to store data. We initialized a MongoDB cluster, and then wrote the 
                backend JavaScript code that connects to the cluster. This part is mainly for storing the purchase data when the "Add Purchase" form is filled out and the "Submit" button is 
                clicked. We, of course, needed to display the purchases the user inputted, so the backend also retrieves data from the cluster to display it on the "View Purchases" 
                page. Finally, we added code to neatly organize the displayed data pulled from the cluster.</p>
                <p className="body-text">Overall, it was a fun project getting introduced to full stack development and knowing how to make a webpage look good while also make it 
                functional. The app itself isn't very sophisticated, but it allowed me to learn a lot about what goes on under almost every webpage I've visited. In fact, this 
                website I made for myself is based on this particular project, but instead of using the bright and colorful theme of the project, I wanted to make my page easier on the 
                eyes especially when viewing in a dark setting, so I made this page mostly dark-themed. The tools used in this project includes: Visual Studio Code, Node.js, MongoDB, and React.</p>
                <div className="links">
                    <a href="https://github.com/Aerondight77/hackschool-fa22" target="_blank" rel="noreferrer" className="links">Link to the repository</a>
                </div>
            </div>

            <div className="body">
                <h1>Fitness Tracker App Project</h1>
                
            </div>
        </div>
    );
};

export default Projects;