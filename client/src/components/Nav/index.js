
import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import './style.scss';
import { Navbar, Nav } from 'react-bootstrap';
import bee from './bumblebee.jpeg';

import ContactUs from '../../pages/ContactUs';

function MainNav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const { email, loggedIn } = useContext(UserContext);

  return (
    <header className="main-header">
      <Navbar sticky="top" expand="sm">
        <Navbar.Brand href="/">
        <img
        src={bee}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />Vocabulary-Bee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-area">
          <Nav >
            {(!loggedIn) ? <Nav.Link href="/login" >Login</Nav.Link> : <Nav.Link href="/logout" >Logout</Nav.Link>}
            <Nav.Link href="/card">Flashcard</Nav.Link>
            <Nav.Link href="/translate">Translate</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us{ContactUs}</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>



    
  );
}

export default MainNav;