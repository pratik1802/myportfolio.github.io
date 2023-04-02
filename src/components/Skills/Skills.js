import React from 'react'
import './Skill.css'
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
  return (
    <>
    <h3 className='text-center my-5' style={{color:"red",fontSize:"35px"}}>WEB DEVELOPMENT SKILLS</h3>
    <label htmlFor="html" className='my-3'>Html</label>
    <ProgressBar variant="success" now={95} />
    <label htmlFor="html" className='my-3'>CSS</label>

      <ProgressBar variant="info" now={85} />
      <label htmlFor="html" className='my-3'>Javascript</label>

      <ProgressBar variant="warning" now={65} />
      <label htmlFor="html" className='my-3'>React</label>

      <ProgressBar variant="danger" now={80} />
      <label htmlFor="html" className='my-3'>Expressjs</label>
      <ProgressBar variant="dark" now={85} />
      <label htmlFor="html" className='my-3'>MongoDB</label>
      <ProgressBar variant="secondary" now={95} />


    </>
  )
}

export default Skills