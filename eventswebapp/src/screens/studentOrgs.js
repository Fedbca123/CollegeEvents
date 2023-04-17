import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function getRSOs() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            const markup = `<p className="event">${user.name}<button>&#9734;</button></p>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));
}

export default function StudentOrgs () {
    return (
        <body>
            <div className="topnav">
                <Link to="/events" className="navbarButt">All Events</Link>
                <Link to="/orgs" className="navbarButt">All RSOs</Link>
                <Link to="/" className="logoutButt">Log out</Link>
            </div>
            <div className="RSOlist">
                <h1>Registered Student Organizations</h1>
                <Link to="/newRSO">
                    <button className="addNewButt"type='button'>+</button><br/><br/>
                </Link>
                <br></br>
            </div>
            <div className="row">
                <div className="RSOcolumn">Your RSOs
                    <div className="card"></div>
                </div>
                <div className="RSOcolumn">Other RSOs
                    <div className="card"></div>
                </div>
            </div>
        </body>
    );
}