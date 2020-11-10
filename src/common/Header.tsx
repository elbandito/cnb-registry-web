import React from 'react';
import Form from 'react-bootstrap/Form';
import logo from "./logo-bug.svg";
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';
import { Container } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <header className="Header">
            <Container>
                <Navbar expand="sm" sticky="top">
                    <Navbar.Brand>
                        <img src={logo} alt="Buildpacks" /><span>Registry</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form inline className="ml-auto">
                            <Form.Control type="text" placeholder="Search" />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
