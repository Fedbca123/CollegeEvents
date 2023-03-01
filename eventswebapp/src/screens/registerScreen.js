import React, { useState } from 'react'
export default function RegisterScreen() {
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
            <p>Please register with a UserID and password</p>
            <div class="Register">
                <form>
                    <label className="label">UserID: </label>
                    <input className="input" value={userId} type="text" onChange ={handleUserId} />
                    <br/><br/>
                    <label className='label'>Password: </label>
                    <input className="input" value={password} type="text" onChange={handlePassword}/>
                    <br/><br/>
                    <button className="btn1" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </body>
    )
}