import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav} from 'react-bootstrap';
//Components
import '../styles/Nav.css'


const Navigation = () => {
    return (

        <Navbar bg='transparent' expand='lg'>
            <NavbarBrand><Link className='logo' to={'/portfolio'}>Nikki Wu</Link></NavbarBrand>
            <Navbar.Toggle className='navbar-dark border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
                <Nav className='nav-links'>
                    <Link className='nav-link' to={'/about'}>"About"</Link>
                    <Link className='nav-link' to={'/project'}>"Projects"</Link>
                    <Link className='nav-link' to={'/contact'}>"Contact"</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )


};


export default Navigation;

