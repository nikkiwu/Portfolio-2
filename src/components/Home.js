import React from 'react';
import '../styles/Home.css';
import {Link} from 'react-router-dom';

import Project from './Project';

const Home = (props) => {
    return (
        <div className='home-container'>
            <h1 className='home-header'>{props.title}</h1>
            <h1 className='home-text'>{props.nameText}</h1>
            <h1 className='home-text'>{props.jobText}</h1>
            <h1 className='home-text'>{props.locationText}</h1>
            <div className='desktop-text-container'>
                <h1>
                    nikki wu -
                    <br/>
                    I am a <span className='title-span'>Front-End/React Native Developer</span> with an eye for Minimalist and Intuitive <span className='title-span'>UX/UI Design</span>.
                    <br/>
                    Based in Vancouver but looking for opportunities in Toronto.
                </h1>

            </div>
            <hr/>
            <div className='about-container'>
                <div className='aboutme-header'><Link to={'/about'}>{props.aboutTitle}</Link></div>
                <button><Link to={'/contact'}>{props.buttonText}</Link></button>
            </div>
            <div className='project-container'>
                <div className='project-header'><Link to={'/project'}>{props.projectTitle}</Link></div>
                <hr/>
                <Project/>
            </div>
        </div>

    );
};

export default Home;
