import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'

import waves from '../assets/waves.mp4'

function Video() {
  return (
    <div className='hero'><video autoPlay loop muted id='video'>
        <source src={waves} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>Michael McGloin</h1>
            <p>Mathematics Graduate</p>
            <div>
                <Link to='/projects' className='btn'>
                    Projects
                </Link>
                <Link to='/about-me' className='btn btn-light'>
                    About Me
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Video