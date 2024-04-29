import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import React from "react";
import Resume from "./Resume";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <main>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/personal-website" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;