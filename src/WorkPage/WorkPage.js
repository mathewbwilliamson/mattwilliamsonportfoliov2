import React from 'react';

export const WorkPage = () => {
return (
    <div className='work-page-container'>
        <h1>Work History 👨‍💻</h1>
        <h3>Software Engineer @ Bank OZK <span className='smaller'>(Sep 2019 to Current)</span></h3>
        <p><span className="word-highlight">Relevant Tech:</span> Typescript, React, Node, Express, Koa, SQL, C#, .Net Core, HTML/CSS</p>
        <p>
            <ul>
                <li>Worked on a team of four people, that later grew into eight people, supporting <span className="word-highlight">4 products for Bank OZK</span>, including building two entirely new products.</li>
                <li>Two of the four products support the bank's large commercial real estate lending unit. The commercial loan construction deals that flow through these two products make up <span className="word-highlight">65% of the bank's total revenue</span>. One product is a complete asset management solution for these loans, and the other is a checklist application to ensure every loan closes with the documents that it requires.</li>
                <li>Helped lead the effort to <span className="word-highlight">reduce production incidents 50%</span> in one year.</li>
                <li>Part of a team of four that made a new Approval System product (I did all the initial setup work). This product has every Bank OZK real estate loan coming through it, and the C-Suite uses it weekly to approve all large +20MM$ loans through the bank. We built this in a <span className="word-highlight">speedy 4 months</span> with React/OvermindJS on the front end, with a C# .Net backend from start to finish.</li>
                <li>Took over another bank project and built a new <span className="word-highlight">proof of concept in a record 1 week</span> to enable my team lead to make a case for our team to take over this new project.</li>
                <li>Lately, I have been tasked to build a new Commercial Lending platform with a team of four others. <span className="word-highlight">I mentor the other developers</span>, build the infrastructure of the React project, and plan/build new features.</li>
            </ul>
        </p>

        <h3>Lead Developer @ Eyes Open Studio <span className='smaller'>(Jun 2019 to Sep 2019)</span></h3>
        <p><span className="word-highlight">Relevant Tech:</span> GatsbyJS, GraphQL, HTML/CSS</p>
        <p>
            <ul>
                <li>Worked on a team of four people to develop <span className="word-highlight">America's Funniest Videos</span> 30th Anniversary Website.</li>
            </ul>
        </p>

        <h3>Website Developer @ 64 Labs <span className='smaller'>(Dec 2018 to Sep 2019)</span></h3>
        <p><span className="word-highlight">Relevant Tech:</span> React/Redux, Node, jQuery, HTML/CSS</p>
        <p>
            <ul>
                <li><span className="word-highlight">Lead Developer</span> for the September 2019 Pandora Refresh, a rebranding of the entire Pandora Jewelry UK and US PWA Application.</li>
                <li>In a 90-day turnaround, collaborated with the team to build the <span className="word-highlight">Progressive Web App (PWA) for Pandora Jewelry UK</span> along with the later phases of the Pandora US PWA application under budget and on-time.</li>
                <li><span className="word-highlight">Mentored a team of junior developers</span> and helped delegate responsibilities while working closely with the Project Team to ensure quality and consistency of deliverables to clients.</li>
                <li>In a 30-day turnaround, collaborated with the team to build the PWA for Pandora Jewelry DE (Germany).</li>
                <li>Built and refactored various components (carousels, sliders, swipers, etc) for PWA applications utilizing React, Redux, and jQuery that enabled the mobile versions of those websites to be more <span className="word-highlight">UX-friendly and more performant.</span></li>
            </ul>
        </p>

        <h3>Full Stack Apprentice @ Thinkful <span className='smaller'>(Aug 2018 to Dec 2018)</span></h3>
        <p><span className="word-highlight">Relevant Tech:</span> React/Redux, Node, SQL, MongoDB, jQuery, HTML/CSS</p>
        <p>
            <ul>
                <li>Built 3 projects along with a <a href="https://mattwilliamsonportfolio.netlify.app/">Personal Website</a>.</li>
                <li>Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.</li>
            </ul>
        </p>
    </div>
    );
};