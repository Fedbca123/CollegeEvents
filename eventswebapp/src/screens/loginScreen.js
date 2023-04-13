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
    return (
        <body>
        <h1>Event Manager</h1>
        <p>Please log-in with your UserID and password</p>
        <div className="Login">
            <form>
                <input className="credInput" placeholder="User ID" type="text" onChange ={handleUserId} />
                <br/><br/>
                <input className="credInput" placeholder="Password" type="password" onChange={handlePassword}/>
                <br/><br/>
                <Link to="/events">
                    <button className="btn" type="button">Submit</button>
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