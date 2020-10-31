//need name email pw
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (event)=>{

        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const submitHandler = (event)=>{
event.preventDefault();
        console.log("Form Submitted");

        const userData = {
            email,
            passowrd,
            name
        }
        
        // Axios.post("/api/signup", userData)
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