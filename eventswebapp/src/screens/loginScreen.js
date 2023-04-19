import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

//export default function LoginScreen() {
    
const LoginScreen = () => {
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
    
    let authLevel = '';
    let univID = '';
    let loginPassword = '';
    let userID = '';

    function buildPath(route)
    {       
        return 'http://localhost:80/' + route;
    }

    const login = async event => {
        let obj = {user_id: userID.value, pass: loginPassword.value, univ_id: 1, authlevel: authLevel.value};
        let js = JSON.stringify(obj);
        const response = await fetch(buildPath('login'), {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
        var res = JSON.parse(await response.text());
        if (res == "Login successful") {
            window.location.href = "/events";
        }
    }

    return (
        <body>
        <h1>Event Manager</h1>
        <p>Please log-in with your UserID and password</p>
        <div className="Login">
            <form>
                <input className="credInput" placeholder="User ID" type="text" id="userID" onChange ={handleUserId} />
                <br/><br/>
                <input className="credInput" placeholder="Password" type="password" id="loginPassword" onChange={handlePassword}/>
                <br/><br/>
                <Link to="/events">
                    <button className="btn" type="button" onClick={login}>Submit</button>
                </Link>
                <br/><br/>
                <Link to="/register">
                    <button className="btn" type='button'>Register</button>
                </Link>
            </form>
        </div>
        </body>
    );
};
export default LoginScreen;
    
//}