import React, { useState } from 'react'
import { Route } from 'react-router-dom';

export default function RegisterScreen() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLevel = (e) => {
        setLevel(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId === '' || password === '' || level === '') {
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
            <p>Please identify your user level and register with a UserID and password</p>
            <div class="Register">
                <form>
                    <input type="radio" name="userLevel" value="student" id="student"></input>
                    <label className="label">Student</label>
                    <input type="radio" name="userLevel" value="admin" id="admin"></input>
                    <label className="label">University Admin</label>
                    <br/><br/>
                    <label className="label">UserID: </label>
                    <input className="input" value={userId} type="text" onChange ={handleUserId} />
                    <br/><br/>
                    <label className="label">Password: </label>
                    <input className="input" value={password} type="password" onChange={handlePassword}/>
                    <br/><br/>
                    <button className="btn1" type="submit" onClick={handleSubmit}>Register</button>
                    <button className="btn2">Login</button>
                </form>
            </div>
        </body>
    )
}