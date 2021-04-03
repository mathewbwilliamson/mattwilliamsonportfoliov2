import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import './ContactGroup.css';

export const ContactGroup = ({ includeEmail }) => {
return (
    <div className='contact-group'>
        {!!includeEmail && <a href='mailto:mathewbwilliamson@gmail.com'><HiOutlineMail size={'1.5rem'} /></a>}
        <a href='https://www.linkedin.com/in/matt-b-williamson/'><SiLinkedin size={'1.5rem'} /></a>
        <a href='https://github.com/mathewbwilliamson'><SiGithub size={'1.5rem'} /></a>
    </div>
    );
};