import './App.css';
import React, { useState } from 'react';
import BodySpace from './components/BodySpace';
import contact from './components/images/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import email from './components/images/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import bar from './components/images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Gallery from './components/Gallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const contactNumber = '+919866100630';
  const emailAddress = 'adithyasakthimani@gmail.com';

  // Copy to clipboard function
  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(message); // Set the custom message
      setIsToastVisible(true); // Show the toast
      setTimeout(() => {
        setIsToastVisible(false); // Hide the toast after 3 seconds
      }, 3000);
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  };

  const RenderMenu = () => {
    return (
      <div className="dropdown-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#hobbies">My Hobbies</a>
        <a href="#social-media">Social Media</a>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="left-items">
          <div
            className="contact"
            onClick={() => copyToClipboard(contactNumber, 'Contact number copied!')}
          >
            <img src={contact} className="contact-icon" alt="contact icon" />
          </div>
          <div
            className="email"
            onClick={() => copyToClipboard(emailAddress, 'Email address copied!')}
          >
            <img src={email} className="email-icon" alt="email icon" />
          </div>
        </div>
        <div className="right-items">
          <img src={bar} className="bar-icon" onClick={toggleMenu} alt="menu icon" />
        </div>
      </div>

      {isMenuOpen && RenderMenu()}

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
