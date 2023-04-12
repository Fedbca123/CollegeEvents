import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function StudentOrgs () {
    return (
        <body>
            <div class="topnav">
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