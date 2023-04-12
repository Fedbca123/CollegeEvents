import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewEvent() {

    return (
        <body>
            <div class="topnav">
                <Link to="/events" className="navbarButt">All Events</Link>
                <Link to="/orgs" className="navbarButt">All RSOs</Link>
                <Link to="/" className="logoutButt">Log out</Link>
            </div>
            <h1>Register a New Event</h1>
            <form>
                <label className="label">Name: </label>
                <input className="input" id="name" type="text"/>
                <br/><br/>
                <label className="label">Description: </label>
                <textarea className="input" id="description" rows="4"></textarea>
                <br/><br/>
                <label className='label'>Location: </label>
                <input className="input" id="location" type="text"/>
                <br/><br/>
                <label className="label">Date: </label>
                <input className="input" id="date" type="date"/>
                <br/><br/>
                <label className="label">Time: </label>
                <input className="input" id="time" type="time"/>
                <br/><br/>
                <label className='label'>Category: </label>
                <input type="radio" id="public" value="cat1" name="evntCat"/>
                <label>Public</label>
                <input type="radio" id="private" value="cat2" name="evntCat"/>
                <label>Private</label> 
                <input type="radio" id="rso" value="cat3" name="evntCat"/>
                <label>RSO</label>
                <br/><br/>
                <label className="label">Phone Number: </label>
                <input className="input" id="phone" type="text"/>
                <br/><br/>
                <label className="label">Email Address: </label>
                <input className="input" id="email" type="text"/>
                <br/><br/>
                <Link to="/dash">
                    <button className="btn"type="submit">Create Event</button>
                </Link>
            </form>
        </body>
    )
}