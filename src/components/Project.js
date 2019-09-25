import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Image from '../assets/images/home-page-image.jpg'
import '../styles/Project.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


const Project = () => {
    return (

        <React.Fragment>
            <Container className='justify-content-md-between'>
                <Row>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                    <Col className='project' md={true}>
                        <div>
                            <img className='project-image' src={Image} alt=""/>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faGithub}/>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Project;

