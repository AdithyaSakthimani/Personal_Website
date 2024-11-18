import React, { useContext } from 'react';
import NoteContext from './components/NoteContext';
import RenderMenu from './components/RenderMenu';
import myPDF from './components/images/My Resume_final_final.pdf'; 
import Navbar from './Navbar';
import './App.css';

function Resume() {
    const { isMenuOpen, setIsMenuOpen, toastMessage, setToastMessage, isToastVisible, setIsToastVisible } = useContext(NoteContext);
    
    return (
        <>
        <Navbar/>
        {isMenuOpen && RenderMenu()}
        <div className='title-res'>
            <h1 className='hed-res'> MY RESUME</h1>
            <div className='resume-area'>
                <iframe
                    src={myPDF}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Resume PDF"
                ></iframe>
            </div>
        </div>
        </>
    );
}

export default Resume;
