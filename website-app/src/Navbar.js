import React,{useContext, useState} from 'react'
import './App.css'
import NoteContext from './components/NoteContext';
import contact from './components/images/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import email from './components/images/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import bar from './components/images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import resumeImg from './components/images/description_16dp_000000_FILL0_wght400_GRAD0_opsz20.png'
import { Link } from 'react-router-dom';
import flare from './components/images/flare_16dp_000000_FILL0_wght400_GRAD0_opsz20.png'
function Navbar() {
  const {isMenuOpen,setIsMenuOpen,toastMessage,setToastMessage,isToastVisible,setIsToastVisible} = useContext(NoteContext);
  const toggleMenu = () => {
    setIsMenuOpen((prev)=>{
        return !prev } );
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
  return (
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
            <div className="resume">
            <Link to="/Resume">  
                <img src={resumeImg} className="resume-icon" alt="Resume Icon" />
            </Link>
        </div>
          </div>
        </div>
        <div className="flare">
    <Link to="/">
      <div className='hed-flr'>
      <h1 className="nme">ADITHYA SAKTHIMANI</h1>
      <img src={flare} className="flare-icon" alt="Flare Icon" />
      </div>
    </Link>
  </div>
        <div className="right-items">
          <img src={bar} className="bar-icon" onClick={toggleMenu} alt="menu icon" />
        </div>
      </div>
  )
}

export default Navbar
