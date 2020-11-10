import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import './style.scss';
import {Nav, Navbar} from 'react-bootstrap';

function MainNav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const {email, loggedIn} = useContext(UserContext);

  return (
    <header className="main-header">
<Navbar sticky="top" expand="sm">
  <Navbar.Brand href="/">Vocabulary-Bee</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="nav-area">
    <Nav >
    {(!loggedIn) ? <Nav.Link href="/login" >Login</Nav.Link> : <Nav.Link href="/logout" >Logout</Nav.Link> }
      <Nav.Link href="/card">Flashcard</Nav.Link>
      <Nav.Link href="/translate">Translate</Nav.Link>
      <Nav.Link href="/quiz">Quiz</Nav.Link>
      <Nav.Link href="/card">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>



    // <nav className="navbar">
    //   <a className="navbar-brand" href="/">
    //    Vocabulary-Bee
    //   </a>
    //   {/* { (() => {
    //     if(loggedIn){
    //       return <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={ () => setLoginExpanded(false)}>Logout</Link> </p>;
    //     }
    //     else{
    //       if(!loginExpanded){
    //         return <button onClick={ () => setLoginExpanded(true) }>Login</button>;
    //       }
    //       else{
    //         return (
    //           <Fragment>
    //             <LoginForm className="top-menu-login"/>
    //             <button onClick={ () => setLoginExpanded(false) }>X</button>
    //           </Fragment>
    //         )
    //       } 
    //     }
    //   })()} */}
    //   {(!loggedIn) ? <Link to="/login" >Login</Link> : <Link to="/logout" >Logout</Link> }
    //   <Link to="/card" >Flashcard</Link>
    //   <Link to="/translate" >Translate</Link>
    //   <Link to="/quiz" >Quiz</Link>
    //   <Link to="/card" >About Us</Link>
    // </nav>
  );
}

export default MainNav;
