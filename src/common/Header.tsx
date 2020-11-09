import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import logo from "./logo-bug.svg";
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';
import { Container } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <header>
            <Container>
            <Navbar expand="sm" sticky="top">
                <Navbar.Brand>
                <div className="logo">
                    <img src={logo} /><span>Registry</span>
                </div>
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
