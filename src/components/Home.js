import React from 'react';
import '../styles/Home.css';
import {Link} from 'react-router-dom';

import Project from './Project';

const Home = (props) => {
    return (
        <div className='home-container'>
            <div className='home-header'>{props.title}</div>
            <h1 className='home-text'>{props.nameText}</h1>
            <h1 className='home-text'>{props.jobText}</h1>
            <h1 className='home-text'>{props.locationText}</h1>
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
