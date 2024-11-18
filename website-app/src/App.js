import './App.css';
import React, { useContext, useState } from 'react';
import BodySpace from './components/BodySpace';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Gallery from './components/Gallery';
import Navbar from './Navbar';
import NoteContext from './components/NoteContext';
import RenderMenu from './components/RenderMenu';
import { Link } from 'react-router-dom';
function App() {
  const {isMenuOpen,setIsMenuOpen,toastMessage,setToastMessage,isToastVisible,setIsToastVisible} = useContext(NoteContext);
  return (
    <div className="App">
      <Navbar/>
      {isMenuOpen && <RenderMenu/>}

      {/* Sections */}
      <div id="home">
        <BodySpace />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="hobbies" className="hobbies">
        <Gallery/>
      </div>
      <div id="social-media" className="social-media">
        <SocialMedia />
      </div>
      {/* Toast Notification */}
      {isToastVisible && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
