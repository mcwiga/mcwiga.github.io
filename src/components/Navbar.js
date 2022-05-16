import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'


import './NavbarStyles.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
    <div className='header'>
        <Link to='/'>
        <h1>mcwiga</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
            <a href='https://docs.google.com/document/d/1lAbzRmNcgCobhZAC-P8-U3T74pJp2FLhW80rJukGMGU/edit?usp=sharing' l>
                    My CV
                </a>
            </li>
            <li>
                <a href='https://github.com/mcwiga'>
                    Projects
                </a>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={28} style={{color:'#fff'}}/>) : 
            <FaBars size={28} style={{color:'#fff'}}/>}

        </div>
    </div>
)
}

export default Navbar