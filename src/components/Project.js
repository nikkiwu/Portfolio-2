import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/Project.css'


const Project = (props) => {
    return (

        <React.Fragment>
            <Container className='justify-content-md-between'>
                <Row>
                    <Col className='columns' md={true}>sm=8</Col>
                    <Col className='columns' md={true}>sm=4</Col>
                </Row>
                <Row>
                    <Col className='columns' md={true}>sm=true</Col>
                    <Col className='columns' md={true}>sm=true</Col>
                </Row>
                <Row>
                    <Col className='columns' md={true}>sm=true</Col>
                    <Col className='columns' md={true}>sm=true</Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Project;

