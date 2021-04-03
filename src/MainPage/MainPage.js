import React from 'react';
import './MainPage.css';

export const MainPage = () => {
return (
    <div className='main-page-container'>
        <h1>Hi, I'm Matt 👋</h1>
        <p>I'm currently <span className="word-highlight">exploring new opportunities</span> and side projects.</p>
        <p>I've been a front-end developer, a mobile front-end developer, and a backend developer.</p>
        <p>In the past, I spent my days building Progressive Web Apps for large companies like Pandora Jewellery and Tommy Bahama, building banking applications for Bank OZK, and quite a few side projects.</p>
        <p>Throughout all, learning has been my passion! Whether its <span className="word-highlight">Typescript</span>, <span className="word-highlight">React</span>, <span className="word-highlight">Node</span>, or <span className="word-highlight">C#</span>, I learn in order to build cool stuff.</p>
    </div>
);
};