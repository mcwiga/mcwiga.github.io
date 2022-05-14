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
        <h1>MICHAEL</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>Projects</Link>
            </li>
            <li>
                <Link to='/'>About Me</Link>
            </li>
            <li>
                <Link to='/'>Tests</Link>
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