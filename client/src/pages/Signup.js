//need name email pw
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
<<<<<<< HEAD
    const emailHandler = (event)=>{
=======
    const emailHandler = (event) => {
>>>>>>> 203da68c7586da84c865a17ac130c1792d93ff1e

        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Form Submitted");

        const userData = {
            email,
            password,
            name
        }
        API.signUp(userData).then(results=>{
            console.log(results);
        })
        .catch(err => {
            console.log(err);
        })

    }


    return (<div>
        <h1>Signup page</h1>
        <form id="test1" onSubmit={submitHandler}>
            <input
                className="input"
                type="email"
                value={email}
                onChange={emailHandler}
                placeholder="input email"
            />
            <input
                type="submit"

            />
        </form>
    </div>)
}


export default Signup;