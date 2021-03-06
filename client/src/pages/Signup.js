//need name email pw
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import { useContext } from 'react';
import SignUpForm from '../components/SignUpForm';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';

function SignUp(props){
    const {loggedIn} = useContext(UserContext);

    return (
        <section className="container">
            {loggedIn && <Redirect to="/" />}
           <header>Welcome to Vocabulary Bee</header>
            <h2 className="section-heading">Sign Up</h2>
            <h3>If you have an account please login above</h3>
            <h3>The aim of this application is to give the basics of any language (future development), with simple words or phrases.
            Here is a little taste of French!</h3>
            <SignUpForm className="full-page-signup" />
        </section>
    )
}




export default SignUp;