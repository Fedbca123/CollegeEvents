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

    let authLevel = '';
    let univID = '';
    let loginPassword = '';
    let userID = '';

    function buildPath(route)
    {       
        return 'http://localhost:3000/' + route;
    }

    function registerUser() {
        let obj = {user_id: userId, pass: password, univ_id: 1, authlevel: level};
        let js = JSON.stringify(obj);

        fetch(buildPath('register'), {method: 'POST', body: js, headers: {'Content-Type': 'application/json'}})
        .then(res => {
            return res.json();
        })
        .catch(error => console.log(error));
    }

    return (
        <body> 
        <h1>Event Manager</h1>
        <p>Please identify your user level and register with a UserID and password</p>
        <div className="Register">
            <form>
                <input type="radio" name="userLevel" value={level}id="student"></input>
                <label className="label">Student</label>
                <input type="radio" name="userLevel" value={level} id="admin"></input>
                <label className="label">University Admin</label>
                <br/><br/>
                <input className="credInput" value={userId} type="text" onChange ={handleUserId} placeholder="User ID"/>
                <br/><br/>
                <input className="credInput" value={password} type="password" onChange={handlePassword} placeholder="Password"/>
                <br/><br/>
                <button className="btn" type="submit" onClick={registerUser()}>Submit</button>
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