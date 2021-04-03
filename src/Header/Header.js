import React from 'react';
import { Link } from 'react-router-dom';
import { SiLinkedin, SiGithub } from 'react-icons/si';

import './Header.css';

export const Header = () => {
return (
    <div className='header'>
        <h2><Link to='/'>Matt Williamson</Link></h2>
        <div className='link-container'>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contact</Link>
            <a href='https://www.linkedin.com/in/matt-b-williamson/'><SiLinkedin size={'1.5rem'} /></a>
            <a href='https://github.com/mathewbwilliamson'><SiGithub size={'1.5rem'} /></a>
        </div>
    </div>
    );
};