import React from "react";
import "./style.css";
import "../App.css";

const Projects = () => {
    return (
        <div className="home-container">
            <div className="body">
                <h1 className="yellow-heading">Projects</h1>
                <h2>Here, I will explain my past projects that I've worked on. If you would like to see the source code for each project, please click the link below.</h2>
                <div className="links">
                    <a href="https://github.com/Aerondight77" target="_blank" rel="noreferrer" className="links">My GitHub</a>
                </div>
            </div>

            <div className="body">
                <h1 className="yellow-heading">Finance Buddy App Project</h1>
                <p className="body-text">This project was made in ACM UC San Diego's Hackschool Workshop where we got introduced to <b>full stack development</b>.
                The app is a purchase tracker that is supposed to help users keep track of their purchases, where it tracks information such as:</p>
                <ul className="lists">
                    <li>Name of product purchased.</li>
                    <li>Cost of the product.</li>
                    <li>Method of payment used to purchase product (credit card, cash, check, etc.).</li>
                    <li>Description of the product.</li>
                    <li>Location of the purchase (online or in person such as at Costco or Walmart).</li>
                    <li>Date of purchase.</li>
                </ul>
                <p className="body-text">We first started off learning about <b>HTML</b> and <b>CSS</b>, their syntaxes and what they do for a webpage. We then added in JavaScript to see how that
                changes the site. At the start of building this particular app, we started learning about the <b>Document Object Model (DOM)</b>, <b>Node.js</b>, as well as <b>React</b> and <b>JSX</b>. With that 
                as our foundation, we proceeded to use what we learned to build the UI of the app, such as the navigation bar, the "boxes" that displays each purchase, as well as the 
                overall look of the page such as the layout of every element and the font + colorings.</p>
                <p className="body-text">After that, we learned about the backend, utilizing <b>MongoDB</b> as our server to store data. We initialized a MongoDB cluster, and then wrote the 
                backend <b>JavaScript</b> code that connects to the cluster. This part is mainly for storing the purchase data when the "Add Purchase" form is filled out and the "Submit" button is 
                clicked. We, of course, needed to display the purchases the user inputted, so the backend also retrieves data from the cluster to display it on the "View Purchases" 
                page. Finally, we added code to neatly organize the displayed data pulled from the cluster.</p>
                <p className="body-text">Overall, it was a fun project getting introduced to full stack development and knowing how to make a webpage look good while also make it 
                functional. The app itself isn't very sophisticated, but it allowed me to learn a lot about what goes on under almost every webpage I've visited. In fact, this 
                website I made for myself is based on this particular project, but instead of using the bright and colorful theme of the project, I wanted to make my page easier on the 
                eyes especially when viewing in a dark setting, so I made this page mostly dark-themed. The tools used in this project includes: <b>Visual Studio Code, Node.js, MongoDB, and React</b>.</p>
                <div className="links">
                    <a href="https://github.com/Aerondight77/hackschool-fa22" target="_blank" rel="noreferrer" className="links">Link to the repository</a>
                </div>
            </div>

            <div className="body">
                <h1 className="yellow-heading">Fitness Tracker App Project</h1>
                <p className="body-text">This project was made in Orange Coast College's Software Engineering class where we worked on a project while also 
                learning about the different stages of software engineering and the different methods of software engineering. This app in particular was built 
                using the <b>Scrum method</b>, was co-developed with two other people, and was written using <b>C# & C</b>.</p>
                <p className="body-text">The app's main purpose is as the name describes - it tracks the user's fitness. It helps the user track their weight, 
                height, BMI, daily exercises like what workout they did and for how long, their sleep hours, what they eat, how much calories burned, as well as 
                a to-do list, and amongst other fitness related things that the user can track. The app logs all of this information and stores it in a SQL 
                server. Unlike the previous tracker app, this one includes a login component where the user has to create a username and password to access their data.</p>
                <p className="body-text">When we first started on this project, we had no idea what to use to create an app. Initially, one member suggested we 
                use Python to create a GUI and then figure out the tracking data later, but that never came into fruition because two other members don't know 
                how to write Python yet. Since we all knew C++, we decided to use that instead, but none of us knew how to write an application using C++. We discovered 
                an old technology called MFC to create a GUI and log data. The more we use it, the more we realize it was tedious and complicated to create the GUI 
                and save data. Eventually, one of our members found about using C# .NET, and after seeing how much easier and better the development process could be, 
                we switched to it. Since we all know some form of C, picking up C# wasn't that hard for us. So at the end, this application was developed mostly in C#.</p>
                <p className="body-text">Overall, it was a stressful project trying to figure out how to make something before each checkpoint. We had no help from 
                the professor and they expect a certain amount to be completed before each checkpoint. I had to do a majority of the work; from designing the GUI, to 
                figuring out and writing formulas for some of the things that needs tracking, to figuring out how to save data using SQL, to figuring out how best to 
                demonstrate and display the project for our professor. We had to learn everything ourselves from scratch, plus the fact that we had to do all this in 
                a remote setting (this project was worked on during the start of the 2020 pandemic) made it so much harder and gave us nearly sleepless nights. 
                On the bright side, it was a great learning experience about the development of software (their stages and what happens in each stage), and how tough 
                it can be to be a software engineer. The project in the end came out great and we're proud of what we made. The tools used in this project includes:
                <b> Visual Studio Community & Code, and SQL</b>.</p>
                <div className="links">
                    <a href="https://github.com/Aerondight77/Fitness-Tracker-App" target="_blank" rel="noreferrer" className="links">Link to the repository</a>
                </div>
            </div>

            <div className="body">
                <h1 className="yellow-heading">Sightlined Game Project</h1>
                <p className="body-text">This project was created for a <b>Game Jam hosted by Ben Bonk</b> on 11/20/2020-11/23/2020. We basically have to create a game 
                within a certain time frame based on a given theme, and the given theme was "limited space" (we are free to interpret that however we like). 
                The game was co-developed with two other people (different people from the Fitness App Project), and was made using <b>Unity (C#)</b>.</p>
                <p className="body-text">The game is basically a pixel 2D rogue-like survival game set in a dungeon setting with limited space and visibility. Every 
                dungeon and its powerups are randomly generated but every room's layout is basically the same; it's small, has four stationary objects, two to four 
                openings leading to other rooms, and maybe a powerup. The player controls a single character and the objective is to survive as long as they can 
                (there is a timer that counts up) while waves of dungeon monsters swarm the player to try and kill the player. The player starts off with a single 
                shot handgun that has unlimited ammo, they can use it to kill the monsters, and each monster has varying health depending on the type - so smaller 
                monsters die in one shot while bigger ones die in multiple shots. The player has three full hearts as health bars and each time a monster touches 
                the player, it halves the heart's bar, so in total the player can only take 6 hits before game over. What makes this hard is that the player has 
                very limited space and visibility to try and spot, avoid, and kill the monsters. When the player dies the game over screen shows up that displays 
                the survival time, and a button to replay again.</p>
                <p className="body-text">Given how little experience and time we had to complete the game, a lot of hours was spent on learning rather than coding.
                Since a game requires sprites, one of us had to dedicate to designing the sprites and stage instead of coding, which happened to be me. The other 
                two focused on getting the game working, the concept, and the controls down. We all had to learn how to code the controls, the interaction of sprites, 
                animations (even though there were barely any in our game), and the rules/concept of the game. All in all, this was a project that introduced me to 
                the world of game development which, at the time, I really wanted to explore since I am a gamer myself. Unfortunately, I didn't do a lot of the 
                coding of the game, despite that, I learned a lot of how to develop and design a game; like the code to control a player or the conditions to end the 
                game. It was a stressful learning experience because of the limited time frame, but I'm glad I got to experience game development and a Game Jam. 
                If I remember correctly, we placed around 58th out of 100+ entries. The tools we used in this project includes: <b>Unity, Visual Studio Community & Code, 
                and Aseprite</b>.</p>
                <p className="body-text">Unfortunately, I am not the owner nor the keeper of the original code to the game, so I cannot access the code to show. The 
                keeper didn't seem like he uploaded the code to a GitHub repository. Furthermore, the link to the game has stopped working as it seems the keeper 
                disabled access to it. Either way, I'll put the link to the game in case access is granted again and the reader wants to speak to the keeper: </p>
                <div className="links">
                    <a href="https://dantes1nferno.itch.io/silghtlined" target="_blank" rel="noreferrer" className="links">Link to the game</a>
                </div>
            </div>

            <div className="body">
                <h1 className="yellow-heading">RimorX Drone</h1>
                <p className="body-text">This project was made during my <b>internship</b> at Orange Coast College in collaboration with <b>NASA</b> and the <b>California Space Grant 
                Consortium</b>. It's basically code to control a ground drone operated by Arduinos. The project was worked on along with two other people (different people 
                than the last two projects again), but only I wrote the codes, and was made using the <b>Arduino IDE (C++)</b>. The whole idea of the project is basically to 
                design a drone for the NASA Artemis Lunar program to study the surface and tunnels of the moon. Apart from moving the drone, we need to come up with 
                other parts of the drone that can conduct surveys and collect data to be "sent back to Earth". We came up with the drone having the capability to 
                measure temperatures, humidity, gas, as well as monitor its location on the moon.</p>
                <p className="body-text">Firstly, the code to control the automated movement of the drone was already given, as in, I didn't write it, but it is in 
                the repository should anyone want to read it. Basically, it utilizes an ultrasonic sensor as the "eyes", and it keeps moving in a straight line until 
                it detects an obstacle, in which it will move backwards a little and turn left a little to see if it can maneuver around the obstacle. The final product 
                has two Arduinos on it, and one of them is dedicated to the driving function of the drone. Our extended idea/theory of this automated driving is that 
                it should drive around the lunar surface without anyone controlling it, and once it detects a hole, or a change in temperature, the drone would stop to 
                conduct surveys and collect data by lowering the crane into the hole (if there is one). It would ping the location to NASA to log as a potential research 
                site.</p>
                <p className="body-text">The rest of the functions of the drone were written by me. Since there were quite a few modules/parts attached to the drone, I 
                had to write code for each and every one. The modules/parts (other than the driving parts) include: </p>
                <ul className="lists">
                    <li>MQ2 Gas Sensor</li>
                    <li>DHT11 Temperature and Humidity Sensor</li>
                    <li>NEO-6M GPS Sensor</li>
                    <li>ESP8266 Wi-Fi Module</li>
                    <li>TMP36 Temperature Sensor</li>
                    <li>360 degree Servo</li>
                </ul>
                <p className="body-text">Firstly, the MQ2 Gas Sensor - this sensor only measures gas concentration in units of ppm, and is limited to only detect H2, LPG, 
                CH4, and CO gasses. The other problem with this sensor was that it gives a vague output, but we used it anyways. This sensor is attached to the 
                "sensor holder" part of the crane that would be lowered into a lunar hole/tunnel. Theoretically, the drone would have a gas sensor that can tell NASA what 
                gas is detected inside the hole and how much of it is in there. Another part that is attached to the "sensor holder" is the DHT11 Temperature and 
                Humidity Sensor; as the name suggests, it measures both temperature (in degrees Celsius) and humidity. Theoretically, it should measure the hole/tunnel's 
                temperature and humidity to send to NASA. The NEO-6M GPS Sensor is one of the few that aren't attached to the "sensor holder". The GPS sensor collects and 
                obtains various data, but in the code I only extract/use and display only those needed, such as the latitude and longtitude. Theoretically, this part should 
                "ping" the drone's current location to NASA in case something interesting comes up and further research should be conducted in that particular spot or hole. 
                Note that there is another temperature sensor on the drone, the TMP36; the purpose of this sensor is to detect changes in temperature (particularly 
                warmer temperatures) to let the 360 degree servo know that it needs to lower the "sensor holder" because there is a hole/tunnel. In theory, when exploring the lunar 
                surface, when both the "eyes" see a gap, and the temperature sensor detects an increase in temperature, it should mean there is a hole/tunnel right in 
                front of the drone, the drone should stop in place, and the "sensor holder" should be lowered to collect data. In code, when the temperature detected 
                increases to a certain number, the servo would start spinning to a certain degree (to lower the "sensor holder"), hold there for a bit, then turn back 
                the same amount of degrees - note that in code for this drone, this is done regardless if the "eyes" see a gap because an ultrasonic sensor can't yet 
                distinguish a large gap (stop) vs. an obstacle (go around). Lastly, all data collected (except from the TMP36) are then sent to the ESP8266 Wi-Fi Module 
                to be displayed. In code, the Wi-Fi module connects to the home router, acts as a server, and displays a website using HTML with data from the sensors. 
                In addition to the data from the sensors, it displays the date and time using the NTPClient library. In theory, the Wi-Fi module is something that 
                collects data from the sensors, and sends all that data (including the date and time the survey/collection was conducted) back to NASA on Earth.</p>
                <p className="body-text">All in all, this was a fun project exploring coding with robotics and electronics. I wanted to see whether this would be a coding 
                field I would go into in the future, and this internship and project was a great experience to help me with that. While it was fun, it was a little tedious, 
                and we struggled a lot (due to one member slacking a bit), but I learned a lot about this field of work. I needed to know about electronics like how to 
                wire and connect them, their respective libraries, how to use them, and what they can do, etc. Looking back at it, I kind of enjoyed it. The tools and libraries 
                we used in this project includes: <b>Arduino IDE, Servo, ESP8266, and other libraries</b>.</p>
                <div className="links">
                    <a href="https://github.com/Aerondight77/RimorX-Drone" target="_blank" rel="noreferrer" className="links">Link to the repository</a>
                    <a href="https://docs.google.com/presentation/d/14FcDx1KXU6YhirrmwbBWQynVlEAngIA-/edit?usp=sharing&ouid=116179635480038355972&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="links">Slides of the project</a>
                    <a href="https://drive.google.com/drive/folders/163LrxZGEecl-XsJV_nzaIYb60dWbstIX?usp=sharing" target="_blank" rel="noreferrer" className="links">Videos of the project</a>
                </div>
            </div>

            <div className="body">
                <h1 className="yellow-heading">Lost Ark Queue App Concept</h1>
                <p className="body-text">This project was my attempt to learn how to develop an <b>Android App</b>. Note that this app is only a concept, therefore it is an 
                incomplete app, but it already has the basic main features implemented. A more detailed description of this app and its purpose is written in the repository 
                (I recommend reading it there instead of here), 
                but in short, the concept is that it's basically an unofficial companion app the the South Korean video game "Lost Ark" developed by Smilegate RPG. 
                There was a time in the game's life where the limited capacity servers were swarming with bots, which made the servers full and the queue times to get into 
                the game long. This caused a lot of frustration for many players including me, and yet, after multiple weeks the developers still did nothing. Since the 
                queue times vary, I thought, why not make an app that players can contribute to help other players? Players provide data to help other players determine 
                when to start queueing so by play time, they can actually play instead of waiting for 2 hours to get into a game. The whole concept is that players enter 
                what position they are at in the queue (for their particular server), and since the queue number vs. estimated time remaining until the player gets into 
                the server is pretty consistent, it gives other players a better idea on when to start queuing. It's supposed to connect to a server that logs all the 
                inputs that players have put in and shows it to other players in their respective servers, however, I never got around to implement this (reasons why are 
                stated in the repository).</p>
                <p className="body-text">Eventually, after weeks the issue was "fixed" by the developers of the game and players can get into their servers quickly now, 
                therefore, this app became obsolete. No point in further developing this app when the initial problem is already gone. Overall, as I mentioned above, 
                this app was just my attempt to learn Android App development; the app itself is not that interesting or complex. I wanted to see if this was something I'd 
                like to delve into in the future, but after attempting to develop this app, and getting a decent idea of Android App development, maybe it's not for me. 
                The tools used in this project include: <b>Android Studio (Java)</b>.</p>
                <div className="links">
                    <a href="https://github.com/Aerondight77/Lost-Ark-Queue-App-Concept" target="_blank" rel="noreferrer" className="links">Link to the repository</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;