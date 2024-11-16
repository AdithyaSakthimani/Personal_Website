import React from 'react'
import './ProjectStyle.css'
function Projects() {
  return (
    <div className='project-showcase'>
      <h1>PROJECTS</h1>
      <div className='my-projects'>
        <div className="ai-skin">
            <h1>Derma Doc</h1>
            <p>Made an AI skin disease detection website </p>
        </div>
        <div className="sudoku-web">
            <h1>Sudoku Website</h1>
            <p>Made a sudoku website using recursive backtracking </p>
        </div>
        <div className="nano">
            <h1>Design of NanoMeterial</h1>
            <p>Designed the nanometerial for optimal discharge rate for an supercapacitor</p>
        </div>
        <div className="irigation">
            <h1>Irrigation System</h1>
            <p>Made an automatic irrigation system using arduino which plots and works on realtime data  </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
