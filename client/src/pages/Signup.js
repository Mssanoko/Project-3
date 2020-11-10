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
        <div className="container">
            {loggedIn && <Redirect to="/" />}
           <h1>WELCOME TO VOCABULARY BEE</h1>
            <h1>SignUp</h1>
            <h3>If you have an account please login above</h3>
            <SignUpForm className="full-page-signup" />
        </div>
    )
}

// function Signup() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const History = useHistory();
    
//     const emailHandler = (event) => {

//         console.log(event.target.value);
//         setEmail(event.target.value)
        
//     }
//     const nameHandler = (event) => {

//         console.log(event.target.value);
//         setName(event.target.value)
        
//     }
//     const passwordHandler = (event) => {

//         console.log(event.target.value);
//         setPassword(event.target.value)
        
//     }
//     const submitHandler = (event) => {
//         event.preventDefault();
//         console.log("Form Submitted");

//         const userData = {
//             email,
//             password,
//             name
//         }
//         API.signUp(userData).then(results=>{
//             console.log("signup successful");
//             History.push("/login");
//         })
//         .catch(err => {
//             console.log(err);
//         })

//     }


//     return (<div>
//         <h2>WELCOME TO VOCABULARY-BEE</h2>
//         <h1>Signup page</h1>
//         <h3>If you already have an account please login</h3>
//         <Link to="/login" >LOGIN</Link>
//         <form id="test1" onSubmit={submitHandler}>
//        Name
//         <input
             
//               className="input"
//                 type="name"
//                 value={name}
//                 onChange={nameHandler}
//                 placeholder="First, Last"
//             />
//             <br />
//             Email
//             <input
//                 className="input"
//                 type="email"
//                 value={email}
//                 onChange={emailHandler}
//                 placeholder="input email"
//             />
//             <input
//                 className="input"
//                 type="password"
//                 value={password}
//                 onChange={passwordHandler}
//                 placeholder="password"
//             />
//             <input
//                 type="submit"

//             />
//         </form>
//     </div>)
// }


export default SignUp;