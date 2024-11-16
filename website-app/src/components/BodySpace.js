import React from 'react'
import myImg from './images/WhatsApp Image 2024-11-16 at 17.56.35.jpeg'
import './Body.css'
import AboutText from './AboutText'
function BodySpace() {
  return (
    <div>
    <div className='text-img'>
    <div className='my-img'>
        <img className='myimage' src = {myImg} />
      </div>
      <div className="main-text">
       <span className='main-hed'><h1> HELLO THERE!  </h1></span>
       <AboutText/>
      </div>
    </div>
    </div>
  )
}

export default BodySpace
