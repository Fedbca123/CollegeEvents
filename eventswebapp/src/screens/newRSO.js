import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewRSO() {
    return (
        <body>
            <div class="topnav">
                <Link to="/events" className="navbarButt">All Events</Link>
                <Link to="/orgs" className="navbarButt">All RSOs</Link>
                <Link to="/" className="logoutButt">Log out</Link>
            </div>
            <h1>Create a new RSO</h1>
            <form>
                <label className="label">RSO Name: </label>
                <input className="input" id="name" type="text"/>
                <br/><br/>
                <label className='label'>Administrator Email: </label>
                <input className="input" id="admin" type="text"/>
                <br/><br/>
                <label className="label">Member 1 Email: </label>
                <input className="input" id="mem1" type="text"/>
                <br/><br/>
                <label className="label">Member 2 Email: </label>
                <input className="input" id="mem2" type="text"/>
                <br/><br/>
                <label className="label">Member 3 Email: </label>
                <input className="input" id="mem3" type="text"/>
                <br/><br/>
                <label className="label">Member 4 Email: </label>
                <input className="input" id="mem4" type="text"/>
                <br/><br/>
                <Link to="/orgs">
                    <button className="btn"type="submit">Create RSO</button>
                </Link>
            </form>
        </body>
    )
}