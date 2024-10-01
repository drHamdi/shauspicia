import React from 'react'
import { Link } from 'react-router-dom'

import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2><span>Consultations Personnalisées avec madame SILVA HELENA:</span>Recevez des lectures précises et adaptées à votre parcours de vie </h2>
                        <p>vous souhaitiez simplement explorer les énergies célestes qui influencent votre quotidien.</p>
                    </div>

                </div>
                <div className='btn'>
                    <a href='#clients'>
                    <Link to='/contact' className='nav-link'>
                    <button>Consultation gratuit</button>
                    </Link>    
                    </a>

                </div>
                <div className='bottom-content'>
                    <div className='card'>
                        <p><span>Votre avenir entre vos mains</span></p>
                        <h3>Plateforme Complète de Voyance</h3>
                        <p>Explorez notre plateforme tout-en-un pour découvrir les secrets de votre avenir. Que ce soit pour la **magie rouge** pour attirer l'amour, la **magie noire** pour comprendre les obstacles, ou la **magie blanche** pour apporter la paix, nous avons les outils nécessaires pour vous guider.</p>
                    </div>
                    <div className='card'>
                        <div>
                            <p>**Améliorez votre situation financière et professionnelle** avec des consultations personnalisées. Nos experts en **astrologie** et **numérologie** vous aideront à comprendre les opportunités cachées et à optimiser vos choix de carrière.</p>
                        </div>
                        <div>
                            <p>Développez votre intuition avec nos services de **télépathie**. Recevez des conseils sur la meilleure façon de **faire revenir l'être aimé** ou de trouver votre **âme sœur** grâce à des lectures approfondies.</p>
                        </div>
                        <div>
                            <p>Nos spécialistes en **tarot** vous offrent des insights précieux pour surmonter la **jalousie** et d'autres émotions difficiles. Obtenez des réponses claires et guidées pour chaque aspect de votre vie.</p>
                        </div>
                        <div>
                            <p>Recevez des conseils sur la manière de protéger et d'équilibrer votre énergie avec l'aide de votre **ange gardien**. Nos consultations vous guideront pour surmonter les **mal faits** et améliorer votre bien-être général.</p>
                        </div>
                        <div>
                            <p>Notre équipe de **voyance** et de **mediums** expérimentés est prête à vous aider à clarifier les aspects complexes de votre vie. Découvrez des solutions et des conseils pour chaque situation, et avancez avec confiance vers un avenir meilleur.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Découvrez les secrets de l'**astrologie** pour guider vos choix et améliorer votre avenir. Nos experts vous aideront à comprendre les influences célestes qui impactent votre vie.</p>
                        </div>
                        <div>
                            <p>Utilisez la **numérologie** pour obtenir des insights sur vos chiffres personnels et leurs impacts sur vos décisions. Nos consultations vous offriront une compréhension approfondie de vos cycles de vie.</p>
                        </div>
                        <div>
                            <p>Le **tarot** est un outil puissant pour révéler les vérités cachées et les possibilités futures. Profitez de nos lectures pour éclairer votre chemin et apporter des changements positifs.</p>
                        </div>
                        <div>
                            <p>Recevez des conseils pour surmonter les **jalousies** et d'autres obstacles émotionnels. Nos consultations sont conçues pour vous apporter la clarté et la paix intérieure dont vous avez besoin.</p>
                        </div>
                        <div>
                            <p>Connectez-vous avec votre **ange gardien** pour obtenir des guidances spirituelles. Nous vous aiderons à naviguer à travers les défis et à trouver l'harmonie dans tous les aspects de votre vie.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Pricing
