import React from 'react'

import './HeroStyles.css'
import video from '../assest/herovid.mp4'
import mobile from '../assest/mobile.mp4' 

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={video} type='video/mp4' />
            </video>
            
            <div className='img'>
                 <video src={mobile} autoPlay loop muted />
            </div>
           
        </div>
        
        
    )
    
}

export default Hero
