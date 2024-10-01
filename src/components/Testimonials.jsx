import React from 'react'
import {FaDatabase} from 'react-icons/fa'
import './TestimonialsStyles.css'


const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    
                    <div className='content'>
                        <i><FaDatabase/> Spirituelle</i>
                        
                        <p className='body'>
                        En psychologie, le terme peut également englober une approche de bien-être personnel et d'harmonie intérieure.
                        </p>
                        <div className='name'>
                            <p>Connexion à l'âme</p>
                            <p>Guidance divine, Évolution personnelle</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
