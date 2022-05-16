import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'

import waves from '../assets/waves.mp4'
import Render from './Render'

function Video() {
  return (
    <div className='hero'><Render/>
        <div className='content'>
            <h1>Michael McGloin.</h1>
            <p>Mathematics Graduate</p>
            <h2>(Site in Progress)</h2>
            <div>
                <a href='https://docs.google.com/document/d/1lAbzRmNcgCobhZAC-P8-U3T74pJp2FLhW80rJukGMGU/edit?usp=sharing' className='btn' l>
                    My CV
                </a>
                <a href='https://github.com/mcwiga' className='btn btn-light'>
                    Projects
                </a>
            </div>
        </div>
    </div>
  )
}

export default Video