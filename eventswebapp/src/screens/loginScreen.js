import React, { useState } from 'react'
import '../App.css'

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
        <body style={{
            textAlign: 'center', 
            backgroundColor: '#DCCCBB',
            height: '100vh',
            minHeight:'100vh',
        }}>
            <h1>Event Manager</h1>
            <p>Please log-in with your UserID and password</p>
            <div class="Login">
                <form>
                    <label className="label">UserID: </label>
                    <input className="input" value={userId} type="text" onChange ={handleUserId} />
                    <br/>
                    <label className='label'>Password: </label>
                    <input className="input" value={password} type="text" onChange={handlePassword}/>
                    <br/>
                    <br/>
                    <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </body>
    );
}