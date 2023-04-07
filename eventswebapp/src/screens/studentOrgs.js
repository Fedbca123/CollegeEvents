import React, { useState } from 'react'


export default function StudentOrgs () {
    return (
        <body>
            <div className="RSOlist">
                <h1>Registered Student Organizations</h1>
                <button className="addNewButt" onClick="openForm()">+</button>
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