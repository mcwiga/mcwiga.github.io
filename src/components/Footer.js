import React from 'react'
import './FooterStyles.css'
import {FaSpotify ,FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation,FaTwitter} from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4><FaSearchLocation size={20} style={{color: '#fffff', marginRight: '2rem'}}/></h4>
                    <div>
                        <p>Galway, Ireland</p>
                    </div>
                </div>

                <div className='phone'>
                    <p><FaPhone size={20} style={{color: '#fffff', marginRight: '2rem'}}/>(+353) 83 357 9993</p>
                </div>

                <div className='email'>
                    <p><FaMailBulk size={20} style={{color: '#fffff', marginRight: '2rem'}}/>m.mcgloin2@nuigalway.ie</p>
                </div>

            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>I am a mathematical science graduate with an 
                    interest in solving problems. I also drum and 
                    play guitar!</p>
                
                <div className='social'>
                <h4><FaSpotify size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                <h4> <FaTwitter size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                <h4> <FaLinkedin size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer