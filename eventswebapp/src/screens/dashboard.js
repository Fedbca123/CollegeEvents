import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <body>
            <h1>Welcome [Name]!</h1>
            <Link to="/events">
                <button className="pageButt" type='button'>Events</button>
            </Link>
            <Link to="/orgs">
                <button className="pageButt" type='button'>RSOs</button>
            </Link>
        </body>
    );
}