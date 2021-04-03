import React from 'react';
import { ContactGroup } from '../ContactGroup/ContactGroup';

export const ContactPage = () => {
return (
    <div className='contact-page-container'>
        <h1>Contact Page 📫</h1>
        <h2>Get in touch.</h2>
        <p>Want to work with me, be a guest on a podcast, or speak at your event? Send me a message via LinkedIn or email! I look forward to hearing from you.</p>
        <ContactGroup includeEmail={true} />
    </div>
);
};