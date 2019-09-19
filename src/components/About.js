import React from 'react';
import Resume from '../assets/Nikki Wu Resume.pdf';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faHtml5, faCss3, faPhp, faNodeJs, faJs, faWordpress} from '@fortawesome/free-brands-svg-icons';

import '../styles/About.css';

const divStyle = {};


const About = (props) => {
    return (
        <React.Fragment>
            <div className='about-container'>
                <div className='aboutme-header'>"ABOUT ME"</div>
                <div className='aboutme-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci animi
                        at
                        <br/>
                        <br/>
                        consequatur cupiditate dolor eaque earum eligendi eum eveniet expedita id laborum magnam
                        maxime
                        <br/>
                        <br/>
                        nemo nisi numquam officiis perspiciatis quis quo quod ratione repellendus, similique soluta
                        veritatis voluptas?</p>
                    <div style={divStyle}>
                        <a className='aboutme-contact' href={Resume} target='_blank'
                           rel='noopener noreferrer'>"RESUME"</a>
                        <a className='aboutme-contact' href="mailto:nikkiwu9@gmail.com" rel='noopener noreferrer'
                           target="_blank">"EMAIL"</a>
                    </div>
                    <div className='aboutme-icon'>
                        <FontAwesomeIcon icon={faReact}/>
                        <FontAwesomeIcon icon={faHtml5}/>
                        <FontAwesomeIcon icon={faCss3}/>
                        <FontAwesomeIcon icon={faPhp}/>
                        <FontAwesomeIcon icon={faJs}/>
                        <FontAwesomeIcon icon={faNodeJs}/>
                        <FontAwesomeIcon icon={faWordpress}/>
                    </div>
                </div>
                <div className='aboutme-sites'>
                    <h1>"DAILY SITES"</h1>
                    <div>
                        <a href="https://www.behance.net/" target='_blank' rel="noopener noreferrer">Behance</a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptate.
                        </p>
                    </div>
                    <div>
                        <a href="https://bleacherreport.com/nba" target='_blank' rel="noopener noreferrer">Bleacher
                            Report</a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptate.
                        </p>
                    </div>
                    <div>
                        <a href="https://www.bonappetit.com/" target='_blank' rel="noopener noreferrer">Bon Appétit</a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptate.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
};

export default About;
