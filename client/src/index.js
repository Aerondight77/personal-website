import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
//import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);*/

root.render(
    <App />,
  document.getElementById('root')
);

/* root.render(
  <Router>
    <Link to="/">Home</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/projects">Projects</Link>
    <Navbar/>
    <Routes>
      <Route exact path="/personal-website" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </Routes>
  </Router>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
