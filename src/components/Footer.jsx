import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col solutions'>
                    <h6>Solutions</h6>
                    <ul>
                        <li><Link to='/' className='link'>Signe astrologique</Link></li>
                        <li><Link to='/' className='link'>Magie rouge</Link></li>
                        <li><Link to='/' className='link'>Magie noire</Link></li>
                        <li><Link to='/' className='link'>Magie blanche</Link></li>
                        <li><Link to='/' className='link'>Tarot divinatoire</Link></li>
                        <li><Link to='/' className='link'>Arts divinatoires</Link></li>
                        <li><Link to='/' className='link'>Rituels de protection</Link></li>
                    </ul>
                </div>
                <div className='col support'>
                    <h6>Trame sentimentale</h6>
                    <ul>
                        <li><Link to='/' className='link'>Astrologie et relations</Link></li>
                        <li><Link to='/' className='link'>Télépathie amoureuse</Link></li>
                        <li><Link to='/' className='link'>Numérologie et compatibilité</Link></li>
                        <li><Link to='/' className='link'>Rituel pour faire revenir l'être aimé</Link></li>
                        <li><Link to='/' className='link'>Amour éternel et destiné</Link></li>
                        <li><Link to='/' className='link'>Âme sœur et connexion spirituelle</Link></li>
                    </ul>
                </div>
                <div className='col company'>
                    <h6>Company</h6>
                    <ul>
                        <li><Link to='/' className='link'>À propos de nous</Link></li>
                        <li><Link to='/' className='link'>Blog sur la spiritualité</Link></li>
                        <li><Link to='/' className='link'>Emplois et carrières</Link></li>
                        <li><Link to='/' className='link'>Presse et médias</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>Legal</h6>
                    <ul>
                        <li><Link to='/' className='link'>Réclamations et avis</Link></li>
                        <li><Link to='/' className='link'>Politique de confidentialité</Link></li>
                        <li><Link to='/' className='link'>Cookies et technologies</Link></li>
                        <li><Link to='/' className='link'>Conditions d'utilisation</Link></li>
                    </ul>
                </div>
                <div className='col-subscribe'>
                    <h6>Abonnez-vous à notre newsletter</h6>
                    <p>Les dernières nouvelles, articles sur l'astrologie et la spiritualité, envoyés dans votre boîte de réception chaque semaine.</p>
                    <div className='subscribe'>
                        <a href='#clients'>
                            <Link to='/contact' className='nav-link'>
                                   <button>Abonnez-vous</button>
                                </Link>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p>&copy; Workflow, Inc. Tous droits réservés.</p>
                    </div>
                    <div>
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaInstagram size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaGithub size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
