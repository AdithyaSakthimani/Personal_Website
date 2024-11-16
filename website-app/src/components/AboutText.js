import React, { useState, useEffect } from 'react';
import CustomTypewriter from './CustomTypewriter';
import { Cursor } from 'react-simple-typewriter';
const AboutText = ({mode}) => {
  const text =CustomTypewriter(
    [ " ADITHYA ",
      " ENGINEER", 
       " CODER",
       " CHESS PLAYER ",
    ],200
  )
  return (
    <div className='type-txt'>
      <h1>
        I'M  
        <span>
        {text}<Cursor/>
        </span>
      </h1>
    </div>
  );
};

export default AboutText;
