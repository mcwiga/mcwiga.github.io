import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'

import waves from '../assets/waves.mp4'
import Render from './Render'

function Video() {
  return (
    <div className='hero'><Render/>
        <div className='content'>
            <h1>Michael anthony McGloin</h1>
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