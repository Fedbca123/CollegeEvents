import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
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
        <div className="Register">
            <form>
                <input type="radio" name="userLevel" value="student" id="student"></input>
                <label className="label">Student</label>
                <input type="radio" name="userLevel" value="admin" id="admin"></input>
                <label className="label">University Admin</label>
                <br/><br/>
                <input className="credInput" value={userId} type="text" onChange ={handleUserId} placeholder="User ID"/>
                <br/><br/>
                <input className="credInput" value={password} type="password" onChange={handlePassword} placeholder="Password"/>
                <br/><br/>
                <input className="credInput" value={password} type="password" onChange={handlePassword} placeholder=" Confirm Password"/>
                <br/><br/>
                <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
                <br/><br/>
                <Link to="/">
                    <button className="btn" type="button">Login</button>
                </Link>
            </form>
        </div>
    </body>
    )
};
export default RegisterScreen;