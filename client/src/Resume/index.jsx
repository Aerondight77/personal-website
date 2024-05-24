import React from "react";
import "./style.css";
import "../App.css";

const Resume = () => {
    return (
        <div className="home-container">
            <div className="body">
                <h1>Resume</h1>
                <h2>If you prefer a shorter, downloadable version of my resume, click <a href="https://drive.filen.io/d/c69b8e4f-1c41-44d6-afa4-a0b6f2d1e8ff#Rl1cLquZiGfAG9zLxODcTUPE7MVbHxaZ" target="_blank" rel="noreferrer" className="links">here.</a></h2>
            </div>
            
            <div className="body">
                <h2>Education</h2>
                <p className="body-text">Orange Coast Community College</p>
                <p className="body-text">Certification, Computer Science</p>
                <p className="body-text">June 2018 - May 2021</p>
                <ul className="lists">
                    <li>3.89 GPA</li>
                    <li>Data Structures: Learned about sorting algorithms, graphs, trees, hash tables, queues, stacks, the big five.</li>
                    <li>Software Engineering: Learned about the life cycles of a software (planning, developing, testing, maintaining), learned about Scrum and Agile.</li>
                    <li>Computer Architecture: Learned about the assembly language, particularly MIPS, and their purpose/uses.</li>
                    <li>Boolean Algebra: Learned about gates, regular expressions, etc.</li>
                    <li>C++: Learned about the language's syntax, pointers, memory management, and linked lists.</li>
                    <li>Java: Learned about the language's syntax and general concepts like functions, loops, inheritance, runtime complexity, etc.</li>
                    <li>Awarded a C++ Certificate, and an OCC Computer Science Certificate of Achievement.</li>
                </ul>

                <p className="body-text">University of California, San Diego</p>
                <p className="body-text">Bachelor of Science, Mathematics - Computer Science</p>
                <p className="body-text">September 2021 - June 2023</p>
                <ul className="lists">
                    <li>3.345 GPA</li>
                    <li>Software Tools and Techniques Lab: Learned about how to use GitHub, and various different testing tools and techniques.</li>
                    <li>Advanced Data Structures: Learned pretty much the same things as the Data Structures class from OCC but with a few additional things like compression algorithms.</li>
                    <li>Design and Analysis of Algorithms: Learned about the sorting algorithms, greedy algorithms, dynamic programming, runtime complexity, and P/NP/NP-Complete/NP-Hard problems.</li>
                    <li>Theory of Computation: Learned about automatas (finite and infinite), regex, context-free languages, computability, determinism and nondeterminism, turing machines, decidability, etc.</li>
                    <li>Discrete Math and Graph Theory: Learned about graphs, traversing/search algorithms, postman/traveling salesman, flows and cuts, etc.</li>
                    <li>Vector Calculus, Intro to Probability, Numerical Analysis, and Numerical Optimization/Linear Programming (Matlab)</li>
                    <li>Data Science in Practice (Python in Jupyter Notebooks), Data Analysis and Interference (R in RStudio).</li>
                </ul>
            </div>

            <div className="body">
                <h2>Work Experience</h2>
                <p className="body-text">NASA - California Space Grant Consortium</p>
                <p className="body-text">Intern</p>
                <p className="body-text">Costa Mesa, California</p>
                <p className="body-text">June 2021 - August 2021</p>
                <ul className="lists">
                    <li>Built a ground drone with Arduinos along with two other people.</li>
                    <li>Wrote the codes to operate the drone (they can be found in my GitHub under the RimorX-Drone repository).</li>
                    <li>Presented the project to professors from other colleges and to representatives from NASA. Aimed for the NASA Artemis project.</li>
                    <li>Library/tools used: Arduino IDE, Servo, ESP8266, and other libraries.</li>
                </ul>

                <p className="body-text">Walmart</p>
                <p className="body-text">Front-End Services TA</p>
                <p className="body-text">Stanton, California</p>
                <p className="body-text">October 2023 - Present</p>
                <ul className="lists">
                    <li>Part-time job.</li>
                    <li>Assisted customers with financial services such as money orders, sending money, paying bills, etc, as well as checking out customer's items (cashier).</li>
                    <li>Other jobs include: zoning, go-backs, top-stock.</li>
                    <li>Monitored the self-checkout and checked receipts to prevent the loss of assets.</li>
                    <li>Assisted customers with items in the lockups.</li>
                </ul>

                <p className="body-text">RL Refurbished Inc.</p>
                <p className="body-text">Technician</p>
                <p className="body-text">Huntington Beach, California</p>
                <p className="body-text">June 2018 - July 2018</p>
                <ul className="lists">
                    <li>Part-time job.</li>
                    <li>Replaced poor quality parts for better parts in Walmart gaming desktop PCs.</li>
                    <li>Reflashed and updated the firmware in smart door locks, as well as the BIOS in laptops from Gateway while making sure they still turn on and operate normally.</li>
                    <li>Reassembled the reflashed Ring doorbells.</li>
                </ul>
            </div>

            <div className="body">
                <h2>Skills and Certificates</h2>
                <h3>Languages (in no particular order):</h3>
                <ul className="lists">
                    <li>C++</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Markdown</li>
                    <li>Bash Scripts</li>
                    <li>LaTeX</li>
                    <li>R</li>
                    <li>Matlab</li>
                </ul>

                <h3>Certificates:</h3>
                <ul className="lists">
                    <li>C++ Certificate</li>
                    <li>Orange Coast College Computer Science Certificate of Achievement</li>
                    <li>Completion of the NASA - California Space Grant Consortium Internship Certificate</li>
                    <li>CompTIA IT Fundamentals Certificate</li>
                </ul>

                <h3>Software and tools (in no particular order):</h3>
                <ul className="lists">
                    <li>Visual Studio Code</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>GitHub and Git</li>
                    <li>Android Studio</li>
                    <li>Unity</li>
                    <li>Visual Studio Community & Code</li>
                    <li>Arduino</li>
                    <li>MongoDB</li>
                    <li>Trello</li>
                    <li>PyCharm</li>
                    <li>RStudio</li>
                    <li>Jupyter Notebooks</li>
                    <li>AutoHotKey Scripts</li>
                </ul>

                <h3>Other skills:</h3>
                <ul className="lists">
                    <li>Effective communicator</li>
                    <li>Teamwork oriented</li>
                    <li>Attention to detail</li>
                    <li>Organized</li>
                    <li>Time management</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;