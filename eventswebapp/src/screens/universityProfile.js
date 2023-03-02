import React, { useState } from 'react'

export default function University() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [numStudents, setNumStudents] = useState('');

    return (
        <body>
            <h1>Create your University Profile</h1>
            <form>
                <label className="label">Name: </label>
                <input className="input" id="name" type="text"/>
                <br/><br/>
                <label className='label'>Location: </label>
                <input className="input" id="location" type="text"/>
                <br/><br/>
                <label className="label">Description: </label>
                <textarea rows="4"></textarea>
                <br/><br/>
                <label className='label'>Number of students: </label>
                <input className="input" id="numStudents" type="text"/>
                <br/><br/>
                <button className="btn1" type="submit">Create Profile</button>
            </form>
        </body>
    )
}