import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import React from "react";
import Resume from "./Resume";
import Projects from "./Projects";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;