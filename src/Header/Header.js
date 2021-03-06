import React from 'react';
import { Link } from 'react-router-dom';
import { ContactGroup } from '../ContactGroup/ContactGroup';

import './Header.css';

export const Header = () => {
return (
    <div className='header'>
        <h2><Link to='/'>Matt Williamson</Link></h2>
        <div className='link-container'>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contact</Link>
            <ContactGroup />
        </div>
    </div>
    );
};