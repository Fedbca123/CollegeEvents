import React, { useState } from 'react'
import '../styles/login.css'

export default function LoginScreen() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId === '' || password === '') {
            setError(true);
        }
        else {
            setSubmitted(true);
            setError(false);
        }
    }

    return (
        <body>
        <h1>Event Manager</h1>
        <p>Please log-in with your UserID and password</p>
        <div class="Login">
            <form>
                <input className="input" placeholder="User ID" type="text" onChange ={handleUserId} />
                <br/><br/>
                <input className="input" placeholder="Password" type="password" onChange={handlePassword}/>
                <br/><br/>
                <input type="button" value="Login" onClick={login()}></input>
               <input type="button" value="Register" onClick={goToRegister()}></input>
            </form>
        </div>
    </body>
    );
}