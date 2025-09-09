import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Nova from "./nova/Nova";
import "./styles/app.css"
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import Blog from './blog/Blog';
import Post from './blog/post';
import Chatbot from "./ChatBot/Chatbot";




const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
          <Routes>
              <Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<Post />} />
        <Route path="/" element={<About/> } />
        <Route path="/skills" element={<Skills/> } />
        <Route path="/projects" element={<Projects/> } />
        <Route path="/nova" element={<Nova/> } />
        <Route path="/contact" element={<Contact/> } />
      </Routes>
          <PlayerStats />
          <Chatbot />
    </Router>
  );
};

export default App;